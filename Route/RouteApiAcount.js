var express = require("express");
var router = express.Router();

const ModelAcount = require("../Model/ModelAcount");

router.get("/", (rq, rs) => {
  rs.send("Vao API ModelAcount");
});

router.get("/get-list-ModelAcount", async (req, res) => {
  try {
    const data = await ModelAcount.find();
    console.log(data)
    res.json(data); 
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
});


module.exports = router;