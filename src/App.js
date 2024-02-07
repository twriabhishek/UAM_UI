import logo from "./logo.svg";
import "./App.css";
import MakerReportForm from "./component/makerReport/makerReportForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnableUserTable from "./component/makerReport/EnableUserTable";
import RoleCreation from "./component/makerReport/Role.Creation";
import RightCreation from "./component/makerReport/RightCreation";
import Configuration from "./component/makerReport/Configuration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/maker" element={<MakerReportForm />}></Route>
          <Route path="/enable" element={<EnableUserTable />}></Route>
          <Route path="/role" element={<RoleCreation />}></Route>
          <Route path="/right" element={<RightCreation />}></Route>
          <Route path="/configuration" element={<Configuration />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
