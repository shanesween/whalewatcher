import AWS from 'aws-sdk';
import { docClient } from './createTable';

AWS.config.update({ region: 'us-east-1' });

const table = 'Sightings';

const date = '11/11/2020';
const count = 290;

const params = {
  TableName: table,
  Key: {
    date,
    count,
  },
};

docClient.get(params, (err, data) => {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
  }
});
