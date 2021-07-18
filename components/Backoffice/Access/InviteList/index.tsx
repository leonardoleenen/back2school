import { Button, Drawer, Form, Input, Table } from 'antd'
import React, { useState } from 'react'

const data = [
    {
        date: '2021-07-22 22:21:34',
        name: 'Mariano Perez',
        familyName: 'Perez Conrado',
        email: 'perez@gmail.com',
        status: 'PENDING' // PENDING ACEPTED CANCELLED
    },
    {
        date: '2021-07-22 22:21:34',
        name: 'Martin Martinez',
        familyName: 'Mrtinez',
        email: 'martin@gmail.com',
        status: 'ACCEPTED' // PENDING ACEPTED CANCELLED
    }
]

interface DrawerHeaderProps {
    title: string
    onClose: () => void
    onSave: () => void
}

const DrawerHeader = (props: DrawerHeaderProps) => {
    return (
        <div className="mb-20">
            <div className="flex justify-between items-center">
                <div className="cursor-pointer">
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
                <Button className="rounded-lg" type="primary">
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

    const InviteForm = () => {
        return (
            <div>
                <Form layout="vertical">
                    <Form.Item label="Name" name="name">
                        <Input bordered={false}></Input>
                    </Form.Item>
                    <Form.Item label="Family Name" name="familyName">
                        <Input bordered={false}></Input>
                    </Form.Item>
                    <Form.Item label="email" name="email">
                        <Input bordered={false}></Input>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    return (
        <div>
            <Drawer
                width="450px"
                placement="right"
                title="New Invite"
                closable={true}
                visible={showInviteForm}
            >
                <DrawerHeader
                    title="New Invite"
                    onClose={() => null}
                    onSave={() => null}
                />
                <InviteForm />
            </Drawer>
            <div className="flex justify-between items-center">
                <div>
                    <h2>Invites list</h2>
                    <h3>{`${data.length} Total sent invites`}</h3>
                </div>
                <Button
                    onClick={() => setShowInviteForm(true)}
                    className="rounded-lg border-blue-400 text-blue-400"
                >
                    new Invite
                </Button>
            </div>
            <div>
                <Table dataSource={data} pagination={false}>
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
                    <Table.Column title="Date" dataIndex="date" />
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
