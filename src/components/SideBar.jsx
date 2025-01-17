import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1720823182783-3b9fb27e40d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
            <Avatar hasBorder={false} src="https://github.com/stadlerls.png" alt="" />
            <strong>Leonardo Stadler</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                 <a href="#">
                    <PencilLine size={20}>
                    </PencilLine>
                    Editar seu perfil
                 </a>
            </footer>
        </aside>
    )
}