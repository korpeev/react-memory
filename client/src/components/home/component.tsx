import {Main} from 'layouts/main';
import { Row, Typography} from "antd";
import {MemoriesCard} from "components/memories";

export const Home = () => {
    return <Main>
        <Typography.Title level={3}>Список воспоминаний</Typography.Title>
        <Row gutter={[24, 24]}>
            <MemoriesCard/>
            <MemoriesCard/>
            <MemoriesCard/>
            <MemoriesCard/>
            <MemoriesCard/>
            <MemoriesCard/>
        </Row>

    </Main>;
};
