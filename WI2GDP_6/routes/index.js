const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Router megy.'));

router.post('/todo', controllers.createTodo);
router.get('/todo', controllers.getAllTodo);
router.get('/todo/:todoId', controllers.getTodoById);
router.put('/todo/:todoId', controllers.updateTodo);
router.delete('/todo/:todoId', controllers.deleteTodo);

module.exports = router;