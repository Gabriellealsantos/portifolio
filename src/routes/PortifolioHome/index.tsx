import { Outlet } from "react-router-dom";
import HeaderPf from "../../components/HeaderPf";


export default function PortifolioHome() {
    return (
        <>
            <HeaderPf />
            <Outlet />
        </>
    )
}