const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({ message: 'This is a message from server' });
});

module.exports = router;
