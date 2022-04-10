import React, { useEffect } from 'react';
import { Drawer, Spin, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getDataShow } from 'action/Action';
import { LoadingOutlined } from '@ant-design/icons';
import moment from "moment";
import 'moment/locale/id';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'orange' }} spin />;

export default function ViewTodo(props) {
  const { getDataView } = useSelector((state) => state.data)
  let dispatch = useDispatch();
  useEffect(() => {
    if (props.id !== undefined) {
      dispatch(getDataShow(props.id))
    }
  }, [dispatch, props.id]);

  return (
    <>
      <Drawer
        title="View Data"
        placement="right"
        onClose={props.onCloseView}
        visible={props.visibleView}
        width="50%"
      >

        {getDataView === false ?
          <Row>
            <Col span={24} style={{ textAlign: 'center', paddingTop: 200 }}>
              <Spin indicator={antIcon} spinning={true} tip="Loading..." />
            </Col>
          </Row>
          :
          <>
            <span className="title">ID</span>
            <p>{getDataView.id}</p>

            <span className="title">Title</span>
            <p>{getDataView.title}</p>

            <span className="title">Content</span>
            <p>{getDataView.content}</p>

            <span className="title">Publish</span>
            <p>{moment(getDataView.published_at).format('ll HH:MM')}</p>

            <span className="title">Create</span>
            <p>{moment(getDataView.created_at).format('ll HH:MM')}</p>

            <span className="title">Updated</span>
            <p>{moment(getDataView.updated_at).format('ll HH:MM')}</p>

          </>
        }
      </Drawer>
    </>
  );
};