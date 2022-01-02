const models = require('../models/index')
const returns = require('./returns')
const validation = require('./validations')

exports.addPatient = async (req, res, next) => {

	//await validation.registerValidations(req, res, message)

	try {
		const patient = await models.patients.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			gender: req.body.gender,
			age: req.body.age,
			facility_name: req.body.facility_name,
			month: req.body.month,
			county: req.body.county
		})

		
		data = {
			patient
		}

		await returns.successfullReturns(req, res, data)

	} catch (err) {
		console.log(err)
	}
}

exports.getPatient = async (req, res, next) => {
	console.log('get patient');
	try {

		const patients = await models.patients.findAll()

		data = { patients }

		await returns.successfullReturns(req, res, data)

	} catch (err) {
		console.log(err);
	}

}
