const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/comment', homeRoutes);
router.use('/dashboard', homeRoutes);
router.use('/Homepage', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
