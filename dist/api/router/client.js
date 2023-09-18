"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../controllers/client");
exports.default = (router) => {
    router.get('/clients', client_1.GetAllClients);
};
//# sourceMappingURL=client.js.map