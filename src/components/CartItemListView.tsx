import { removeItem, addItem, removeAll } from "../store/cart/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CartItemListView = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center">
      <ul className="list-group cart-item-list-view">
        {items.map((item) => {
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
                <span className="d-inline p-2">Qty. {item.qty}</span>
                <button
                  onClick={() => {
                    dispatch(removeItem(item.id));
                  }}
                  type="button"
                  className="btn btn-warning fs-5"
                >
                  -
                </button>
                <button
                  onClick={() => {
                    dispatch(addItem({ ...item, qty: 1 }));
                  }}
                  type="button"
                  className="btn btn-success fs-5"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(removeAll(item.id));
                  }}
                  type="button"
                  className="btn btn-danger fs-5"
                >
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
