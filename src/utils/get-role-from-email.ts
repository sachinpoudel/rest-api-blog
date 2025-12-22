import { Env } from "../configs/env-config"
import { AUTHORIZATION_ROLES } from "../constants/auth";

export const getRoleFromEmail = (email:string) :string => {
    const {ADMIN_EMAILS,SUPERVISOR_EMAILS,MODERATOR_EMAILS } = Env;


    if(ADMIN_EMAILS && JSON.parse(ADMIN_EMAILS).includes(email)) {
        return AUTHORIZATION_ROLES.ADMIN;
    }
    if(SUPERVISOR_EMAILS && JSON.parse(SUPERVISOR_EMAILS).includes(email)) {
        return AUTHORIZATION_ROLES.SUPERVISOR;
    }
    if(MODERATOR_EMAILS && JSON.parse(MODERATOR_EMAILS).includes(email)) {
        return AUTHORIZATION_ROLES.MODERATOR;
    }
    return AUTHORIZATION_ROLES.USER;
}