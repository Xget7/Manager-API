import express from 'express';
import { APIError } from '../../utils/app-errors';
import SurveyService from '../../services/survey-service';
import UserService from '../../services/user-service';
import ClientService from '../../services/client-service';
import { cli } from 'winston/lib/winston/config';

const machineService = new SurveyService();
const clientService = new ClientService();

export const GetSurvey = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const existingSurvey = await machineService.GetSurveyById(id);

    if (!existingSurvey) {
      return res.status(404).json({ message: "Máquina no encontrada" });
    }

    return res.status(200).json(existingSurvey);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener máquina" });
  }
};

export const CreateSurvey = async (req: express.Request, res: express.Response) => {
    try {
    const { reception, machineSurvey , client_id } = req.body; // Adjust the field names accordingly
  
    if (!reception) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const machineData = {
      clientId : client_id,
      reception: reception,
      machineSurvey: machineSurvey || null, // Adjust for your schema
    };

      

      console.log("Survey data: " , machineData);
      const newSurvey = await machineService.CreateSurvey(machineData);
      var client = clientService.FindClientById(client_id)

      if (client === null) {
        // Client doesn't exist, so create a new client
        await clientService.CreateClient({ uid: client_id, machines: [newSurvey._id.toString()] });
      }

      // Add the survey to the client
      await clientService.AddSurveyToClient(newSurvey._id.toString(), client_id);


      const modifiedResponse = {
        clientId : newSurvey.clientId,
        reception: newSurvey.reception,
        machineSurvey: newSurvey.machineSurvey,
      };
  
      return res.status(200).json(modifiedResponse);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error creando planilla" });
    }
  };

export const UpdateSurvey = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const updatedSurvey = await machineService.UpdateSurveyById(id, updateData);

    if (!updatedSurvey) {
      return res.status(404).json({ message: "No se ha podido actualizar la planilla." });
    }

    return res.status(200).json(updatedSurvey);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar planilla." });
  }
};

export const UpdateSurveyState = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.query.id;
    const state = req.query.state;

    if (!id) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const updatedSurvey = await machineService.ChangeSurveyState(id.toString(), state.toString());

    if (!updatedSurvey) {
      return res.status(404).json({ message: "No se ha podido actualizar la planilla." });
    }

    return res.status(200).json( {message : "Estado Actualizado con exito"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar planilla." });
  }
};

export const GetAllSurveys = async (req: express.Request, res: express.Response) => {
  try {


    const existingDevices = await machineService.GetAllSurveys();

    if (existingDevices.length === 0) {
      return res.status(200).json([]); // Return an empty array if no devices found
    }

    return res.status(200).json(existingDevices);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener planillas" });
  }
};

export const GetSurveysByClientId = async (req: express.Request, res: express.Response) => {
    try {
      const client_id = req.params.id;
  
      if (!client_id) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
      }
  
      const existingDevices = await machineService.GetSurveysByClientId(client_id);
  
      if (existingDevices.length === 0) {
        return res.status(200).json([]); // Return an empty array if no devices found
      }
  
      return res.status(200).json(existingDevices);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error al obtener dispositivos" });
    }
  };
  