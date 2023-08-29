"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
exports.default = (router) => {
    router.get('/user/:id', user_1.GetUser);
    router.put('/user/:id', user_1.UpdateUser);
    router.delete('/user/:id', user_1.DeleteUser);
};
//# sourceMappingURL=user.js.map