import { observable, action, computed } from 'mobx';

class TodoStore {

    @observable time = '2020';

    @observable todos = [];

    @computed 
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action
    setState(obj) {
        if (Object.prototype.toString.call(obj) === "[object Object]") {
            for (var key in obj) {
                if (key in this) {
                    this[key] = obj[key];
                }
            }
        }
    }

    @action 
    addTodo() {
        this.todos.push('一条新任务');
    }

    @action 
    removeTodo() {
        this.todos.pop();
    }

    @action 
    clearTodo() {
        this.todos = [];
    }
};

export default new TodoStore();
