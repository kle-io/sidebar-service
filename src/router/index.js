const router = require('express').Router();
const api = require('./api');

// Endpoints
router.get('/api/sidebar/songs/:id', api.songs.get);
router.get('/api/sidebar/users/:username', api.users.get);
router.post('/api/sidebar/users/:username', api.users.post);

module.exports = router;
