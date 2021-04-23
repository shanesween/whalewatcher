import AWS from 'aws-sdk';
import getData from '../src/index'

export const loadData = async () => {
  AWS.config.update({ region: "us-east-1" });
  const docClient = new AWS.DynamoDB.DocumentClient()
  const data = await getData()

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
