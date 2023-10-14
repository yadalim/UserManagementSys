const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

module.exports = router;
const Model = require("../models/model");
//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
	try {
		const id = req.params.id;
		if (mongoose.Types.ObjectId.isValid(id)) {
			const data = await Model.findByIdAndDelete(id);
			res.send(`User details with ${data.firstname} has been deleted..`);
		} else {
			res.status(400).json({ error: "Invalid ObjectId param" });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
router.post("/post", async (req, res) => {
	const data = new Model({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age,
		address: req.body.address,
	});
	try {
		const dataToSave = await data.save();
		res.status(200).json(dataToSave);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.get("/getAll", async (req, res) => {
	try {
		const data = await Model.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
	try {
		const data = await Model.findById(req.params.id);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const updatedData = req.body;
		const options = { new: true };

		const result = await Model.findByIdAndUpdate(id, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
