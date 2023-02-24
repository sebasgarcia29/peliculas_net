import { ReactElement } from "react";
import { InterfaceMovie } from "./InterfaceMovie";

export interface InterfaceListGeneric {
    list?: InterfaceMovie[];
    children: ReactElement;
    loadingUI?: ReactElement;
    listVoid?: ReactElement;
}