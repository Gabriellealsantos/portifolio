import { Outlet } from "react-router-dom";
import HeaderPf from "../../components/HeaderPf";


export default function PortifolioHome() {
    return (
        <div className="app-layout">
            <HeaderPf />
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    )
}