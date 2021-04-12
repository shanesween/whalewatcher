// import entire SDK
import AWS from 'aws-sdk';

AWS.config.update({ region: "us-east-1" });
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials?.accessKeyId);
  }
});

export const dynamodb = new AWS.DynamoDB()
export const docClient = new AWS.DynamoDB.DocumentClient()

var params = {
  TableName: "Sightings",
  KeySchema: [
    { AttributeName: "date", KeyType: "HASH" },  //Partition key
    { AttributeName: "count", KeyType: "RANGE" }  //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "date", AttributeType: "N" },
    { AttributeName: "count", AttributeType: "N" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function (err, data) {
  if (err) {
    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
  }
});
