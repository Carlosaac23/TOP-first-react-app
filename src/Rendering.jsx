function List(props) {
  return (
    <ul>
      {props.animals.map(animal => {
        return animal.startsWith('L') ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

export function Animals() {
  const animals = ['Lion', 'Zebra', 'Cow', 'Snake', 'Lizard', 'Tiger'];

  return (
    <>
      <h1>Animals:</h1>
      <List animals={animals} />
    </>
  );
}
