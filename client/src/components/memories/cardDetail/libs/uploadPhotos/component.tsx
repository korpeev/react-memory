import {Button, Modal, Space, Upload, UploadProps} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {UploadFile} from "antd/es/upload/interface";
import {RcFile} from "antd/es/upload";
import {useState} from "react";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
export const UploadPhotos = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([] as UploadFile[]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file: UploadFile) => {
        let preview;
        if (!file.url && !file.preview) {
            preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (preview as string));
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) =>
        setFileList(newFileList);
    return (
        <Space size='large' direction='vertical' style={{display: 'flex'}}>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                <Button icon={<PlusOutlined/>}>Загрузить</Button>
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </Space>
    );
};
