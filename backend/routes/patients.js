const express = require('express')
const router = express.Router()

const patientController = require('../controllers/patients')
const validation = require('../controllers/validations')

router.get('/', patientController.getPatient)
router.post('/register', validation.registerValidations, patientController.addPatient)

module.exports = router

