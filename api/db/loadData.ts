import AWS from 'aws-sdk';
import getData from '../src';

export const loadData: () => Promise<void> = async () => {
  AWS.config.update({ region: 'us-east-1' });
  const docClient = new AWS.DynamoDB.DocumentClient();
  const data = await getData();

  const today: Date = new Date();
  const yesterday: Date = new Date();

  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  if (data) {
    for (const day of data) {
      const newDate = new Date(day.date);
      newDate.setHours(0, 0, 0, 0);

      // if (newDate.getTime() === yesterday.getTime()) {
      //   console.log("we have current data");
      //   break;
      // }

      const params = {
        TableName: 'Sightings',
        Item: {
          date: day.date,
          count: day.dailyTotalCount,
          mammals: day.mammals,
        },
      };

      day.date && docClient.put(params, (err) => {
        if (err) {
          console.error('Unable to add day', day.date, '. Error JSON:', JSON.stringify(err, null, 2));
        } else {
          console.log('PutItem succeeded:', day.date);
        }
      });
    }
  }
};

export default loadData;
