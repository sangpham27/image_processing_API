import request from 'supertest'
import app from '../../index'
describe('getImageFromURl', () => {
  it('fetches an image from an HTTP URL', async () => {
    const response = await request(app)
      .get('/filteredimage')
      .query({ image_url: 'https://znews-photo.zingcdn.me/w960/Uploaded/mdf_uswreo/2023_03_09/df3_data_1.jpg' })
    expect(response.status).toBe(200)
    expect(response.header['content-type']).toMatch(/image/)
  })

  it('should return a 400 status if image_url is missing', async () => {
    const response = await request(app).get('/filteredimage')

    expect(response.status).toBe(400)
  })
})
