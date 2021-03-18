import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USER_NAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        USER_NAME:'invalid_user',
        PASSWORD:'invalid_password'
    },
    USER_INFORMATION: {
        FIRST_NAME:'Rigoberto',
        LAST_NAME:'Calderon',
        ZIP_CODE:'1234'
    }
}