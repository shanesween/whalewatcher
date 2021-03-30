import AWS from 'aws-sdk';
import getData from '../src/index'

AWS.config.update({ region: "us-east-1" });

export const docClient = new AWS.DynamoDB.DocumentClient()

export const loadData = async () => {
  console.log("getData through loadData")
  const data = await getData()
  console.log("Are we here after getData?");


  console.log("data in the HOUSE", data);

  data?.forEach((day) => {
    const params = {
      TableName: "Sightings",
      Item: {
        "date": day.date,
        "count": day.dailyTotalCount,
        "mammals": day.mammals
      }
    }

    day.date && docClient.put(params, function (err, data) {
      if (err) {
        console.error("Unable to add day", day.date, ". Error JSON:", JSON.stringify(err, null, 2))
      } else {
        console.log("PutItem succeeded:", day.date);

      }
    })
  })
}

export default loadData
