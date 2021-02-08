import React from "react";

const Halaman = () => {
  return (
    <div>
      <div>Ini adalah contoh</div>
      <div>Menggunakan JSX</div>
    </div>
  );
};
// export default Halaman;

const Page = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("div", null, "Ini adalah contoh"),
    React.createElement("div", null, "Tanpa JSX")
  );
};
export default Page;
