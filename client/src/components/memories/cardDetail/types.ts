import {Country} from "components/memories/types";

export type Props = {
    contentEditable?: boolean;
    countries?: Country[]
}

export type Tag = {
    id: string
    text: string
}
