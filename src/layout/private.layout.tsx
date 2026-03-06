import { Outlet } from "react-router";
import Navbar from "../sections/Navbar.component";

export function PrivateLayout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}