import express from 'express';
import { APIError } from '../../utils/app-errors';
import MachineService from '../../services/machine-service';
import UserService from '../../services/user-service';

const machineService = new MachineService();
const userService = new UserService();

export const GetMachine = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const existingMachine = await machineService.GetMachineById(id);

    if (!existingMachine) {
      return res.status(404).json({ message: "Máquina no encontrada" });
    }

    return res.status(200).json(existingMachine);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener máquina" });
  }
};

export const CreateMachine = async (req: express.Request, res: express.Response) => {
    try {
      const { reception, machineSurvey } = req.body; // Adjust the field names accordingly
  
      if (!reception) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
      }
  
      const machineData = {
        reception: reception,
        machineSurvey: machineSurvey || null, // Adjust for your schema
      };
  
      const newMachine = await machineService.CreateMachine(machineData);
  
      const modifiedResponse = {
        id: newMachine._id,
        reception: newMachine.reception,
        machineSurvey: newMachine.machineSurvey,
        // Add other fields as needed
      };
  
      return res.status(200).json(modifiedResponse);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error creando planilla" });
    }
  };

export const UpdateMachine = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const updatedMachine = await machineService.UpdateMachineById(id, updateData);

    if (!updatedMachine) {
      return res.status(404).json({ message: "No se ha podido actualizar la planilla." });
    }

    return res.status(200).json(updatedMachine);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar planilla." });
  }
};


export const GetMachinesByClientId = async (req: express.Request, res: express.Response) => {
    try {
      const client_id = req.params.id;
  
      if (!client_id) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
      }
  
      const existingDevices = await machineService.GetMachinesByClientId(client_id);
  
      if (existingDevices.length === 0) {
        return res.status(200).json([]); // Return an empty array if no devices found
      }
  
      return res.status(200).json(existingDevices);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error al obtener dispositivos" });
    }
  };
  