import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'

export const verifyToken = (req,res,next) =>{
    const token = req.cookie.access_token // in order to get cooky need another package cookie parser in backend
    if(!token){
        return next(errorHandler(401,'Unauthorized'))

    }jwt.verify(token,process.env.JWT_SCRET,(error,user)=>{
        if(error){
            return next(errorHandler(401,'unauthorized'))
        }
        req.user = user
    })
}