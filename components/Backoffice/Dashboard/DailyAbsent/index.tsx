import { Table } from 'antd'
import React from 'react'
import moment from 'moment'

const data = [
  {
    id: '1',
    name: 'Guido Perez',
    college: 'Quilmes',
    house: 'House',
    level: 'E1',
    date: '2021-07-14'
  }
]
const DailyAbsent = (): JSX.Element => {
  return (
    <div>
      <div>
        <h2>{`Daily Absent children's`}</h2>
        <h3>16 children absent in this week</h3>
      </div>
      <Table pagination={false} dataSource={data}>
        <Table.Column
          title="Date"
          render={(text, record: any) => (
            <div>{moment(record.date, 'YYYY-MM-DD').format('Do MMM YYYY')}</div>
          )}
        />
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="College" dataIndex="college" />
        <Table.Column title="House" dataIndex="house" />
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
  )
}

export default DailyAbsent
