import React from "react";
import { useParams } from "react-router-dom";

export default function TodoDetail() {
  const params = useParams();
  return (
    <div>
      <div>ini adalah halaman detail yang baru dengan id {params.kode}</div>;
    </div>
  );
}
