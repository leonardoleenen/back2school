import { Divider } from 'antd'
import React, { Children, useEffect } from 'react'
import InviteList from '../../components/Backoffice/Access/InviteList'
import Header from '../../components/Backoffice/Header'
import SubHeader from '../../components/Backoffice/SubHeader'
import Card from '../../components/Backoffice/SubHeader/card'
import { UIHeaderStore } from '../../stores/header.store'

const Container = ({ children }) => {
  return (
    <div className="flex justify-center py-8 px-16 overflow-x-auto">
      <div style={{ minWidth: '1440px' }}>{children}</div>
    </div>
  )
}

export default (): JSX.Element => {
  useEffect(() => {
    UIHeaderStore.update(s => {
      s.selectedTab = 'ACCESS'
    })
  }, [])
  return (
    <div>
      <Header />
      <Container>
        <SubHeader
          title="Manage Access"
          cardCols={3}
          subTitle="Manage invitations and access to the app"
          cards={[
            <Card
              key="card1"
              title="2 invites"
              subTitle="Pending"
              description="Today"
              isImportant={true}
            />,
            <Card
              key="card1"
              title="17 invites"
              subTitle="sents"
              description="Are waiting"
              isImportant={false}
            />,
            <Card
              key="card1"
              title="34 invites"
              subTitle="sents"
              description="In Total"
              isImportant={false}
            />
          ]}
        />
      </Container>
      <Divider className="bg-blue-50" />
      <Container>
        <InviteList />
      </Container>
    </div>
  )
}
