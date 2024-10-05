import { DashboardLayout } from "@/layouts/dashboard";
import { EventOrganizerHomepage } from "@/pages/dashboard/event-organizer/home";
import { RouteObject } from "react-router-dom";

export const eventOrganizerRoutes:RouteObject[] = [
    {
        path:"/dashboard/event-organizer",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element:<EventOrganizerHomepage />
            }
        ]
    }
]