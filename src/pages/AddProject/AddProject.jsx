import { Transfer } from 'antd';
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
const { Option } = Select

export default function AddProject() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [mockData, setMockData] = useState([]);
    const [targetKeys, setTargetKeys] = useState([]);

    const getMock = () => {
        const tempTargetKeys = [];
        const tempMockData = [];

        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };

            if (data.chosen) {
                tempTargetKeys.push(data.key);
            }

            tempMockData.push(data);
        }

        setMockData(tempMockData);
        setTargetKeys(tempTargetKeys);
    };

    useEffect(() => {
        getMock();
    }, []);

    const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

    const handleChange = (newTargetKeys) => {
        setTargetKeys(newTargetKeys);
    };

    const handleSearch = (dir, value) => {
        console.log('search:', dir, value);
    };
    return (
        <div>
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
                    label="Project Name"
                    name="projectname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your project name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    className='item'
                    label="Project Description"
                    name="projectDes"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Description',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Project Domain"
                    name="domain"
                    rules={[
                        {
                            required: true,
                            message: 'Please input project Domain',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Project Modules"
                    name="modules"
                    rules={[
                        {
                            required: true,
                            message: 'Please input project Modules',
                        },
                    ]}
                    
                >
                    <Input />
                    <Button type="primary" shape="round" icon={<PlusOutlined />} style= {{marginTop: '10px'}}>
                        Add Module
                    </Button>
                </Form.Item>

                {/* <Form.Item
                    label=' '
                    name="modules"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input project Modules',
                //     },
                // ]}
                >
                    <Button type="primary" shape="round" icon={<PlusOutlined />}>
                        Add Module
                    </Button>
                </Form.Item> */}

            </Form>
            <Transfer
                dataSource={mockData}
                showSearch
                filterOption={filterOption}
                targetKeys={targetKeys}
                onChange={handleChange}
                onSearch={handleSearch}
                oneWay
                render={(item) => item.title}
                style={{
                    width: '100%',
                    height: '150px',
                    marginLeft: '250px'
                }}
            />
        </div>
    )
}
