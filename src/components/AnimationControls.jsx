import styles from './AnimationControls.module.css'

export default function AnimationControls({ isPlaying, onToggle }) {
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.btn} ${isPlaying ? styles.stop : styles.play}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 춤춰!'}
      </button>
      {isPlaying && (
        <p className={styles.hint}>신나게 춤추는 중~ 🎵</p>
      )}
    </div>
  )
}
