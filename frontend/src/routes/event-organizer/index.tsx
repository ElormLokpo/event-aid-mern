import { DashboardLayout } from "@/layouts/dashboard";
import { TopNav } from "@/pages/dashboard/components/top-nav";
import { EventOrganizerDashboardRoot } from "@/pages/dashboard/event-organizer";
import { EventOrganizerHomepage } from "@/pages/dashboard/event-organizer/home";
import { RouteObject } from "react-router-dom";

export const eventOrganizerRoutes:RouteObject[] = [
    {
        path:"/dashboard/event-organizer",
        element: <DashboardLayout top_nav={<TopNav />} />,
        children: [
            {
                path: "",
                element:<EventOrganizerDashboardRoot />,
                children:[
                    {
                        path:"",
                        element: <EventOrganizerHomepage />
                    }
                ]
            }
        ]
    }
]