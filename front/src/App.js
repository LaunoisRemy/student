import './styles/app.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home                           from "./views/Home";
import Etudiant                       from "./views/Etudiant";
import Note                           from "./views/Note";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact={true} path={"/"} element={<Home/>}/>
            <Route exact={true} path={"/note"} element={<Note/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
