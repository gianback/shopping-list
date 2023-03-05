import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function uploadImageCloudinary(image: string): Promise<string> {
  const { secure_url: imageUrl } = await cloudinary.uploader.upload(image, {
    use_filename: true
  })

  return imageUrl
}
