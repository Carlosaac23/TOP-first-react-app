function List(props) {
  if (!props.brands) {
    return <div>Loading...</div>;
  }

  if (props.brands.length === 0) {
    return <div>There are no brands in the list!</div>;
  }

  return (
    <>
      <ul>
        {props.brands.map(brand => {
          return brand.startsWith('B') && <li key={brand}>{brand}</li>;
        })}
      </ul>
    </>
  );
}

export function CarBrands() {
  const brands = ['BMW', 'Porsche', 'Audi', 'Mazda', 'Toyota', 'Subaru'];

  return (
    <>
      <h1>Car Brands:</h1>
      <List brands={brands} />
    </>
  );
}
