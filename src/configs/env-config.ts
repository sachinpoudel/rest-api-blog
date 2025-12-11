import dotenv from 'dotenv-safe'
import { getEnv } from '../utils/env';
dotenv.config({
    allowEmptyValues: true
});


 const envConfigs = () => {
    const config = {
        NODE_ENV : getEnv("NODE_ENV"),
        PORT: getEnv("PORT"),
        MONGO_URL: getEnv("MONGO_URL"),
        JWT_TOKEN_SECRET: getEnv("JWT_TOKEN_SECRET")

    }
    return config;
}

export const Env = envConfigs();
