import AWS from 'aws-sdk';
import { Router } from 'express';

export const router = Router();

router.get('/', (req, res, next) => {
  AWS.config.update({ region: 'us-east-1' });
  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: 'Sightings',
  };

  docClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const items = data.Items;
      res.send(items);
    }
  });
});

module.exports = router;
