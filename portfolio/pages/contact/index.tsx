import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

import Layout from '../../components/layout'
import Contact from '../../components/contact'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h2> Contact</h2>
        <p>
            私へのお問い合わせはこちらからどうぞ。
        </p>
        < Contact />
      </main>
    </Layout>
  )
}

export default Home
