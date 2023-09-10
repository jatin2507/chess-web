import React from 'react'
import { Button, Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
let { confirm } = Modal;

export default function ConfirmModel({ handleCancel, props, show }) {
    return (
        <div>
            {confirm({
                title:
                    <b> {props.title} </b>
                ,
                icon: <ExclamationCircleFilled />,
                content: <p>{props.content}</p>,
                onOk: () => { },
                onCancel: handleCancel,
                okText: 'Yes,I Want',
                cancelText: 'No, Take To Me Back',
                autoFocusButton: 'cancel',
                forceRender: true,
                centered: true,
            })}
        </div>
    )
}
