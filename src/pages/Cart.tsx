import CartItemListView from "../components/CartItemListView";
import { deleteCart, saveCart } from "../store/cart/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function Cart() {
  const amount = useAppSelector((state) => state.cart.amount);
  const total = useAppSelector((state) => state.cart.total);
  const isLoading = useAppSelector((state) => state.cart.isLoading);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-2">
      <h1 className="text-center">Your Cart</h1>
      <CartItemListView />
      <div className="d-flex justify-content-center align-items-center gap-5 p-4">
        <p className="fs-3 m-0">
          Total ({total} items): €{amount.toFixed(2)}
        </p>
        <div className="d-flex align-items-center button-container gap-1">
          <button
            onClick={() => {
              dispatch(saveCart());
            }}
            type="button"
            className="btn btn-success flex-shrink-0 fs-5"
          >
            Update Cart
          </button>
          <button
            onClick={() => {
              dispatch(deleteCart());
            }}
            type="button"
            className="btn btn-danger flex-shrink-0 fs-5"
          >
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
