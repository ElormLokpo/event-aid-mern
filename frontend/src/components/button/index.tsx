import { IProps } from "./types"



export const Button = ({ content, icon, handler, custom_style, style_type }: IProps) => {
    let btn_style = ""
    let sm_def = "text-[0.7rem] flex gap-1 items-center rounded-lg"

    switch (style_type) {
        case "outline-sm":
            btn_style = `${sm_def} border border-stone-500 p-1 text-[0.7rem] hover:bg-stone-800 text-stone-400`
            break;
        case "type-one-sm":
            btn_style = `${sm_def} bg-stone-700 p-1 text-[0.7rem] hover:bg-stone-800 text-stone-400`
            break;

    }

    return <button className={custom_style ? custom_style : btn_style} onClick={handler}>{icon && icon}{content}</button>
}