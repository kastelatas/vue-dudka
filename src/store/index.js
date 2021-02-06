import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {id: 1, title: 'Text1', completed: false}
        ],
        showTodos: false
    },
    actions: {
        init(ctx) {
            console.log('init load!');
            let todos = JSON.parse(localStorage.getItem('todos'));
            if (todos) {
                ctx.commit('initTodos', todos);
            }
        }
    },
    mutations: {
        initTodos(state, payload) {
            state.todos = payload;
        },
        addTodo(state, payload) {
            state.todos.push(payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter(item => item.id !== id);
            console.log(state.todos)
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        showTodo(state) {
            state.showTodos = !state.showTodos;
        },
        updateTodo(state, todo){
            let index = state.todos.findIndex(item => item.id === todo.id);
            state.todos[index].completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        reload(state){
            state.todos = [];
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }

    },
    getters: {
        getTodos(state) {
            return state.todos
        }
    }
})