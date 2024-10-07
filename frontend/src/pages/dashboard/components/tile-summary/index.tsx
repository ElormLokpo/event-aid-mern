import { ReactElement } from "react";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const TitleSummary = () => {

    let summaryConentArr = [
        {
            icon: <MdOutlineEmojiEvents />,
            head_text: "45",
            content: "Total of all events"

        },
        {
            icon: <LuUsers />,
            head_text: "300",
            content: "Total of all volunteers"

        }, 
        {
            icon: <IoCheckmarkDoneSharp />,
            head_text: "0",
            content: "Total of all successfull events"

        }
    ]
    return (
        <div className="grid grid-cols-12 items-center gap-2 py-10">
            <div className="col-span-2">
                <p className="text-4xl font-semibold">Events Overview</p>
            </div>

            <div className="w-full col-span-10 flex gap-2">
                {
                    summaryConentArr.map((item, index) => <SummaryComponent
                        key={index}
                        icon={item.icon}
                        head_text={item.head_text}
                        content={item.content}
                    />)
                }

            </div>
        </div>
    )
}


const SummaryComponent = ({ icon, head_text, content }: { icon: ReactElement, head_text: string, content: string }) => {
    let container_style = "bg-stone-800 rounded-full font-semibold w-10 h-10 flex items-center justify-center text-xs"

    return (
        <div className="flex gap-2 w-[15rem] items-center">
            <div className={container_style}>
                {icon}
            </div>

            <div className="text-xs col-span-2">
                <p className="font-semibold">{head_text}</p>
                <p className="font-light">{content}</p>
            </div>

        </div>
    )
}