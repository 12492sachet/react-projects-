import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState("1");
  function hadleNameChange(event) {
    setName(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={hadleNameChange}></input>
      <p>Name: {name}</p>

      <input value={age} onChange={handleAgeChange} type="number"></input>
      <p> Age: {age}</p>
    </div>
  );
}
export default MyComponent;
