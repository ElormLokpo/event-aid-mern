import { NavLink } from "react-router-dom"
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { ProfileImage } from "@/constants";

export const TopNav = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className="text-sm font-semibold">EventAid</div>

            <div>
                <Navs />
            </div>
            <div>
                <UserComponent />
            </div>
        </div>
    )
}

const Navs = () => {
    let baseRoute = "/dashboard/event-organizer"
    let routes = [{
        path: `${baseRoute}`,
        display_text: "Home"
    },
    {
        path: `${baseRoute}/events`,
        display_text: "Events"
    },
    {
        path: `${baseRoute}/volunteers`,
        display_text: "Volunteers"
    },
    {
        path: `${baseRoute}/settings`,
        display_text: "Settings"
    },

    ]
    return (
        <div className="flex gap-3 items-center justify-center text-[0.75rem]">
            {
                routes.map((item, index) => <NavLink className="hover:bg-white hover:text-[0.7rem] transition-all hover:text-black px-1 py-1 rounded-full" key={index} to={item.path}>{item.display_text} </NavLink>)
            }
        </div>
    )
}

const UserComponent = () => {
    let container_style = "bg-stone-700 rounded-full font-semibold w-10 h-10 flex items-center justify-center text-xs"
    let profile_style = "rounded-full font-semibold w-9 h-9 border border-emerald-500 flex items-center justify-center text-xs"
    return (
        <div className="flex gap-1">
            <div className={container_style}>
                <MdOutlineEmail />
            </div>
            <div className={container_style}>
                <IoIosNotificationsOutline />
            </div>

            <div className="flex gap-1 items-center justify-center">
                <div className={profile_style} style={{ backgroundImage: `url(${ProfileImage})` }}>
                </div>
            </div>


        </div>
    )
}

