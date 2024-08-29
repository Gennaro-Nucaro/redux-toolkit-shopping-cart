import CartItemListView from "../components/CartItemListView";

function Cart() {
  return (
    <div className="m-2">
      <h1 className="text-center">Your Cart</h1>
      <CartItemListView />
      <div className="d-flex justify-content-center align-items-center gap-5 p-4">
        <p className="fs-3 m-0">Total (6 items): €1,225.16</p>
        <div className="d-flex align-items-center button-container gap-1">
          <button type="button" className="btn btn-success flex-shrink-0 fs-5">
            Save Cart
          </button>
          <button type="button" className="btn btn-danger flex-shrink-0 fs-5">
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
