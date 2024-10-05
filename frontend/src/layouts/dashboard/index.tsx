
import { Outlet } from "react-router-dom"
import { IProps } from "./types"


export const DashboardLayout = ({top_nav}:IProps) => {

    return (
        <div className="bg-black h-screen text-stone-300 px-[15rem] py-[0.6rem]">
            <div>
                {top_nav}
            </div>
            
            <div>
                <Outlet />
            </div>
           
            
        </div>
    )
}