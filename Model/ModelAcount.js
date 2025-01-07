const mongoose = require("mongoose");

const ModelAcount = new mongoose.Schema(
    {
        name: { type: String },
        pass: { type: String },
        image: { type: String }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("modelAcount", ModelAcount);