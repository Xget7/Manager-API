"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
//validate AUTHORIZATION FROM HEADERS 
module.exports = async (req, res, next) => {
    const isAuthorized = await (0, utils_1.ValidateSignature)(req);
    if (isAuthorized) {
        return next();
    }
    return res.status(403).json({ message: 'No Authorizado' });
};
//# sourceMappingURL=index.js.map