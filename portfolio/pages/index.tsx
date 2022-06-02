import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import About from '../components/about'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h2> Portfolio</h2>
        < About />  
      </main>
    </Layout>
  )
}

export default Home
