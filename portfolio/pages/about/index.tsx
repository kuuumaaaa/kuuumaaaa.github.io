import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

import Layout from '../../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h2> About</h2>
        <p>
            職務履歴
        </p>
        <ul>
            <li>2022年4月〜現在：ストリーミング処理基盤内のソフトウェア開発</li>
            <li>2022年4月〜現在：副業先にてWebサイトのフロントエンド開発</li>
            <li>2022年1月〜2022年2月：CICD導入</li>
            <li>2022年6月〜2022年8月：社内サーバのログ解析</li>
            <li>2022年6月〜2022年3月：ストリーミング処理基盤の追加機能開発等</li>
        </ul>
        <p>
            取得資格
        </p>
        <ul>
            <li>基本情報技術者試験</li>
            <li>応用情報技術者試験</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>FUJITSU Certified Senior Professional Agile</li>
        </ul>
        <p>
            保有スキル
        </p>
        <ul>
            <li>Python(2.5 year、Django:3 month)</li>
            <li>AWS(EC2, lambda, ECS/Fargate, APIGateway, Amplify)(1 year)</li>
            <li>Git(1 year)</li>
            <li>Docker(1 year)</li>
            <li>React(4 m)</li>
            <li>TypeScript(1 month)</li>
            <li>Java(3 m)</li>
            <li>HTML・CSS(6 m)</li>
            <li>Linux(3 y)</li>
            <li>CICD(Github Action, Gitlab runner)(6 month)</li>
        </ul>
      </main>
    </Layout>
  )
}

export default Home
