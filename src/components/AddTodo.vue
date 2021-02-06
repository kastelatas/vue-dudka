<template>
  <div class="add-todo">
    <span class="add-todo__title">
      Название задачи
    </span>
    <input type="text" class="add-todo__new" v-model="todo" />
    <button @click="addTodo" class="btn">Добавить</button>
  </div>
</template>

<script>
export default {
  name:'add-todos',
  data(){
    return{
      todo:''
    }
  },
  watch:{
    todo(newVal) {
      let re = /[^A-Z0-9]/gi;
      this.$set(this, 'todo', newVal.replace(re, ''));
    }
  },
  methods:{
    addTodo(){
      if (this.todo.trim()) {
        this.$store.commit('addTodo', {
          id:this.todo+'1',
          title: this.todo,
          completed: false
        })

        this.$store.commit('showTodo')
        this.todo = '';
      }
    },
  }
}
</script>

