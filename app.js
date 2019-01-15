new Vue({
  el: "#todo",
  data: {
    todos: [
      { task: "Take out trash", completed: false },
      { task: "Do Homework", completed: false }
    ],
    newTodo: ""
  },
  methods: {
    inputTodo: function(e) {
      this.newTodo = e.target.value;
    },
    addTodo: function(e) {
      e.preventDefault();
      const newTodo = {
        task: this.newTodo,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodo = "";
    }
  }
});
