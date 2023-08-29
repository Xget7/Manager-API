"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../controllers/store");
exports.default = (router) => {
    router.post('/store', store_1.CreateStore);
    router.get('/store/:id', store_1.GetStore);
    router.put('/store/:id', store_1.UpdateStore); // Add this line for the update route
};
//# sourceMappingURL=store.js.map