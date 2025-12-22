import mongoose from 'mongoose'
import { Env } from './env-config'
mongoose.set('strictQuery', true)






export const connectDB = async (MONGO_URL:any) => {

    //this run on successful connection

    mongoose.connection.on('connected', () => {
        if (Env.NODE_ENV && Env.NODE_ENV === 'development') {
            console.log('connected successfully')
        }
    });

    // for reconnection


    mongoose.connection.on('reconnect', () => {
        if (Env.NODE_ENV && Env.NODE_ENV === 'development') {

            console.log("reconnected succesfully")
        }

    });

    mongoose.connection.on('error', (error) => {
        if (Env.NODE_ENV && Env.NODE_ENV === 'development') {
            console.log("connection error make sure key is set",)
            console.log(error)
        }
    });

    mongoose.connection.on('close', () => {
        if(Env.NODE_ENV && Env.NODE_ENV === 'development'){
            console.log("connection closed")
        }
    });

    mongoose.connection.on('disconnect' , () => {
        if(Env.NODE_ENV && Env.NODE_ENV === 'development'){
            console.log("connection disconnected")
            console.log("trying to reconnect")
        }

        setTimeout(() => {
            mongoose.connect(MONGO_URL, {
                socketTimeoutMS: 3000,
                connectTimeoutMS: 3000
            })
        }, 3000);

    });

    // Actually connect to MongoDB
    await mongoose.connect(MONGO_URL, {
        socketTimeoutMS: 3000,
        connectTimeoutMS: 3000
    });

}