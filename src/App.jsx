import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/SideBar'
import { Post } from './components/Post'
function App() {

  return (
    
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Post></Post>
      </div>
    </div>
  )
}

export default App
