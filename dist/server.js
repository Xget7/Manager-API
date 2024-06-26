"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("./database/connection");
const index_1 = __importDefault(require("./api/router/index"));
const index_2 = require("./config/index");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
aws_sdk_1.default.config.update({
    accessKeyId: index_2.config.AWS_ACCESS_KEY,
    secretAccessKey: index_2.config.AWS_PRIVATE_ACCESS_KEY,
    region: index_2.config.REGION,
    apiVersion: 'latest',
});
(0, connection_1.connectToDatabase)()
    .then(() => {
    app.use('/', (0, index_1.default)());
    server.listen(index_2.config.PORT, () => {
        console.log('Server running on http://localhost:' + index_2.config.PORT);
    });
})
    .catch((error) => {
    console.error('Error connecting to the database:', error);
});
//# sourceMappingURL=server.js.map