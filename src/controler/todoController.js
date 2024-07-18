class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }

    async createTodo(req, res) {
        const todo = await this.todoService.createTodo(req.body);
        res.status(201).json(todo);
    }

    async getAllTodos(req, res) {
        const todos = await this.todoService.getAllTodos();
        res.status(200).json(todos);
    }

    async getTodoById(req, res) {
        const todo = await this.todoService.getTodoById(req.params.id);
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }

    async updateTodoById(req, res) {
        const todo = await this.todoService.updateTodoById(req.params.id, req.body);
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }

    async deleteTodoById(req, res) {
        const success = await this.todoService.deleteTodoById(req.params.id);
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }
}

module.exports = TodoController;
