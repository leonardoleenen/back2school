import React, { useEffect } from 'react'
import Header from '../../components/Backoffice/Header'
import SubHeader from '../../components/Backoffice/SubHeader'
import SVGBackToSchool from '../../components/SVG/back2school'
import Card from '../../components/Backoffice/SubHeader/card'
import { Divider } from 'antd'
import Statistics from '../../components/Backoffice/Dashboard/Statistics'
import DailyAbsent from '../../components/Backoffice/Dashboard/DailyAbsent'

import { UIHeaderStore } from '../../stores/header.store'

export default () => {
    useEffect(() => {
        UIHeaderStore.update(s => {
            s.selectedTab = 'DASHBOARD'
        })
    }, [])
    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <div style={{ maxWidth: '1440px' }} className="flex px-8 ">
                    <SVGBackToSchool />
                    <div className="px-8 flex items-center w-full ">
                        <div className="w-full">
                            <SubHeader
                                title="Welcome back Fernanda Blanco"
                                subTitle=" You have 12 unseen notification"
                                cards={[
                                    <Card
                                        key="card1"
                                        title="3 childs"
                                        subTitle="not show cases"
                                        description="Today"
                                        isImportant={true}
                                    />,
                                    <Card
                                        key="card2"
                                        title="16 childs"
                                        subTitle="not show cases"
                                        description="This week"
                                        isImportant={false}
                                    />,
                                    <Card
                                        key="card3"
                                        title="23 childs"
                                        subTitle="not show cases"
                                        description="Total cases"
                                        isImportant={false}
                                    />,
                                    <Card
                                        key="card4"
                                        title="2 childs"
                                        subTitle="back to school"
                                        description="This week "
                                        isImportant={false}
                                    />
                                ]}
                            />
                            <div className="flex mt-2">
                                <div>
                                    <div className="flex items-center text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-green-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                            />
                                        </svg>
                                        <div className="pl-1">
                                            2 Children back to school this week
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-500 ml-6 ">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-red-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                                            />
                                        </svg>
                                    </div>
                                    <div className="pl-1">
                                        {' '}
                                        3 children not show today
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider className="bg-blue-50" />
            <section className="flex p-8 justify-center">
                <div
                    className="flex w-full px-8"
                    style={{ maxWidth: '1440px' }}
                >
                    <div className="">
                        <Statistics />
                    </div>
                    <div className="w-full pl-4">
                        <DailyAbsent />
                    </div>
                </div>
            </section>
        </div>
    )
}
