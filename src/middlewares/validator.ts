import { NextFunction } from 'express';
import {z} from 'zod';
import zod from 'zod'
import { UnprocessableEntity } from './error/app-error';


const validator = async(SchemaName: any, body:object, next:NextFunction) => {
    const value =await SchemaName.safeParse(body);
    if(!value.success){
        return new UnprocessableEntity(value.error.errors[0].message);
    }
    next();
}

export default validator;