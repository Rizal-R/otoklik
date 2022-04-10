import axios from "axios";
import { notification } from 'antd';

export const GET_DATA_LIST = "GET_DATA_LIST";
export const GET_DATA_SHOW = "GET_DATA_SHOW";
export const GET_DATA_UPDATE = "GET_DATA_UPDATE";
export const GET_DATA_DELETE = "GET_DATA_DELETE";
export const GET_DATA_ADD = "GET_DATA_ADD";

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

export const getDataList = () => {
    return (dispatch) => {
        axios
            .get("https://limitless-forest-49003.herokuapp.com/posts")
            .then(function (response) {
                dispatch({
                    type: GET_DATA_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DATA_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getDataShow = (id) => {
    return (dispatch) => {
        axios
            .get(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
            .then(function (response) {
                dispatch({
                    type: GET_DATA_SHOW,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DATA_SHOW,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const clearDataShow = () => {
    return (dispatch) => {
        dispatch({
            type: GET_DATA_SHOW,
            payload: {
                data: false,
                errorMessage: false,
            },
        });
    };
};

export const getDataUpdate = (id, data) => {
    return (dispatch) => {
        axios
            .put(`https://limitless-forest-49003.herokuapp.com/posts/${id}`, data)
            .then(function (response) {
                openNotificationWithIcon('success');
                dispatch({
                    type: GET_DATA_DELETE,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DATA_DELETE,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getDataDelete = (id) => {
    return (dispatch) => {
        axios
            .delete(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
            .then(function (response) {
                openNotificationWithIcon('warning')
                dispatch({
                    type: GET_DATA_DELETE,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DATA_DELETE,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getDataAdd = (params) => {
    return (dispatch) => {
        axios
            .post(`https://limitless-forest-49003.herokuapp.com/posts`, params)
            .then(function (response) {
                openNotificationWithIcon('success');
                dispatch({
                    type: GET_DATA_ADD,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DATA_ADD,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};



