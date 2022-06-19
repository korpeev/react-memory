import {Avatar, Button, Col, Collapse, Image, Rate, Row, Space, Typography} from "antd";
import {Main} from "layouts/main";
import {ChangeEvent, useCallback, useMemo, useState} from "react";
import styles from './cardInfo.module.scss'
import {CommentForm, CommentList} from "components/comment";
import {GetServerSideProps} from "next";
import {CommentItem} from "components/comment/commentList/types";

const mockData = [{
    src: 'https://i.guim.co.uk/img/media/18130088e2b5fc3dfd99048700b8a276d56510fa/0_380_5700_3420/master/5700.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3e01ee60c358bd05d689955f2e0227cb'
},
    {
        src: 'https://www.worldatlas.com/r/w1200/upload/4b/08/ef/thinkstockphotos-118672956.jpg'
    },
    {
        src: 'https://external-preview.redd.it/QblmbnbXp2LOnbb6W791u_4mSBFED75AsKz-fN_VPOo.jpg?auto=webp&s=b9f8138eaeb219eac3987c0533ca8be82c800a42'
    },
    {
        src: 'https://adventures.com/media/209250/landscape-of-a-mountains-and-northern-lights-in-sweden.jpg'
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sarektj%C3%A5kko-25.jpg/1200px-Sarektj%C3%A5kko-25.jpg'
    },
]
const mockComments = [
    {
        author: 'Han Solo',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: 'qweqweqweqw',
        datetime: Date.now().toLocaleString()
    }
]

export const getServerSideProps: GetServerSideProps = async () => {
    const comments = await new Promise(resolve => {
        setTimeout(() => {
            resolve(mockComments)
        }, 500)
    })
    return {
        props: {
            comments,
        }
    }
}
export const MemoriesCardInfo = ({comments}: { comments: CommentItem[] }) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0)
    const [rate, setRate] = useState<number>(0)
    const [commentText, setCommentText] = useState('')


    const isActiveImage = (index: number) => index === activeImgIndex
    const onSetActiveImg = (index: number) => () => setActiveImgIndex(index)
    const onSetRate = (value: number) => setRate(value)

    const value = useMemo(() => commentText, [commentText])

    const onChangeComment = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(event.target.value)
    }, [])
    const onFinish = useCallback((values: unknown) => {
        console.log(values)
    }, [])
    return (
        <Main>
            <Row justify='center'>
                <Typography.Title level={2}>Sweden Mountain</Typography.Title>
            </Row>
            <Row gutter={24}>
                <Col span={3}>
                    <Space size='middle' direction='vertical' className={styles.imageListContainer}>
                        {mockData.map((img, index) => (
                            <div
                                className={[styles.imageContainer, isActiveImage(index) ? styles.imageContainerActive : ''].join(' ')}>
                                <img className={isActiveImage(index) ? styles.activeImage : ''}
                                     onClick={onSetActiveImg(index)} key={index} width={128} height={128}
                                     src={img.src} alt={`photo-${index + 1}`}/>
                            </div>
                        ))}
                    </Space>
                </Col>
                <Col lg={10}>
                    <div>
                        <Image width={600} height={415} alt={'mountain'}
                               src={mockData[activeImgIndex ?? 0]?.src}/>
                    </div>
                    <div>
                        <Space className={styles.slideDotsContainer} size='small' direction={'horizontal'}>
                            {new Array(mockData.length).fill(null).map((_, index) => (
                                <Button onClick={onSetActiveImg(index)}
                                        type={isActiveImage(index) ? 'primary' : 'text'}>{index + 1}</Button>
                            ))}
                        </Space>
                    </div>
                </Col>
                <Col lg={10}>
                    <Row justify='space-between'>
                        <Typography.Title level={5}>12.07.2009</Typography.Title>
                        <Space size='small'>
                            <Avatar>M</Avatar>
                            <Typography.Text>Megan Fox</Typography.Text>
                        </Space>
                    </Row>
                    <Row>
                        <Col lg={24}>
                            <Collapse defaultActiveKey={'description'} bordered={false}>
                                <Collapse.Panel header='Описание' key={'description'}>
                                    <Typography.Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquid eaque
                                        impedit quia! Culpa fuga quas rem sunt! Aliquid ea id incidunt iure quaerat qui
                                        repellat vel? Eaque, expedita!
                                    </Typography.Paragraph>
                                </Collapse.Panel>
                            </Collapse>
                        </Col>
                        <Col lg={24}>
                            <Typography.Title level={5}>Страна: Швеция</Typography.Title>
                            <Typography.Title level={5}>Локация: Горный Курорт</Typography.Title>
                        </Col>
                        <Space>
                            <Typography.Text>Оценить</Typography.Text>
                            <Rate allowHalf onChange={onSetRate} defaultValue={5} value={rate}/>
                        </Space>
                    </Row>

                </Col>
            </Row>
            <Row justify='center'>
                <Col lg={12}>
                    <CommentList comments={
                        comments
                    }/>
                </Col>
            </Row>
            <Row justify='center'>
                <Col lg={12}>
                    <CommentForm value={value} onChange={onChangeComment} onFinish={onFinish}/>
                </Col>
            </Row>
        </Main>
    )
}
