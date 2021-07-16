import React, { useEffect } from 'react'
import Chart, { ChartItem } from 'chart.js/auto'
import { Space } from 'antd'

let myChart

const Statistics = (): JSX.Element => {
  useEffect(() => {
    const ctx = document.getElementById('myChart') as ChartItem

    const labels = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Absents',
          data: [0, 0, 15, 23, 34, 35, 67, 78, 65, 54, 32, 0],
          borderColor: '#EF4444',
          backgroundColor: '#EF4444'
        },
        {
          label: 'Back To Scholl',
          data: [0, 0, 0, 7, 15, 32, 43, 23, 53, 78, 67, 0],
          borderColor: '#34D399',
          backgroundColor: '#34D399'
        }
      ]
    }

    if (myChart) myChart.destroy()
    myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart'
          }
        },
        scales: {
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    })
  }, [])
  return (
    <div>
      <h2>Health board</h2>
      <div className="flex">
        <Space>
          <div className="flex items-center">
            <Space>
              <div className="h-4 w-4 rounded-full bg-red-500"></div>
              <div>Absent children</div>
            </Space>
          </div>
          <div className="flex items-center">
            <Space>
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <div>Back to school</div>
            </Space>
          </div>
        </Space>
      </div>
      <canvas className="pt-4" id="myChart" width="778" height="325"></canvas>
    </div>
  )
}

export default Statistics
