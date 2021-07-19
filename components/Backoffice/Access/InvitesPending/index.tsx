import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { firebaseManager } from '../../../../services/firebase.service'

interface Props {
    className?: string
}

export default (props: Props): JSX.Element => {
    const [list, setList] = useState([])

    useEffect(() => {
        firebaseManager
            .getDB()
            .collection('invites')
            .where('status', '==', 'PENDING')
            .onSnapshot(qs => {
                setList(qs.docs.map(d => d.data()))
            })
    }, [])

    console.log(list)
    return (
        <div className={props.className}>
            <div>
                <h2>Pending Invites</h2>
                <h3>{`You have ${list.length} pending invites`}</h3>
            </div>

            <Table pagination={false} dataSource={list}>
                <Table.Column
                    title="Created at"
                    render={(text, record: any) => (
                        <div>
                            {moment(record.createdAt).format(
                                'Do MMM, YYYY hh:mm:ss'
                            )}
                        </div>
                    )}
                />
                <Table.Column title="Family Name" dataIndex="familyName" />
                <Table.Column title="Parent" dataIndex="name" />
                <Table.Column title="Email" dataIndex="email" />
                <Table.Column
                    render={(text, record) => (
                        <div>
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
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                />
                            </svg>
                        </div>
                    )}
                />
            </Table>
        </div>
    )
}
