class TodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }

    async createTodo(data) {
        return await this.todoModel.create(data);
    }

    async getAllTodos() {
        return await this.todoModel.findAll();
    }

    async getTodoById(id) {
        return await this.todoModel.findByPk(id);
    }

    async updateTodoById(id, data) {
        const todo = await this.todoModel.findByPk(id);
        if (todo) {
            return await todo.update(data);
        }
        return null;
    }

    async deleteTodoById(id) {
        const todo = await this.todoModel.findByPk(id);
        if (todo) {
            await todo.destroy();
            return true;
        }
        return false;
    }
}

module.exports = TodoService;


