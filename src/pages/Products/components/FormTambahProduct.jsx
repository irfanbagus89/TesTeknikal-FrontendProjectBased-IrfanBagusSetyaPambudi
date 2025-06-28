import Button from "../../../components/ui/Button";
import { useState } from "react";

const FormTambahProduct = ({
  onSubmit,
  newProduk,
  setNewProduk,
  onCancel,
}) => {
  const [hargaError, setHargaError] = useState("");

  const handlehargaChange = (e) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value)) {
      setHargaError("Harga harus berupa angka");
    } else {
      setHargaError("");
    }

    const numericValue = value.replace(/[^0-9]/g, "");
    setNewProduk({ ...newProduk, harga: numericValue });
  };

  const [stokError, setstokError] = useState("");

  const handlestokChange = (e) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value)) {
      setstokError("Stok harus berupa angka");
    } else {
      setstokError("");
    }

    const numericValue = value.replace(/[^0-9]/g, "");
    setNewProduk({ ...newProduk, stok: numericValue });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          nama
        </label>
        <input
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black `.trim()}
          type="text"
          placeholder="Masukkan nama lengkap"
          value={newProduk.nama}
          onChange={(e) => setNewProduk({ ...newProduk, nama: e.target.value })}
          required
        />
      </div>
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            harga
          </label>
          <input
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black `.trim()}
            type="text"
            placeholder="Masukkan harga"
            value={newProduk.harga}
            onChange={handlehargaChange}
            required
          />
        </div>
        {hargaError && (
          <p className="text-sm text-red-500 mt-1">{hargaError}</p>
        )}
      </div>
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            stok
          </label>
          <input
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black `.trim()}
            type="text"
            placeholder="Masukkan stok"
            value={newProduk.stok}
            onChange={handlestokChange}
            required
          />
        </div>
        {stokError && <p className="text-sm text-red-500 mt-1">{stokError}</p>}
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit">
          {"Simpan"}
        </Button>
      </div>
    </form>
  );
};

export default FormTambahProduct;
