import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";

const ModalDeleteProduct = ({
  isOpen,
  onClose,
  onConfirm,
}) => (
  <Modal isOpen={isOpen} title="Hapus Product" onClose={onClose}>
    <p>Apakah Anda yakin ingin menghapus product ini?</p>
    <div className="flex justify-end gap-2 pt-4">
      <Button type="button" variant="secondary" onClick={onClose}>
        Batal
      </Button>
      <Button onClick={onConfirm}  variant="danger">
        {"Hapus"}
      </Button>
    </div>
  </Modal>
);

export default ModalDeleteProduct;
