import {ReactNode} from "react";

export type CommentItem = {
    content: ReactNode,
    author: string;
    avatar: string;
    datetime: string;
}

export type Props = {
    comments: CommentItem[]
}
