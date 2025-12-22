const httpConfig = () =>  {
    const config ={
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        INTERNAL_SERVER_ERROR: 500,
        UNPROCESSED_ENTITY: 422 
    }
    return config;
}
export const HTTPSTATUS = httpConfig();
export type httpstatusCodeType =(typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];