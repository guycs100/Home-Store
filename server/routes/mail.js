const express = require('express');
const router = express.Router();
const {sendEmail} = require('../utils/helper');




router.post('/submit-form', async (req, res) => {
    if (req.body.subject && req.body.text) 
         await sendEmail(req.body, res)
    
    else res.json({
        success: false,
        message: 'text and title are required!'
    })
})



module.exports = router