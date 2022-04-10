import React, { useEffect } from 'react';
import { Button, Drawer, Form, Input, Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getDataShow, getDataUpdate } from 'action/Action';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'orange' }} spin />;

export default function UpdateTodo(props) {
  const { getDataView } = useSelector((state) => state.data)
  let dispatch = useDispatch();
  const [form] = Form.useForm()

  useEffect(() => {
    if (props.onCloseEdit) {
      form.resetFields();
    }
  }, [form, props]);

  useEffect(() => {
    if (props.id !== undefined) {
      dispatch(getDataShow(props.id))
    }
  }, [props.id, dispatch]);

  const onFinish = (values) => {
    dispatch(getDataUpdate(props.id, values));
    props.onCloseEdit();
  };

  return (
    <>
      <Drawer
        visible={props.visibleEdit}
        title="Edit Data"
        width="50%"
        onClose={props.onCloseEdit}
        footer={
          <>
            <div style={{ float: "left" }}>
              <Button type="default" onClick={props.onCloseEdit}>Cancel</Button>
            </div>
            <div style={{ float: "right" }}>
              <Button onClick={form.submit} type="primary">Submit</Button>
            </div>
          </>
        }
      >
        {getDataView === false ?
          <Row>
            <Col span={24} style={{ textAlign: 'center', paddingTop: 200 }}>
              <Spin indicator={antIcon} spinning={true} tip="Loading..." />
            </Col>
          </Row>
          :
          <>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <h1>{props.getData && props.getData.id}</h1>
              <Form.Item label="Title" name="title" initialValue={getDataView.title} rules={[{ required: true, message: 'Please input title' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Content" name="content" initialValue={getDataView.content} rules={[{ required: true, message: 'Please input content' }]}>
                <Input />
              </Form.Item>
            </Form>
          </>
        }
      </Drawer>
    </>
  );
};