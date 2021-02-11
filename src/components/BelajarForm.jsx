import React, { useState } from "react";
import "./BelajarForm.style.css";
import Card from "./Card";
export default function BelajarForm() {
  const [alamat, setAlamat] = useState("inisial");
  const [jenisKelamin, setJenisKelamin] = useState("l");
  const [resolusi, setResolusi] = useState("resolusi");

  return (
    <div className="belajar-form">
      <h1 className="belajar-form__header">Form Registrasi</h1>

      <Card
        title="Biodata"
        content={
          <>
            <div className="biodata-wrap">
              <div className="biodata-title">Nama</div>
              <input type="text" name="nama" />
            </div>

            <div className="biodata-wrap">
              <div className="biodata-title">NIM</div>
              <input type="text" name="nim" />
            </div>

            <div className="biodata-wrap">
              <div className="biodata-title">Tanggal :</div>
              <input type="date" name="tanggalLahir" />
            </div>

            <div className="biodata-wrap">
              <div className="biodata-title">Alamat :</div>
              <textarea
                name="alamat"
                id=""
                cols="30"
                rows="10"
                value={alamat}
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="biodata-wrap">
              <div className="biodata-title">Jenis Kelamin :</div>
              <div>
                <input
                  type="radio"
                  name="sex"
                  value="l"
                  checked={jenisKelamin === "l"}
                  onChange={(e) => {
                    setJenisKelamin(e.target.value);
                  }}
                />
                <span>Laki laki</span>
                <input
                  type="radio"
                  name="sex"
                  value="p"
                  checked={jenisKelamin === "p"}
                  onChange={(e) => {
                    setJenisKelamin(e.target.value);
                  }}
                />
                <span>Perempuan</span>
              </div>
            </div>
          </>
        }
      />

      <Card
        title="User Account"
        content={
          <>
            <div className="user-wrap">
              <div className="user-title">Username :</div>
              <input type="text" name="username" />
            </div>
            <div className="user-wrap">
              <div className="user-title">Email :</div>
              <input type="text" name="email" />
            </div>
            <div className="user-wrap">
              <div className="user-title">Password :</div>
              <input type="password" name="password" />
            </div>
            <div className="user-wrap">
              <div className="user-title">Ulangi Password :</div>
              <input type="password" name="ulangiPassword" />
            </div>
          </>
        }
      />

      <Card
        title="Resolusi"
        content={
          <>
            <div className="reolusi-wrap">
              <input
                type="checkbox"
                name="resolusi"
                value="blockchain"
                checked={resolusi === "blockchain"}
                onChange={(e) => {
                  setResolusi(e.target.value);
                }}
              />
              <span>Mastering Blockchain</span>
            </div>
            <div className="reolusi-wrap">
              <input
                type="checkbox"
                name="resolusi"
                value="aws"
                checked={resolusi === "aws"}
                onChange={(e) => {
                  setResolusi(e.target.value);
                }}
              />
              <span>Mastering AWS Cloud</span>
            </div>
            <div className="reolusi-wrap">
              <input
                type="checkbox"
                name="resolusi"
                value="reactjs"
                checked={resolusi === "reactjs"}
                onChange={(e) => {
                  setResolusi(e.target.value);
                }}
              />
              <span>Mastering Reactjs</span>
            </div>
          </>
        }
      />

      <button style={{ margin: 20 }}>Kirim Data</button>
    </div>
  );
}
