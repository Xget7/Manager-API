
import { int } from "aws-sdk/clients/datapipeline";
import {config} from '../config/index'
import { EventBridgeClient, PutTargetsCommand } from "@aws-sdk/client-eventbridge";
import { PutRuleCommand } from "@aws-sdk/client-eventbridge";
const credentials = {
    region: config.REGION,
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY,
      secretAccessKey: config.AWS_PRIVATE_ACCESS_KEY
    }
};

const eventBridge = new EventBridgeClient(credentials); // Replace "us-east-1" with your desired AWS region

export const params = {
    Name: "MachineTestTime",
    RoleArn: "arn:aws:iam::018838635718:role/service-role/machineTestTimeNotification-role-yemt1xjz", //IAM_ROLE_ARN
    ScheduleExpression: "cron(0 0 * * ? *)",
    State: "ENABLED",
  };

  

class RulesService {

    

    async CreateRule(hours : int) {
        try {
            const response = await eventBridge.send(new PutRuleCommand(params));

            console.log('Rule created:', response.RuleArn);

            const currentTime = new Date();
            const targetTime = new Date(currentTime.getTime() + hours * 60 * 60 * 1000); 
            // Calculate the target time in milliseconds from the current time
            
            const scheduleExpression = `cron(${targetTime.getUTCMinutes()} ${targetTime.getUTCHours()} * * ? *)`;


            const putTargetsParams = {
                Rule: 'MachineTestTime', // Replace with the rule name you just created
                Targets: [
                    {
                    Arn: 'arn:aws:lambda:sa-east-1:018838635718:function:machineTestTimeNotification', // Replace with your Lambda function ARN
                    Id: '1', // An arbitrary ID for the target
                    },
                ],
                ScheduleExpression: scheduleExpression,
          };
      
          const addTargetResponse = await eventBridge.send(new PutTargetsCommand(putTargetsParams))
         console.log('Target added to rule:', addTargetResponse);
        } catch (error) {
          console.error('Error creating rule:', error);
          throw error
        }
    };
}



export default RulesService