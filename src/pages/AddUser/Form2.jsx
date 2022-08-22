import { Button, Checkbox, Form, Input, Select } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
const { Option } = Select;

export default function Form2() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{ padding: '25px', width: '100%' }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="Status"
                    label="Status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select Status"
                        allowClear
                    >
                        <Option value="employee">Employee</Option>
                        <Option value="internee">Internee</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item
                    name="Domain/ Designation"
                    label="Domain"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select Domain"
                        allowClear
                    >
                        <Option value="mern">MERN-Web-Dev</Option>
                        <Option value="react">React-Native-Mobile-Dev</Option>
                        <Option value="flutter">Flutter-Mobile-Dev</Option>
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}
