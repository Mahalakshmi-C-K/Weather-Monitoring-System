const express = require('express');
const { checkAlertConditions } = require('../controllers/alertController');

const router = express.Router();

router.get('/check', async (req, res) => {
  await checkAlertConditions();
  res.send('Alert checked');
});

module.exports = router;
