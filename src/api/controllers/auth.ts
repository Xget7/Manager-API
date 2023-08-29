import express from 'express';
import { GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from '../../utils/index'
import { APIError } from '../../utils/app-errors';
import UserService from '../../services/user-service';

const userService = new UserService();


export const SingIn = async (req: express.Request, res: express.Response) => {
     try {
          const {email , password} = req.body

          if (!email || !password){
               return res.sendStatus(400);
          }

          const user = await userService.GetUserByEmail(email)

          if(!user){
               return res.status(400).json({ message: "Email o contraseña incorrecto" });
          }
          

          const validPassword = await ValidatePassword(password, user.password as string, user.salt as string);

          if(validPassword){
               const token = await GenerateSignature({ email: user.email, _id: user._id});
               return res.status(200).json({id: user._id, token })
          } 

          return res.status(400).json({ message: "Email o contraseña incorrecto" });
     } catch (error) {
          console.log(error);
          return res.status(400).json({ message: "Error al intentar autenticar usuario" });
     }
}


export const SignUp = async (req: express.Request, res: express.Response) => {
     try {
       const { email, password, username, phoneNo } = req.body;
   
       if (!email || !password) {
          return res.status(400).json({ message: "Error de validación" }); 
       }
   
       const existingUser =  await userService.GetUserByEmail(email);
   
       if (existingUser) {
          return res.status(400).json({ message: "Correo electrónico ya en uso" });
     }
   
       const salt = await GenerateSalt();
       const userPassword = await GeneratePassword(password, salt);
   
       const createdUser = await userService.CreateUser({
         email: email,
         username: username,
         salt: salt,
         password: userPassword,
         phoneNo: phoneNo,
       });
   
       const token = await GenerateSignature({
         email: email,
         _id: createdUser._id,
       });
   
       return res.status(200).json({ id: createdUser._id, token: token });
     } catch (error) {

          if (error.name === "ValidationError") {
               const errorMessage = extractValidationErrorMessage(error);
               return res.status(400).json({ message: errorMessage }); 
          }

     console.log(error);
     return res.status(400).json({ message: "Error al intentar autenticar usuario" });
     }

   };
   
   function extractValidationErrorMessage(error: any): string {
     const validationErrors = error.errors;
     const errorFields = Object.keys(validationErrors);
     const errorMessage = `Error de validación en los siguientes campos: ${errorFields.join(", ")}`;
     return errorMessage;
   }