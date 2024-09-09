import CartItemListView from "../components/CartItemListView";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { deleteCart, saveCart } from "../store/cart/actions";

function Cart() {
  const amount = useSelector((state: RootState) => state.cart.amount);
  const total = useSelector((state: RootState) => state.cart.total);
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);
  const dispatch: AppDispatch = useDispatch();

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
