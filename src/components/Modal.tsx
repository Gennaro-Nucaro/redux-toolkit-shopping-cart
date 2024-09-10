import { closeModal } from "../store/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface ModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}
const Modal: React.FC<ModalProps> = ({ children, onConfirm }) => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const confirm = () => {
    onConfirm();
    dispatch(closeModal());
  };

  if (!isOpen) return null;

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
            <span
              onClick={() => {
                dispatch(closeModal());
              }}
              aria-hidden="true"
            >
              <i className="bi bi-x-lg"></i>
            </span>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              Close
            </button>
            <button
              onClick={() => {
                confirm();
              }}
              type="button"
              className="btn btn-primary"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
