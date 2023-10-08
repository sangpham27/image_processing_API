import path from 'path'
import util from '../../util/util'

const filePathFullImage = path.resolve(__dirname, '../../../assets/full/hero.jpg')
const filePathThumbImage = path.resolve(__dirname, '../../../assets/thumb/hero.jpg')

describe('The imageResizer function', (): void => {
  it('returns a buffer after sucessfully resizing an image', async () => {
    const imageBuffer: Buffer = await util.resizeImage({
      height: 100,
      width: 150,
      filePathFullImage,
      filePathThumbImage
    })
    expect(imageBuffer).toBeInstanceOf(Buffer)
  })

  it('rejects promise if something went wrong', async (): Promise<void> => {
    await expect(
      util.resizeImage({
        height: 100,
        width: 150,
        filePathFullImage: '',
        filePathThumbImage
      })
    )
  })
})
