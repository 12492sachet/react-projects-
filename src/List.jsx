function List() {
  const fruits = ["mango", "orange", "Banana"];

  const ListItems = fruits.map((fruit) => <li>{fruit}</li>);

  return <ul>{ListItems}</ul>;
}
export default List;
