import express from 'express';
import StoreService from '../../services/store-service';
import UserService from '../../services/user-service';

const storeService = new StoreService();
const userService = new UserService();

export const GetStore = async (req: express.Request, res: express.Response) => {
     try {
          const id = req.params.id;

          if (!id){
               return res.status(400).json({ message: "Faltan campos obligatorios" });
          }

          const existingStore = await storeService.GetStoreById(id)

          if (!existingStore) {
               return res.status(404).json({ message: "Tienda no encontrada" });
          }

          
          return res.status(200).json(existingStore);
     } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Error al obtener tienda" });
     }
}

export const CreateStore = async (req: express.Request, res: express.Response) => {
     try {
          const { admin_id, name, devices, users } = req.body;
          
          if (!admin_id || !name) {
               return res.status(400).json({ message: "Faltan campos obligatorios" });
          }


          const storeData = {
          user_admin_id: admin_id,
          name: name,
          devices: devices || [],
          users: users || [],
          };
          
          const newStore = await storeService.CreateStore(storeData);

          const admin = userService.FindUserById(admin_id)

          if(!admin){
               return res.status(400).json({ message: "Usuario administrador no existe." });
          }

          const result = await userService.AddStoreToUser(admin_id,newStore._id.toString())

          if(result == false){
               return res.status(400).json({ message: "Error al agregar la tienda al usuario" });
          }

          const modifiedResponse = {
               id: newStore._id, // Modify the field name to "id"
               user_admin_id: newStore.user_admin_id,
               name: newStore.name,
               devices: newStore.devices,
               users: newStore.users,
             };

          
          return res.status(200).json(modifiedResponse);
     } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Error creando tienda" });
     }
}

export const UpdateStore = async (req: express.Request, res: express.Response) => {
     try {
       const id = req.params.id;
       const updateData = req.body;
   
       if (!id) {
         return res.status(400).json({ message: "Faltan campos obligatorios" });
       }
   
       const updatedStore = await storeService.UpdateStoreById(id, updateData);
   
       if (!updatedStore) {
         return res.status(404).json({ message: "Tienda no encontrada" });
       }
   
       return res.status(200).json(updatedStore);
     } catch (error) {
       console.log(error);
       return res.status(500).json({ message: "Error al actualizar tienda" });
     }
   };