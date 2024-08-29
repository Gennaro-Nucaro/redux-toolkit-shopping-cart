const data = {
  items: [
    {
      id: 1,
      name: "Google Pixel 9",
      price: 899.99,
    },
    {
      id: 2,
      name: "Apple iPhone 15",
      price: 769.99,
    },
    {
      id: 3,
      name: "Samsung Galaxy S23",
      price: 699.99,
    },
    {
      id: 4,
      name: "Xiaomi 14",
      price: 709.99,
    },
  ],
};

const Itemlist = () => {
  return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <ul className="list-group">
        {data.items.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item item d-flex justify-content-between align-items-center fs-5"
            >
              <div>
                {item.name}
                <span className="text-secondary p-2 fs-6">{item.price} €</span>
              </div>

              <button type="button" className="btn btn-primary">
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Itemlist;
