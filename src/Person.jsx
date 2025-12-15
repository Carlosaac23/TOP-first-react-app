import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ name: 'Carlos', age: 24 });

  function handleIncreaseAge() {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  }

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increage age</button>
    </>
  );
}
