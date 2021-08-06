import { Divider } from 'antd'

import React, { useEffect } from 'react'
import Header from '../../../components/Backoffice/Header'
import SubHeader from '../../../components/Backoffice/SubHeader'
import Card from '../../../components/Backoffice/SubHeader/card'
import { UIHeaderStore } from '../../../stores/header.store'

const Container = ({ children }) => {
    return (
        <div className="flex justify-center py-4 px-16 ">
            <div style={{ minWidth: '1360px' }}>{children}</div>
        </div>
    )
}

export default (): JSX.Element => {
    useEffect(() => {
        UIHeaderStore.update(s => {
            s.selectedTab = 'ABSENT'
        })
    }, [])
    return (
        <div>
            <Header />
            <Container>
                <SubHeader
                    className="pt-8"
                    title="Absent Students"
                    cardCols={2}
                    subTitle="Report to analize absents"
                    cards={[
                        <Card
                            key="card1"
                            title="39 cases"
                            subTitle="26 remains open till today"
                            description="In 2020"
                            isImportant={true}
                        />,
                        <Card
                            key="card2"
                            title="50 cases"
                            subTitle="27 remains open till today"
                            description="In 2021"
                            isImportant={false}
                        />
                    ]}
                />
            </Container>
            <Divider className="bg-blue-50" />
            <Container>
                <div>
                    <h2>Absent Cases by alumni</h2>
                    <h3>Show all cases by alumni </h3>
                </div>
                <div className="flex w-full">
                    <iframe
                        width="1200"
                        height="900"
                        src="https://datastudio.google.com/embed/reporting/8efce2d7-c2c5-4289-a767-248e3de43e2b/page/aHIXC"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
                </div>
            </Container>
        </div>
    )
}
