const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	firstname: {
		required: true,
		type: String,
	},
	lastname: {
		required: true,
		type: String,
	},
	address: {
		required: true,
		type: String,
	},
	age: {
		required: true,
		type: Number,
	},
});

module.exports = mongoose.model("Data", dataSchema);
