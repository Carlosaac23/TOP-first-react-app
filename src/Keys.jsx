const todos = [
  { task: 'Do the laundry', id: crypto.randomUUID() },
  { task: 'mow the yard', id: crypto.randomUUID() },
  { task: 'Work on Odin Projects', id: crypto.randomUUID() },
  { task: 'feed the cat', id: crypto.randomUUID() },
  { task: 'walk Keiko', id: crypto.randomUUID() },
];

export function TodoList() {
  return (
    <>
      <h2>Todo List:</h2>
      <ul>
        {todos.map(({ task, id }) => {
          return <li key={id}>{task}</li>;
        })}
      </ul>
    </>
  );
}
