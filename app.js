new Vue({
  el: "#todo",
  data: {
    todos: [
      { task: "Take out trash", completed: false },
      { task: "Do Homework", completed: false }
    ],
    newTodo: "",
    completed: false
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
    },
    removeCompleted: function(e) {
      e.preventDefault();
      let todos = this.todos.slice().filter(todo => !todo.completed);
      this.todos = todos;
    }
  },
  computed: {
    compClasses: function() {
      return {
        completed: this.completed
      };
    }
  }
});
