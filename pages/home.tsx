import React, { useEffect } from 'react'

import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Page from '../components/Page'
import { authService } from '../services/auth.service'
import { firebaseManager } from '../services/firebase.service'
import { UIAppStore } from '../stores/app.store'
import { useRouter } from 'next/router'
import { Card } from '../components/Alumni/Card'

const HomePage = (): JSX.Element => {
  const activeFamily = UIAppStore.useState(s => s.activeFamily)
  const router = useRouter()
  useEffect(() => {
    const userId = authService.getUserData().id
    // firebaseManager.getUser(userId).then(result => console.log(result))
    firebaseManager.getFamily(userId).then(result => {
      if (result.length === 1)
        UIAppStore.update(s => {
          s.activeFamily = result[0] as Family
        })
      else router.push('/home_multifamily')
    })
  }, [activeFamily])

  const AlumniList = () => {
    if (!activeFamily) return <div>Loading...</div>
    return (
      <div>
        {activeFamily.alumni.map(a => (
          <Card alumni={a} key={a.id} />
        ))}
      </div>
    )
  }
  return (
    <Page>
      <Header />
      <Content>
        <AlumniList />
      </Content>
    </Page>
  )
}

export default HomePage
