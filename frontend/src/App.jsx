import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sales from "./pages/Sales/Sales";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <main className="grid grid-cols-[200px_1fr] grid-rows-[auto_1fr] min-h-screen gap-3 p-4">
        {/* Sidebar: spans 2 rows (header + content) in the 1st column */}
        <div className="row-span-2">
          <Sidebar />
        </div>

        <Header />

        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
