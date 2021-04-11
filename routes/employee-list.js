const express = require('express');
const empRouter = express.Router();

empRouter.get('/', (req, res, next) =>{
    res.status(200).json({
        id : 1234,
        disignation : 'senior Technician',
        project : 'Fuze Ginger'
    });
})

empRouter.post('/',(req, res, next) => {
    res.status(200).json({
        product : 'Telecom CQ',
        description : 'For Signaling',
        remarks : 'Working Fine'
    })
})
module.exports = empRouter;