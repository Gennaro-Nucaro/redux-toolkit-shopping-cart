interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const data: Product[] = [
  {
    id: 1,
    name: "Google Pixel 9",
    price: 899.99,
    quantity: 3,
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    price: 769.99,
    quantity: 2,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    price: 699.99,
    quantity: 4,
  },
  {
    id: 4,
    name: "Xiaomi 14",
    price: 709.99,
    quantity: 3,
  },
];

const CartItemListView = () => {
  return (
    <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center">
      <ul className="list-group cart-item-list-view">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item item d-flex justify-content-between align-items-center fs-5"
            >
              <div>
                <span>{item.name}</span>
                <span className="text-secondary p-2 fs-6">{item.price} €</span>
              </div>
              <div className="d-flex align-items-baseline button-container gap-1">
                <span className="d-inline p-2">Qty. {item.quantity}</span>
                <button type="button" className="btn btn-warning fs-5">
                  -
                </button>
                <button type="button" className="btn btn-success fs-5">
                  +
                </button>
                <button type="button" className="btn btn-danger fs-5">
                  remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItemListView;
