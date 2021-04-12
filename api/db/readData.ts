import AWS from 'aws-sdk';
import { docClient } from '.';
AWS.config.update({ region: "us-east-1" });

let table = 'Sightings'

let date = '11/11/2020'
let count = 290

let params = {
  TableName: table,
  Key: {
    "date": date,
    "count": count
  }
}

docClient.get(params, function (err, data) {
  if (err) {
    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});
