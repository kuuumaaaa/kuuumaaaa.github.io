import Link from 'next/link'
import styles from '../styles/components/navbar.module.scss'

export default function navbar(){
    return (
        <nav className={styles.headerNav}>
            <Link href="/work">
                <a>
                    Works
                </a>
            </Link>
            <Link href="/about">
                <a>
                    About
                </a>
            </Link>
            <Link href="/contact">
                <a>
                    Contact
                </a>
            </Link>
        </nav>
    )
}


