import { DatePicker } from "../../components/calendar"
import { ChartSection } from "../../components/chart"
import { CardSection, UserCard } from "../components/cards"


export const EventOrganizerHomepage = () => {


    return (
        <div>
        
            <div className="w-full grid grid-cols-12 gap-2 h-[40rem]">
                <div className={`col-span-8 `}>
                    <div className="mb-6">
                        <CardSection />
                    </div>
                    <div className="">
                        <ChartSection />
                    </div>
                </div>
                <div className={`col-span-4`}>
                    <div>
                        <DatePicker />
                    </div>
                    <div className="mb-2">
                        <UserCard />
                    </div>

                </div>
            </div>
        </div>
    )
}