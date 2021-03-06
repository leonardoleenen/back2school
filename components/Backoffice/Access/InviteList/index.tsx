import { Button, Drawer, Form, Input, Table } from 'antd'
import React, { useState, useEffect } from 'react'

import { bizService } from '../../../../services/biz.service'
import { firebaseManager } from '../../../../services/firebase.service'
import moment from 'moment'

interface DrawerHeaderProps {
    title: string
    onClose: () => void
    onSave: () => void
    isSaving: boolean
}

const DrawerHeader = (props: DrawerHeaderProps) => {
    return (
        <div className="mb-20">
            <div className="flex justify-between items-center">
                <div className="cursor-pointer" onClick={props.onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <Button
                    loading={props.isSaving}
                    className="rounded-lg"
                    type="primary"
                    htmlType="submit"
                >
                    Save changes
                </Button>
            </div>
            <div className="pt-6">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
export default (): JSX.Element => {
    const [showInviteForm, setShowInviteForm] = useState(false)
    const [form] = Form.useForm()
    const [saving, setSaving] = useState(false)
    const [list, setList] = useState([])
    useEffect(() => {
        firebaseManager
            .getDB()
            .collection('invites')
            .onSnapshot(qs => {
                setList(qs.docs.map(d => d.data()))
            })
    }, [])

    const onFinish = (values: any) => {
        setSaving(true)

        firebaseManager
            .createInvitation({
                ...values,
                id: bizService.generateId(JSON.stringify(values)).toUpperCase()
            })
            .then(result => {
                setSaving(false)
                setShowInviteForm(false)
            })
    }
    const InviteForm = () => {
        return (
            <div>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <DrawerHeader
                        title="New Invite"
                        isSaving={saving}
                        onClose={() => setShowInviteForm(false)}
                        onSave={() => null}
                    />
                    <Form.Item
                        rules={[
                            { required: true, message: 'Please input a name!' }
                        ]}
                        label="Name"
                        name="name"
                    >
                        <Input bordered={false}></Input>
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: 'Please input the family name'
                            }
                        ]}
                        label="Family Name"
                        name="familyName"
                    >
                        <Input bordered={false}></Input>
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: 'Please enter user email'
                            }
                        ]}
                        label="email"
                        name="email"
                    >
                        <Input bordered={false}></Input>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    return (
        <div className="w-1/2">
            <Drawer
                width="450px"
                placement="right"
                title="New Invite"
                closable={true}
                visible={showInviteForm}
            >
                <InviteForm />
            </Drawer>
            <div className="flex justify-between items-center">
                <div>
                    <h2>Invites list</h2>
                    <h3>{`${list.length} Total sent invites`}</h3>
                </div>
                <Button
                    onClick={() => setShowInviteForm(true)}
                    className="rounded-lg border-blue-400 text-blue-400"
                >
                    new Invite
                </Button>
            </div>
            <div>
                <Table dataSource={list} pagination={false}>
                    <Table.Column
                        width="3%"
                        render={(text, record: any) => (
                            <div
                                className={`h-4 w-4 rounded-full bg-${
                                    record.status === 'ACCEPTED'
                                        ? 'green'
                                        : 'yellow'
                                }-600`}
                            ></div>
                        )}
                    />
                    <Table.Column
                        title="Date"
                        render={(text, record: any) => (
                            <div>
                                {moment(record.createdAt).format(
                                    'Do MMM, YYYY hh:mm:ss'
                                )}
                            </div>
                        )}
                    />
                    <Table.Column title="Name" dataIndex="name" />
                    <Table.Column title="Family Name" dataIndex="familyName" />
                    <Table.Column title="Email" dataIndex="email" />
                    <Table.Column
                        width="5%"
                        render={(text, record) => (
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                    />
                                </svg>
                            </div>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}
