import { ClientSchema } from '../../../database/models/client';
import mongoose from 'mongoose';
import { cli } from 'winston/lib/winston/config';

export const clientModel = mongoose.model('Client', ClientSchema);


class ClientRepository {

  async CreateClient(values: Record<string, any>) {
        try {
            const client = clientModel.create(values).then((Client) => Client.toObject());
            return client
        } catch (err) {
            console.log("Error creating Device:", err);
        }
    }

    async FindClientByUid(uid: string) {
        return clientModel.find({uid : uid});
    }

    async AddSurveyId(surveyId: string, clientId: string) {
        try {
            const client = await clientModel.findOne({ uid: clientId });
    
            if (!client) {
                console.log("Cliente no encontrado.");
                throw Error("Cliente no encontrado");
            }
    
            // Agregar la nueva ID de encuesta al array de encuestas del cliente
            client.machines.push(surveyId);
            await client.save();

            return client;
        } catch (err) {
            console.log("Error al agregar la ID de survey:", err);
            throw err; // Puedes lanzar el error para manejarlo en un nivel superior
        }
    
    }
}

export default ClientRepository