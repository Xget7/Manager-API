import express from 'express';
import UserService from '../../services/user-service';

const userService = new UserService();

export const GetUser = async (req: express.Request, res: express.Response) => {
     try {
          const id = req.params.id;

          if (!id){
               return res.status(400).json({ message: "Se requiere el parámetro 'id'" });
          }

          const existingUser = await userService.FindUserById(id)

          if (!existingUser) {
               return res.status(404).json({ message: "Usuario no encontrado" });
          }

          const modifiedUser = {
               id: existingUser._id,
               username: existingUser.username,
               email: existingUser.email,
               phoneNo: existingUser.phoneNo,
               stores: existingUser.stores,
          };

          return res.status(200).json(modifiedUser);
     } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Error al obtener usuario" });
     }
}

export const DeleteUser = async (req: express.Request, res: express.Response) => {
     try {
       const id = req.params.id;
   
       if (!id) {
         return res.status(400).json({ message: "Se requiere el parámetro id" });
       }
   
       await userService.DeleteUserById(id);
   
       return res.status(200).json({ message: "Usuario eliminado correctamente" });
     } catch (error) {
       console.log(error);
       return res.status(500).json({ message: "Error al eliminar usuario" });
     }
}

export const UpdateUser = async (req: express.Request, res: express.Response) => {
     try {
       const id = req.params.id;
       const values = req.body;
   
       if (!id) {
         return res.status(400).json({ message: "Se requiere el parámetro 'id'" });
       }
   
       await userService.UpdateUserById(id, values);
   
       return res.status(200).json({ message: "Usuario actualizado correctamente" });
     } catch (error) {
       console.log(error);
       return res.status(500).json({ message: "Error al actualizar usuario" });
     }
}
   

   