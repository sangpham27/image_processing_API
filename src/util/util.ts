import fs from 'fs'
import Sharp = require('sharp')
import { PATH_DIR } from '../constants/dir'
import Jimp = require('jimp')

/**
 * Helper function to download, filter, and save the filtered image locally
 * Returns the absolute path to the local image
 * @param inputURL - a publicly accessible url to an image file
 * @returns an absolute path to a filtered image locally saved file
 */
export async function filterImageFromURL(inputURL: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const outpath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg'
      const photo = Jimp.read(inputURL)
      photo.then((img) => {
        img.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
          Sharp(buffer)
            .resize(256, 256)
            .jpeg({ quality: 60 })
            .grayscale()
            .toFile(PATH_DIR + outpath, (err) => {
              if (err) {
                reject(err)
              } else {
                resolve(PATH_DIR + outpath)
              }
            })
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Helper function to delete files on the local disk
 * @param files Array<string> an array of absolute paths to files
 * @returns useful to cleanup after tasks
 */
export async function deleteLocalFiles(files: Array<string>) {
  for (const file of files) {
    fs.unlinkSync(file)
  }
}
