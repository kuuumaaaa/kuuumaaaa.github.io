import Contact from './contact'
import styles from '../styles/components/Intro.module.scss'

export default function about (){
    return (
        <div className={styles.selfintro}>
            <h3 className={styles.h2}>和木琢磨 Takuma Waki</h3>
            <p>
                System Engineer
            </p>
            <p>
                1996年生まれ。埼玉県出身で筑波大学・大学院で工学を学ぶ。
            </p>
            <p>
                2021年に大手SIerへ就職し、データ処理基盤の設計・開発を行う。
            </p>
            <p>
                大学院からデータ分析に興味を持ち、研究以外でもコードを書きながらプログラミングを学ぶ。
            </p>
            <p>
                就職後はAWSの学習と実践およびフロントエンドについてブログ制作などを通して学び、フルスタックエンジニアを目指す。
            </p>
            <p>
                現在は副業でソフトウェアエンジニアとしても活動中。
            </p>
            <p>
                今後はフロント・バックエンドの活動を通して経験を積み、
            </p>
            <p>
                将来的にはその経験を活かしたマネージメントをできるようになれたらと思っています。
            </p>
            <p>
                ご気軽にご連絡ください。副業についての連絡も大歓迎です。
            </p>
            <Contact />
        </div>
    )
}