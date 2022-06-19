import {Button, Card, DatePicker, Form, Input, List, Row, Select, Space, Tag, Typography,} from "antd";
import {uuid} from 'uuidv4'
import {FC, PropsWithChildren, useMemo, useState} from "react";
import {UploadPhotos} from "components/memories/cardDetail/libs/uploadPhotos";
import {Props, Tag as TagModel} from "components/memories/cardDetail/types";
import moment from "moment";


const validationMessage = {
    required: 'Это поле объязательное'
}

const dateFormat = 'DD.MM.YYYY'

const initialFormValues = {
    tag: '',
    country: '',
    location: '',
    title: '',
    description: '',
    visitedDate: moment(moment(), dateFormat)
}
export const CardDetail: FC<PropsWithChildren<Props>> = ({contentEditable = false, countries = []}) => {
    const [tags, setTags] = useState<TagModel[]>([] as TagModel [])
    const [form] = Form.useForm()
    const title = contentEditable ? 'Редактировать воспоминание' : 'Добавить воспоминание'
    const isTagExist = (tagName: string) => tags.some((tag) => lowerCasedAndTrimmed(tag.text) === lowerCasedAndTrimmed(tagName))
    const lowerCasedAndTrimmed = (value: string) => value.toLowerCase().trim()
    const hasError = (name: string) => {
        return form.getFieldError(name).length > 0
    }

    const onAddTag = () => {
        const tag = form.getFieldValue('tag')
        form.setFields([{
            name: 'tag',
            errors: [],
            value: tag
        }])
        if (!tag.length) {
            form.setFields([{
                name: 'tag',
                errors: ['Это поле объязательное'],
            }])
            return
        }
        if (isTagExist(`#${tag}`)) {
            form.setFields([{
                name: 'tag',
                errors: ['Такой тэг уже существует'],
            }])
            return
        }
        form.validateFields(['tag'])
        if (!hasError('tag')) {
            setTags(prev => [...prev, {id: uuid(), text: `#${tag}`}])
            form.setFields([{
                name: 'tag',
                errors: [],
                value: ''
            }])
        }
    }

    const onDeleteTag = (tagId: string) => () => {
        setTags(prev => prev.filter(tag => tag.id !== tagId))
    }


    const renderSelectOptions = useMemo(() => countries.map(country => (
        <Select.Option key={country.flag} value={country.name.common}>
            <Space>
                <span>
                    {country.flag}
                </span>
                <Typography.Text>{country.name.common}</Typography.Text>
            </Space>
        </Select.Option>
    )), [countries])

    return <Card title={<Typography.Title style={{textAlign: 'center'}} level={3}>{title}</Typography.Title>}>
        <Form initialValues={initialFormValues} form={form} onFinish={values => {
            console.log(values)
        }} validateMessages={validationMessage} labelCol={{span: 4}}>
            <Form.Item required rules={[{required: true}]} label='Заголовок' name='title'>
                <Input/>
            </Form.Item>
            <Form.Item required rules={[{required: true}]} label='Описание' name='description'>
                <Input.TextArea autoSize={{minRows: 3, maxRows: 5}}/>
            </Form.Item>
            <Form.Item label='Страна' required name='country' rules={[{required: true}]}>
                <Select allowClear showSearch>
                    {renderSelectOptions}
                </Select>
            </Form.Item>
            <Form.Item name='location' required rules={[{required: true}]} label='Локация'>
                <Input/>
            </Form.Item>
            <Form.Item required rules={[{required: true}]} label='Дата визита' name='visitedDate'>
                <DatePicker format={dateFormat}/>
            </Form.Item>
            <Form.Item label='Тэги'>
                <List dataSource={tags} locale={{emptyText: 'Тэги пусто'}}
                      renderItem={(item) => <Tag key={item.id} color='#2db7f5' closable
                                                 onClose={onDeleteTag(item.id)}>{item.text}</Tag>}/>
            </Form.Item>
            <Form.Item name='tag' label='Тэг'>
                <Input id='tag'
                       suffix={<Button onClick={onAddTag}>Добавить</Button>}/>
            </Form.Item>
            <Form.Item label={'Загрузка'}>
                <UploadPhotos/>
            </Form.Item>
            <Row justify={'end'}>
                <Button type='primary' htmlType={'submit'}>Добавить</Button>
            </Row>
        </Form>
    </Card>
}
