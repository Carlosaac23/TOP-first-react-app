function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map(animal => {
        return <ListItem key={animal} animal={animal} />;
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
