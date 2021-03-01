import React from "react";
import Button from "../../../components/Button";
import Halaman from "../../../layout/Halaman";

export default function Home() {
  return (
    <Halaman>
      <div className="home">
        ini home
        <div style={{ marginBottom: 100 }}></div>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <Button variant="contain">
          <div>halo</div>
        </Button>
      </div>
    </Halaman>
  );
}
