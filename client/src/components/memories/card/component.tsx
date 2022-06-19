import {Avatar, Card, Col, Row, Space, Tag, Typography} from "antd";

export const MemoriesCard = () => {
    return <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt={'mountain'}
                                        src={'https://i.guim.co.uk/img/media/18130088e2b5fc3dfd99048700b8a276d56510fa/0_380_5700_3420/master/5700.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3e01ee60c358bd05d689955f2e0227cb'}/>}>
                <Typography.Title level={4}>Sweden Mountains</Typography.Title>

                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <Row justify='space-between' align='middle'>
                        <Typography.Text>12/12/2022</Typography.Text>
                        <Row align='middle' >
                            <Space size='small'>
                                <Avatar size={'small'}>M</Avatar>
                                <Typography.Text strong>Author: Megan Fox</Typography.Text>
                            </Space>
                        </Row>
                    </Row>
                    <Row>
                        <Tag color='#2db7f5'>#Sweden</Tag>
                        <Tag color='#2db7f5'>#Mountain</Tag>
                        <Tag color='#2db7f5'>#Snow</Tag>
                    </Row>
                </Space>
            </Card>
        </Col>
}
