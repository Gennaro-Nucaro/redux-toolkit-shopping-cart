const Modal = () => {
  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "#00000045" }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="d-flex justify-content-between modal-header">
            <h5 className="modal-title">Alert</h5>
            <span aria-hidden="true">
              <i className="bi bi-x-lg"></i>
            </span>
          </div>
          <div className="modal-body">
            <p>Do you want to delete all items from your cart?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
