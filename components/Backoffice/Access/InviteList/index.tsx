import { Button, Table } from 'antd'
import React from 'react'

const data = [
  {
    date: '2021-07-22 22:21:34',
    name: 'Mariano Perez',
    familyName: 'Perez Conrado',
    email: 'perez@gmail.com',
    status: 'PENDING' // PENDING ACEPTED CANCELLED
  }
]
export default (): JSX.Element => {
  return (
    <div>
      <div className="flex justify-between items-bottom">
        <div>
          <h2>Invites list</h2>
          <h3>{`${data.length} Total sent invites`}</h3>
        </div>
        <Button className="rounded-lg border-blue-400 text-blue-400">
          new Invite
        </Button>
      </div>
      <div>
        <Table dataSource={data} pagination={false}>
          <Table.Column
            width="3%"
            render={(text, record) => (
              <div className="h-4 w-4 rounded-full bg-red-600"></div>
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
