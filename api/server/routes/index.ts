import { Router } from "express";

const router = Router()

router.use("/sightings", require("./sightings"))

router.use((req, res, next) => {
  const error = new Error("Not Found");
  next(error);
});
module.exports = router