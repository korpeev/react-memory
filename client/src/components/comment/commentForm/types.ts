import {ChangeEventHandler} from "react";

export type Props = {
    value: string,
    onChange: ChangeEventHandler<HTMLTextAreaElement>,
    onFinish: (values: unknown) => void
}
