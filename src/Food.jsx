function Food() {
  const food1 = "Banana";
  const food2 = "Apple";
  return (
    <>
      <ul>
        <li>Mango</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
      <hr />
    </>
  );
}
export default Food;
