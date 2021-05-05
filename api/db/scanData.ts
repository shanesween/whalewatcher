import AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const checkData: () => void = () => {
  AWS.config.update({ region: 'us-east-1' });

  const docClient = new AWS.DynamoDB.DocumentClient();

  const scanParams = {
    TableName: 'Sightings',
    KeyConditionExpression: '#dte > :date',
    ExpressionAttributeNames: {
      '#dte': 'date',
    },
    ExpressionAttributeValues: {
      ':date': 1609488000,
    },
  };

  const today: Date = new Date();
  const yesterday: Date = new Date();

  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  const onScan = (err: Error, data: DocumentClient.ScanOutput) => {
    if (err) {
      console.error('Unable to scan the table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      // print all the movies
      console.log('Scan succeeded.');
      data && data.Items?.forEach((day) => {
        console.log(day.date);
        const newDate = new Date(day.date);
        newDate.setHours(0, 0, 0, 0);
        if (newDate.getTime() === yesterday.getTime()) {
          console.log('we have current data');
        }
      });
    }
  };

  docClient.scan(scanParams, onScan);
};
