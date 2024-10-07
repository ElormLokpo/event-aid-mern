import { Outlet } from "react-router-dom"
import { TitleSummary } from "../components/tile-summary"


export const EventOrganizerDashboardRoot = () => {
    return (
        <div>
            <div>
                <TitleSummary />
            </div>

            <div className="">
               <Outlet />
            </div>
        </div>
    )
}