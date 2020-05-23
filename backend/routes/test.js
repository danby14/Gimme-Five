const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send('got to tester');
});

module.exports = router;
