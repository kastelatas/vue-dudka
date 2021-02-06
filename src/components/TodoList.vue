<template>
<div class="todo-list">
  <ul class="todo-list__container">
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
  name: 'Todo-list',
  components:{
    Todo
  },
  props:{
    todos:{
      type: Array,
    }
  },

}
</script>