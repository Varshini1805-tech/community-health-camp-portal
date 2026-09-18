const express = require('express');
const router = express.Router();
const {
  getAllCamps,
  getUpcomingCamps,
  getCampById,
  registerCitizen,
} = require('../controllers/campController');

router.get('/', getAllCamps);
router.get('/upcoming', getUpcomingCamps);
router.get('/:id', getCampById);
router.post('/:id/register', registerCitizen);

module.exports = router;
