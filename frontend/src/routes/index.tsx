import {createBrowserRouter} from "react-router-dom";
import { eventOrganizerRoutes } from "./event-organizer";


export const router =  createBrowserRouter([...eventOrganizerRoutes])