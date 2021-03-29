// import entire SDK
import AWS from 'aws-sdk';

AWS.config.update({ region: "us-east-1" });

export const dynamodb = new AWS.DynamoDB()

var params = {
  TableName: "WhaleSightings",
  KeySchema: [
    { AttributeName: "date", KeyType: "HASH" },  //Partition key
    { AttributeName: "dailyTotalCount", KeyType: "RANGE" }  //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "date", AttributeType: "S" },
    { AttributeName: "dailyTotalCount", AttributeType: "N" }
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
