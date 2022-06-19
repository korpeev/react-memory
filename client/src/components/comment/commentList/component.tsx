import {Comment, List} from "antd";
import {FC} from "react";
import {Props} from "components/comment/commentList/types";

export const CommentList: FC<Props> = ({comments}) => {
    return <List
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
        dataSource={comments}

    />
}
