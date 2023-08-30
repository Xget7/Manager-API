import UserRepository from "./user-repository"


export class OfficeUserRepository extends UserRepository {

    async someOfficeSpecificFunction(userId: string) {
      // Implement your office-specific logic here
    }

}


