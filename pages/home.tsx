import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Page from '../components/Page'

const HomePage = (): JSX.Element => {
  return (
    <Page>
      <Header />
      <Content>
        <div>Cards de almunos</div>
      </Content>
      <Footer />
    </Page>
  )
}

export default HomePage
