const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./comments');
const postRoutes = require('./post');

router.use('/', homeRoutes);
// router.use('/comment', commentRoutes);
// router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
