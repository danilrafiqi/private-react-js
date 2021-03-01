import { CircularProgress, Container, Modal } from "@material-ui/core";
import React from "react";
import NavBar from "../../../components/NavBar";

const Layout = ({ children, loading = false }) => {
  return (
    <div className="layout">
      <NavBar />
      <Container
        maxWidth="lg"
        style={{
          marginTop: 50,
        }}
      >
        {children}
      </Container>
      <Modal
        open={loading}
        onClose={() => undefined}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CircularProgress />
      </Modal>
    </div>
  );
};
export default Layout;
