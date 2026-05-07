import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import styles from './App.module.css'

export default function App() {
  const { isPlaying, toggle } = useAnimation()

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>춤추는 고양이 🎵</h1>
      <DancingCat isPlaying={isPlaying} />
      <AnimationControls isPlaying={isPlaying} onToggle={toggle} />
    </main>
  )
}
