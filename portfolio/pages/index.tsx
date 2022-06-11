import type { NextPage } from 'next'
import styles from '../styles/layouts/Home.module.scss'

import Layout from '../components/layout'
import About from '../components/about'

const Home: NextPage = () => {
  return (
    <Layout>
        <div>
          <h2> Portfolio</h2>
          < About />  
        </div>
    </Layout>
  )
}

export default Home
