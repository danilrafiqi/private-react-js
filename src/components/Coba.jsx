import React, { useEffect } from "react";

export default function Coba() {
  useEffect(() => {
    document.title = "Ini Mounting";
    return () => {
      document.title = "Udah di unmount";
    };
  }, []);
  return <div>Ini adalah coba</div>;
}

// mount
// update
// unmount
