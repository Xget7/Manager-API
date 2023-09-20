"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
const index_1 = require("../config/index");
const client_eventbridge_1 = require("@aws-sdk/client-eventbridge");
const client_eventbridge_2 = require("@aws-sdk/client-eventbridge");
const credentials = {
    region: index_1.config.REGION,
    credentials: {
        accessKeyId: index_1.config.AWS_ACCESS_KEY,
        secretAccessKey: index_1.config.AWS_PRIVATE_ACCESS_KEY
    }
};
const eventBridge = new client_eventbridge_1.EventBridgeClient(credentials); // Replace "us-east-1" with your desired AWS region
exports.params = {
    Name: "MachineTestTime",
    RoleArn: "arn:aws:iam::018838635718:role/service-role/machineTestTimeNotification-role-yemt1xjz",
    ScheduleExpression: "cron(0 0 * * ? *)",
    State: "ENABLED",
};
class RulesService {
    async CreateRule(hours) {
        try {
            const response = await eventBridge.send(new client_eventbridge_2.PutRuleCommand(exports.params));
            console.log('Rule created:', response.RuleArn);
            const currentTime = new Date();
            const targetTime = new Date(currentTime.getTime() + hours * 60 * 60 * 1000);
            // Calculate the target time in milliseconds from the current time
            const scheduleExpression = `cron(${targetTime.getUTCMinutes()} ${targetTime.getUTCHours()} * * ? *)`;
            const putTargetsParams = {
                Rule: 'MachineTestTime',
                Targets: [
                    {
                        Arn: 'arn:aws:lambda:sa-east-1:018838635718:function:machineTestTimeNotification',
                        Id: '1', // An arbitrary ID for the target
                    },
                ],
                ScheduleExpression: scheduleExpression,
            };
            const addTargetResponse = await eventBridge.send(new client_eventbridge_1.PutTargetsCommand(putTargetsParams));
            console.log('Target added to rule:', addTargetResponse);
        }
        catch (error) {
            console.error('Error creating rule:', error);
            throw error;
        }
    }
    ;
}
exports.default = RulesService;
//# sourceMappingURL=rules-service.js.map