import { Button, Layout, Drawer } from "antd";
import "antd/dist/antd.min.css";
import "./index.css";
import SideNavBar from "./components/SideNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/attendance";
import Headercom from "./components/Header";
import Profile from "./pages/Profile/Profile";
import Employee from "./pages/Attendance/Employee";
import AddUser from "./pages/AddUser/AddUser";
import AddProject from "./pages/AddProject/AddProject";

import 'antd/dist/antd.dark.css';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SideNavBar />
        <Layout className="site-layout">
          <Headercom />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/attendance" element={<Employee />} />            
            <Route path="/viewAttend" element={<Attendance />} />            
            <Route path="/addUser" element={<AddUser />} />            
            <Route path="/addProject" element={<AddProject />} />            
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
