import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getDataDelete } from 'action/Action';
const { confirm } = Modal;

export default function DeleteTodo(props) {
    let dispatch = useDispatch();
    const Delete = (id) => {
        confirm({
            title: 'Yakin ingin hapus data dengan ID ini ?',
            icon: <ExclamationCircleOutlined />,
            content: <div><b>ID : {id}</b></div>,
            okText: 'Yes',
            okType: 'danger',
            okButtonProps: {
                disabled: false,
            },
            cancelText: 'No',
            onOk() {
                dispatch(getDataDelete(id));
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <>
            <span type="danger" onClick={() => Delete(props.id)}>Delete</span>
        </>
    )
}