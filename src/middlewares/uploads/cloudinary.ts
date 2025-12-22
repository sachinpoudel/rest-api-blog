import Cloudinary from "cloudinary";
import { Env } from "../../configs/env-config";


export const cloudinary = Cloudinary.v2;

cloudinary.config({
    cloud_name: Env.CLOUDINARY_CLOUD_NAME,
    api_key: Env.CLOUDINARY_API_KEY,
    api_secret: Env.CLOUDINARY_API_SECRET,
})


export default cloudinary;