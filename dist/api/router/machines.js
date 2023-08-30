"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const machines_1 = require("../controllers/machines");
exports.default = (router) => {
    router.post('/machine', machines_1.CreateMachine); //create machine
    router.get('/machine/:id', machines_1.GetMachine); // get machine
    router.put('/machine/:id', machines_1.UpdateMachine); // Add this line for the update route
    router.get('/machine/client/:id', machines_1.GetMachinesByClientId); // Add this line for the update route
};
//# sourceMappingURL=machines.js.map