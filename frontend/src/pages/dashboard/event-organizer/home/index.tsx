import { TitleSummary } from "../components/tile-summary"


export const EventOrganizerHomepage = ()=>{
    let def_style = "w-full bg-stone-700 mb-2 rounded py-2"

    return(
        <div>
            <div>
                <TitleSummary />
            </div>
          
            <div className="w-full grid grid-cols-12 gap-2 h-[40rem]">
                <div className={`col-span-8 ${def_style}`}>
                    c
                </div>
                <div className={`col-span-4 ${def_style}`}>
                    d
                </div>
            </div>
        </div>
    )
}