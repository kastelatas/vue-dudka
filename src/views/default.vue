<template>
  <div class="default" >
    <Header/>
    <div class="container">
      <template v-if="!this.$store.state.showTodos">
        <TodoList :todos="todos"/>
      </template>
      <AddTodo v-else/>
      <template v-if="!this.$store.state.showTodos && !todos.length">
        <img src="../assets/img/no-todos.svg" alt="" class="img-no-todos"/>
        <p class="no-todos">Ваш список задач - пустой </p>
      </template>
      <button
          @click="showTodo"
          v-if="!this.$store.state.showTodos"
          class="btn"
      >
        + Новое задение
      </button>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Header from "@/components/Header";
import AddTodo from "@/components/AddTodo";

export default {
  name: 'Home',
  components: {
    TodoList,
    Header,
    AddTodo
  },
  computed: {
    todos() {
      return this.$store.getters['getTodos']
    }
  },
  methods: {
    showTodo() {
      this.$store.commit('showTodo')
    }
  },
  mounted() {
    this.$store.dispatch('init')
  }
}
</script>


