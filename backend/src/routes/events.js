const express = require('express');
const router = express.Router();

const { createEvent , getEvent , deleteEvent , updateEvent } = require('../controllers/event');

// const { validateSigninRequest , isRequestValidated } = require('../validators/user');

router
  .route('/create')

  .post( createEvent )

router
  .route('/details/:id')

  .get( getEvent) 

router
  .route('/delete/:id')

  .delete(deleteEvent) 
  
router
    .route('/update/:id')

    .put( updateEvent) 

module.exports = router;