import React, { useState, useEffect } from 'react';
import { Table, Space, Menu, Dropdown, Row, Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getDataList, clearDataShow } from 'action/Action'
import { MoreOutlined, LoadingOutlined } from "@ant-design/icons";
import AddTodo from 'pages/CRUD/AddTodo';
import UpdateData from 'pages/CRUD/UpdateTodo';
import DeleteTodo from 'pages/CRUD/DeleteTodo';
import ViewTodo from 'pages/CRUD/ViewTodo';
import moment from "moment";
import 'moment/locale/id';

const { Column } = Table;;
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'orange' }} spin />;




export default function ListApi() {
    // Konsumsi redux get data API
    const { getDataAPI, getDataAdd, getDataUpdate, getDataDelete } = useSelector((state) => state.data)
    let dispatch = useDispatch();
    useEffect(() => {

        dispatch(getDataList());
    }, [dispatch, getDataAdd, getDataDelete, getDataUpdate]);

    const [ID_View, setID_View] = useState();
    const [ID_Edit, setID_Edit] = useState();
    const [visibleView, setVisibleView] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);

    const showDrawerView = (id) => {
        setVisibleView(true);
        setID_View(id)
    };

    const showDrawerEdit = (id) => {
        setVisibleEdit(true);
        setID_Edit(id)
    };

    const onCloseView = () => {
        // Untuk menghapus data yg disimpan saat get api berdasarkan id
        dispatch(clearDataShow())
        setID_View();
        setVisibleView(false);
    };

    const onCloseEdit = () => {
        // Untuk menghapus data yg disimpan saat get api berdasarkan id
        dispatch(clearDataShow())
        setVisibleEdit(false);
        setID_Edit();
    };

    return (
        <>
            <Row>
                <Col span={24} style={{ textAlign: 'right', paddingBottom: 30 }}>
                    <AddTodo />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ textAlign: 'center' }}>
                    {getDataAPI === false ? <Spin indicator={antIcon} spinning={true} tip="Loading..." />
                        :
                        <Table dataSource={getDataAPI && getDataAPI} rowKey="id" >
                            <Column title="ID" dataIndex="id" key="id" />
                            <Column title="Title" dataIndex="title" key="title" />
                            <Column title="Content" dataIndex="content" key="content" />
                            <Column title="Publish" key="published_at" render={(published => (moment(published.published_at).format('ll HH:MM')))} />
                            <Column title="Create" key="created_at" render={(created => (moment(created.created_at).format('ll HH:MM')))} />
                            <Column title="Update" key="updated_at" render={(updated => (moment(updated.updated_at).format('ll HH:MM')))} />
                            <Column
                                title="Action"
                                key="action"
                                render={(record) => (
                                    <Space size="middle">
                                        <Dropdown overlay={
                                            <Menu>
                                                <Menu.Item key="view" onClick={() => showDrawerView(record.id)}>
                                                    <span>View</span>
                                                </Menu.Item>
                                                <Menu.Item key="edit" onClick={() => showDrawerEdit(record.id)}>
                                                    <span>Edit</span>
                                                </Menu.Item>
                                                <Menu.Item key="delete">
                                                    <DeleteTodo id={record.id} />
                                                </Menu.Item>
                                            </Menu>
                                        }>
                                            <MoreOutlined style={{ cursor: "pointer", fontSize: 20 }} />
                                        </Dropdown>
                                    </Space>
                                )}
                            />
                        </Table>
                    }
                </Col>
            </Row>

            {/* View Data */}
            <ViewTodo
                visibleView={visibleView}
                id={ID_View}
                onCloseView={onCloseView}
            />

            {/* Update Data */}
            <UpdateData
                visibleEdit={visibleEdit}
                id={ID_Edit}
                onCloseEdit={onCloseEdit}
            />

        </>
    );
};