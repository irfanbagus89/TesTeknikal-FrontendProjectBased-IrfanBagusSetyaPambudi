import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import { useUI } from "../../hooks/useUI";
import Modal from "../../components/ui/Modal";
import FormTambahProduct from "./components/FormTambahProduct";
import { showToast } from "../../utils/toast";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import ModalDeleteProduct from "./components/ModalDeleteProduct";
import FormEditProduk from "./components/FormEditProduk";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Products() {
  const [data, setData] = useState([
    { nama: "Adidas", harga: 100000, stok: 10 },
    { nama: "Puma", harga: 200000, stok: 10 },
    { nama: "Kanky", harga: 300000, stok: 10 },
    { nama: "Mills", harga: 400000, stok: 10 },
    { nama: "Bata", harga: 50000, stok: 10 },
  ]);

  const [newProduk, setNewProduk] = useState({ nama: "", harga: "", stok: "" });
  const [selectedProduk, setSelectedProduk] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setfilterData] = useState("");

  const { showModal, setShowModal } = useUI();

  const handleSubmit = async () => {
    try {
      data.push(newProduk);
      showToast.success("Data berhasil ditambahkan");
      setShowModal(false);
      setNewProduk({ nama: "", harga: "", stok: "" });
    } catch (err) {
      showToast.error(err.message || "Gagal");
    }
  };
  const handleUpdate = async () => {
    try {
      const datas = data.map((dat) =>
        dat.nama === selectedProduk.nama ? { ...dat, ...newProduk } : dat
      );
      setData(datas);
      setEditModal(false);
    } catch (err) {
      showToast.error(err.message || "Gagal");
    }
  };

  const handleDelete = async () => {
    try {
      const datas = data.filter((dat) => dat.nama !== selectedProduk.nama);
      setData(datas);
      showToast.success("Data berhasil dihapus");
      setDeleteModal(false);
    } catch (err) {
      showToast.error(err.message || "Gagal");
    }
  };

  const [sortOption, setSortOption] = useState("harga-asc");

  const sortData = (option) => {
    const [key, order] = option.split("-");
    const sorted = [...data].sort((a, b) => {
      if (order === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setData(sorted);
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    sortData(option);
  };

  let mapping = data.map((data, index) => {
    return (
      <div className="card bg-base-100 w-full lg:w-2/5 shadow-sm" key={index}>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.nama}</h2>
          <p>
            Rp.{data.harga}/{data.stok}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedProduk(data);
                setNewProduk({
                  nama: data.nama,
                  harga: data.harga,
                  stok: data.stok,
                });
                setEditModal(true);
              }}
            >
              <FiEdit className="w-4 h-4" />
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedProduk(data);
                setDeleteModal(true);
              }}
            >
              <FiTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  });
  useEffect(() => {
    const filterDatas = data.filter((dat) =>
      dat.harga.includes(search)
    );
    setfilterData(filterDatas);
    console.log(data);
  }, [data, search, filterData]);

  const formatharga = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full min-h-[100vh] bg-slate-900">
      <Navbar />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hallo</h1>
            <p className="mb-5">Selamat datang di manajemen produk</p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex justify-between p-4 border-b-1 border-grey">
        <input
          type="text"
          className="input"
          placeholder="Cari berdasarkan nama"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label>Urutkan berdasarkan: </label>
        <select className="text-white" value={sortOption} onChange={handleSortChange}>
          <option className="text-black" value="harga-asc">Harga Termurah</option>
          <option className="text-black" value="harga-desc">Harga Termahal</option>
          <option className="text-black" value="stok-asc">Stok Terendah</option>
          <option className="text-black" value="stok-desc">Stok Tertinggi</option>
        </select>
        <Button variant="none" onClick={() => setShowModal(true)}>
          <Card
            layout="horizontal"
            size="small"
            icon={<FiPlus className="text-2xl text-white" />}
            bgColor="bg-blue-400 hover:bg-blue-700 cursor-pointer"
          >
            <p className="font-semibold text-white">Tambah Produk</p>
          </Card>
        </Button>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-4 justify-center mt-4">
        {filterData == ""
          ? data.map((data, index) => {
              return (
                <div
                  className="card bg-base-100 w-full lg:w-2/5 shadow-sm"
                  key={index}
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.nama}</h2>
                    <p>
                      {formatharga(data.harga)}/{data.stok}
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedProduk(data);
                          setNewProduk({
                            nama: data.nama,
                            harga: data.harga,
                            stok: data.stok,
                          });
                          setEditModal(true);
                        }}
                      >
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedProduk(data);
                          setDeleteModal(true);
                        }}
                      >
                        <FiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : filterData.map((data, index) => {
              return (
                <div
                  className="card bg-base-100 w-full lg:w-2/5 shadow-sm"
                  key={index}
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.nama}</h2>
                    <p>
                      {formatharga(data.harga)}/{data.stok}
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedProduk(data);
                          setNewProduk({
                            nama: data.nama,
                            harga: data.harga,
                            stok: data.stok,
                          });
                          setEditModal(true);
                        }}
                      >
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedProduk(data);
                          setDeleteModal(true);
                        }}
                      >
                        <FiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>

      {showModal && (
        <Modal
          isOpen={showModal}
          title="Tambah Mahasiswa"
          onClose={() => setShowModal(false)}
        >
          <FormTambahProduct
            onSubmit={handleSubmit}
            newProduk={newProduk}
            setNewProduk={setNewProduk}
            onCancel={() => {
              setShowModal(false);
              setNewProduk({ nama: "", harga: "", stok: "" });
            }}
          />
        </Modal>
      )}

      {editModal && (
        <Modal
          isOpen={editModal}
          title="Edit Produk"
          onClose={() => setEditModal(false)}
        >
          <FormEditProduk
            onSubmit={handleUpdate}
            newProduk={newProduk}
            setNewProduk={setNewProduk}
            onCancel={() => {
              setEditModal(false);
              setNewProduk({ nama: "", harga: "", stok: "" });
            }}
          />
        </Modal>
      )}
      <ModalDeleteProduct
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default Products;
