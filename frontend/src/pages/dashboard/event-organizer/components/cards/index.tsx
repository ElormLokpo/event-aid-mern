import { ProfileImage } from "@/constants"

let def_style = "w-full  mb-2 rounded py-2"

const Card = () => {
    let colors = ["bg-lime-500 text-black", "bg-cyan-500 text-black", "bg-stone-600 text-stone-300"]
    let rnd = Math.ceil(0 + Math.random() * colors.length - 1)
    return (
        <div className={`${colors[rnd]} rounded-lg p-2 text-xs flex flex-col h-[6rem] justify-between`}>
            <div className="flex justify-between ">
                <div>
                    <p className="font-semibold">Head Event</p>
                    <p className="text-[0.6rem]">One line decription</p>
                </div>
                <div>
                    <p className="text-[0.6rem]">Oct 4, 2024</p>
                </div>
            </div>

            <div>
                <div>
                    <p>GHC 5,600</p>
                </div>
            </div>
        </div>
    )
}


export const CardSection = () => {
    return (
        <div className={`grid gap-2 grid-cols-3`}>

            {
                [1, 1, 1, 1, 1].map((item, index) => <Card key={index} />)
            }

        </div>
    )
}


export const UserCard = () => {
    return (
        <div className={`bg-stone-800 rounded-lg p-2 text-sm`}>
            <p className="mb-2 font-semibold">Detail Information</p>
            <div className="mb-2">
                <p className="text-[0.6rem] text-stone-400">Firstname:</p>
                <p>Joseph</p>
            </div>

            <div className="mb-2">
                <p className="text-[0.6rem] text-stone-400">Last Name:</p>
                <p>Okkai</p>
            </div>

            <div className="mb-2">
                <p className="text-[0.6rem] text-stone-400">Othernames:</p>
                <p>Ben Addo</p>
            </div>

            <div className="mb-2">
                <p className="text-[0.6rem] text-stone-400">Email:</p>
                <p>joseph.add@gmail.com</p>
            </div>

            <div className="mb-2">
                <p className="text-[0.6rem] text-stone-400">Phone:</p>
                <p>0234534534</p>
            </div>
        </div>
    )
}