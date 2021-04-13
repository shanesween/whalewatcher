import AWS from "aws-sdk";
import { Router } from "express";
// import { getSightings } from "../../controller/getSightings";

export const router = Router();
console.log("what the fuck");

router.get("/", async function (req, res, next) {
    AWS.config.update({ region: "us-east-1" });
    const docClient = new AWS.DynamoDB.DocumentClient();

    console.log("fucks to give?");

    const params = {
        TableName: "Sightings"
    }

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("are we here");
            // console.log("DATA", data);
            let items = data.Items

            res.send(items)
            // return data
        }
    })
})

module.exports = router