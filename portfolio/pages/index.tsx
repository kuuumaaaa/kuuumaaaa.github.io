import type { NextPage } from 'next'
import styles from '../styles/layouts/Home.module.scss'

import Layout from '../components/layout'
import Intro from '../components/intro'

const Home: NextPage = () => {
  return (
    <Layout>
        <div>
          <h2> Portfolio</h2>
          < Intro />  
        </div>
    </Layout>
  )
}

export default Home
