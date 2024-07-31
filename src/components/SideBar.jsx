import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1720823182783-3b9fb27e40d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/25407775?v=4" />
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