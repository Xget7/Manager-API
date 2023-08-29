import { ValidateSignature } from '../../utils';

//validate AUTHORIZATION FROM HEADERS 
module.exports = async (req : any,res:any,next:any) => {
    const isAuthorized = await ValidateSignature(req);

    if(isAuthorized){
        return next();
    }
    return res.status(403).json({message: 'No Authorizado'})
}