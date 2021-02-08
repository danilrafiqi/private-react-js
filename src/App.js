import { useState } from "react";
import Coba from "./components/Coba";

function App() {
  const [tampil, setTampil] = useState(false);

  return (
    <div>
      {tampil && <Coba />}
      <button onClick={() => setTampil(true)}>tampil</button>
      <button onClick={() => setTampil(false)}>hidden</button>
    </div>
  );
}

export default App;
