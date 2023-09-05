import { cli } from 'winston/lib/winston/config';
import ClientRepository from '../database/repository/clients/client-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class ClientService {
    private repository: ClientRepository;
   
    constructor() {
    this.repository = new ClientRepository();
    }

     async CreateClient(values: Record<string, any>) {
        try {
          const existingUser = await this.repository.CreateClient(values);
          return existingUser;
        } catch (err) {
          throw new APIError('Error al intentar crear cliente.', err);
        }
      }
    
      async FindClientById(uid: string) {
        try {
          const existingClient = await this.repository.FindClientByUid(uid);
          return existingClient;
        } catch (err) {
          throw new APIError('Cliente no encontrado', err);
        }
      }

      async AddSurveyToClient(surveyId: string, clientId : string) {
        try {
          const existingClient = await this.repository.AddSurveyId(surveyId,clientId);
          return existingClient;
        } catch (err) {
          throw new APIError('Error al añadir planilla al cliente', err);
        }
      }


}

export default ClientService