class Todo {
  id: string;
  text: string;

  constructor(value: string) {
    this.text = value;
    this.id = new Date().toISOString();
  }
}

export default Todo;
