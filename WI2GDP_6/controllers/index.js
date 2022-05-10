const models = require('../models');

const createTodo = async (req, res) => {
    try {
        const todo = await models.TODO.create(req.body);
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getAllTodo = async (req, res) => {
    try {
      const todos = await models.TODO.findAll();
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const getTodoById = async (req, res) => {
    try {
      const { todoId } = req.params;
      const todo = await models.TODO.findOne({
        where: { id: todoId },
      });
      if (todo) {
        return res.status(200).json(todo);
      }
      return res.status(404).send('Ilyen ID-vel rendelkező TODO nem létezik.');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateTodo = async (req, res) => {
    try {
      const { todoId } = req.params;
      const [ updated ] = await models.TODO.update(req.body, {
        where: { id: todoId }
      });
      if (updated) {
        const updatedTodo = await models.TODO.findOne({ where: { id: todoId } });
        return res.status(200).json(updatedTodo);
      }
      throw new Error('Todo not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteTodo = async (req, res) => {
    try {
      const { todoId } = req.params;
      const deleted = await models.TODO.destroy({
        where: { id: todoId }
      });
      if (deleted) {
        return res.status(200).send("Todo deleted");
      }
      throw new Error("Todo not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    createTodo,
    getAllTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}