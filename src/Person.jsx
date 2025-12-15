import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({
    name: 'Carlos',
    lastName: 'Acosta',
    age: 24,
  });
  const [newName, setNewName] = useState(person.name);
  const [newLastName, setNewLastName] = useState(person.lastName);

  function handleIncreaseAge() {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  }

  function handleNewName(e) {
    const newName = e.target.value;
    setNewName(newName);
  }

  function handleNewLastName(e) {
    const newLastName = e.target.value;
    setNewLastName(newLastName);
  }

  return (
    <>
      <h1>{`${newName} ${newLastName}`}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increage age</button>
      <label>
        Name
        <input type='text' value={newName} onChange={handleNewName} />
      </label>
      <label>
        Last Name
        <input type='text' value={newLastName} onChange={handleNewLastName} />
      </label>
    </>
  );
}
