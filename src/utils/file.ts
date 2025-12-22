import fs from 'fs'
import { Env } from '../configs/env-config';

export const deleteFile = async(filePath: fs.PathLike)  => {

fs.stat(filePath, (err, stat) => {
    if(Env.NODE_ENV === 'development') {
        console.log('File exists: ', !err);
        console.log(stat)   
    }

    fs.unlink(filePath, (err) => {
        if(err && Env.NODE_ENV === 'development'){
            console.error('Error deleting file: ', err);
        } else if (Env.NODE_ENV === 'development') {
            console.log('File deleted successfully');
        }
    })
})


}