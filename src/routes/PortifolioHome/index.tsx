import { Outlet } from "react-router-dom";
import HeaderPf from "../../components/HeaderPf";


export default function PortifolioHome() {
    return (
        <>
            <div className="pf-mb20">
                <HeaderPf />
            </div>
            <Outlet />
        </>
    )
}