import React, { useState } from 'react';
import { Button, Drawer, Form, Input } from "antd";
import { useDispatch } from 'react-redux';
import { getDataAdd } from 'action/Action'

export default function AddTodo() {
    const [form] = Form.useForm()
    const [visibleAdd, setVisibleAdd] = useState(false);
    let dispatch = useDispatch();
    const showDrawerAdd = () => {
        setVisibleAdd(true);
        form.resetFields();
    };
    const onCloseAdd = () => {
        setVisibleAdd(false);
        form.resetFields();
    };
    const onFinish = (values) => {
        dispatch(getDataAdd(values));
        setVisibleAdd(false);
    };
    return (
        <>
            <Button type='primary' style={{ width: 100 }} onClick={showDrawerAdd}>Add</Button>
            {/* Drawer Add */}
            <Drawer
                visible={visibleAdd}
                title="Add Data"
                width="50%"
                onClose={onCloseAdd}
                footer={
                    <>
                        <div style={{ float: "left" }}>
                            <Button type="default" onClick={onCloseAdd}>Cancel</Button>
                        </div>
                        <div style={{ float: "right" }}>
                            <Button onClick={form.submit} type="primary">Submit</Button>
                        </div>
                    </>
                }
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input title' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please input content' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}