const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function ToDoList() {
  return (
    <div>
      <ul>
        {tasks.map((tasks) => {
          return (
            <li>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                {tasks}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
