import { RocketLaunchIcon } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <RocketLaunchIcon color='var(--purple)' size={50} />
            <h1>to<span>do</span></h1>
        </div>

        
    )
}