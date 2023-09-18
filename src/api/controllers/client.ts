import ClientService from '../../services/client-service';
import express from 'express';


const clientService = new ClientService();

export const GetAllClients = async (req: express.Request, res: express.Response) => {
    try {
    // const { reception, machineSurvey , client_id } = req.body; // Adjust the field names accordingly
      const clients = await clientService.GetAllClients()

      return res.status(200).json(clients);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error obteniendo lista de clientes" });
    }
  };