import { ReactElement } from "react";

export interface IProps{
    content:string, 
    icon?:ReactElement,
    handler : ()=>void,
    custom_style?:string,
    style_type?: string
}