import { DashboardLayout } from "@/layouts/dashboard";
import { TopNav } from "@/pages/dashboard/event-organizer/components/top-nav";
import { EventOrganizerHomepage } from "@/pages/dashboard/event-organizer/home";
import { RouteObject } from "react-router-dom";

export const eventOrganizerRoutes:RouteObject[] = [
    {
        path:"/dashboard/event-organizer",
        element: <DashboardLayout top_nav={<TopNav />} />,
        children: [
            {
                path: "",
                element:<EventOrganizerHomepage />
            }
        ]
    }
]