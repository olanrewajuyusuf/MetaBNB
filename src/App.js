import { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import HomePage from "./pages/HomePage";
import PlaceToStay from "./pages/PlaceToStay";
import NotFound from "./components/NotFound";
import { Routes, Route} from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
    <ConnectModal modal={modal} setModal={setModal} />
      <Routes>
        <Route path='/' element={<HomePage setModal={setModal} />} />
        <Route path='/place' element={<PlaceToStay setModal={setModal} />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
