<template>
  <li class="todo-list__item" :class="{'done':todo.completed}">
    <input type="checkbox" :id="todo.id" class="completed" v-on:change="completedHanlder(todo)" :checked="todo.completed" />
    <label :for="todo.id">
      <span class="title"> {{ todo.title }}</span>
    </label>
    <button @click="deleteTodo(todo.id)" class="delete">
      <img src="../assets/img/delete.svg" alt="">
    </button>
  </li>
</template>

<script>
export default {
  name:'Todo',
  props:{
    todo:{
      type:Object,
      require: true
    }
  },
  methods:{
    deleteTodo(id){
      console.log(id)
       this.$store.commit('deleteTodo', id)
    },
    completedHanlder(todo){
      this.$store.commit('updateTodo', todo)

    }
  },
}
</script>

