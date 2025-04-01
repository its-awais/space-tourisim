import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar-space-station/Navbar";


const Main_layouts = () => {
  return (
    <>
    <Navbar />
    <main>
    <Outlet/>
    </main>
    </>
  )
}

export default Main_layouts
