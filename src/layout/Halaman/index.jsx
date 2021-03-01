import React from "react";

export default function Halaman({ children }) {
  return (
    <div className="halaman">
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
}
