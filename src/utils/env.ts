export const getEnv = (key: string, defaultValues?:any) =>{
    const value = process.env[key] ?? defaultValues;


    if(value === undefined){
        if(defaultValues){
            return defaultValues
        }
        throw new Error(`env ${key} not set properly`)


    }
return value
} 