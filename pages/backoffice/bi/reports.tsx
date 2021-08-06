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

export default () => {
    useEffect(() => {
        UIHeaderStore.update(s => {
            s.selectedTab = 'REPORT'
        })
    }, [])
    return (
        <div>
            <Header />
            <Container>
                <SubHeader
                    className="pt-8"
                    title="Reports"
                    cardCols={0}
                    subTitle="General reports related with absent, students and Colleges"
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
                <div className="flex w-full">
                    <div className="w-1/2 pr-8">
                        <div>
                            <h2>Alumni</h2>
                            <h3>Alumni list</h3>
                        </div>
                        <iframe
                            className="pt-4"
                            width="700"
                            height="400"
                            src="https://datastudio.google.com/embed/reporting/59c00cc8-800d-41e7-ae92-4186715afa16/page/NeHXC"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                        ></iframe>
                    </div>

                    <div>
                        <div>
                            <h2>Absent Cases</h2>
                            <h3>All cases (open and closed) </h3>
                        </div>
                        <iframe
                            width="600"
                            height="400"
                            src="https://datastudio.google.com/embed/reporting/c7e0015d-6c67-4072-9e0e-37bffead20b4/page/yiHXC"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                        ></iframe>
                    </div>
                </div>
            </Container>
            <Container>
                <div>
                    <div>
                        <h2>Absent Cases Total </h2>
                        <h3>All cases (open and closed) </h3>
                    </div>
                    <iframe
                        className="pt-8"
                        width="1200"
                        height="600"
                        src="https://datastudio.google.com/embed/reporting/d442e526-0173-4389-bfc5-c3bfdff68263/page/p8HXC"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                    ></iframe>
                </div>
            </Container>
        </div>
    )
}
