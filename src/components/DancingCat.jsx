import catSvg from '../assets/images/cat.svg'
import styles from './DancingCat.module.css'

export default function DancingCat({ isPlaying }) {
  return (
    <div className={styles.scene}>
      <div className={`${styles.catWrapper} ${isPlaying ? styles.dancing : ''}`}>
        <div className={`${styles.body} ${isPlaying ? styles.bodyBounce : ''}`}>
          <img
            src={catSvg}
            alt="귀여운 춤추는 고양이"
            className={styles.catImage}
          />
        </div>
      </div>
      <div className={`${styles.shadow} ${isPlaying ? styles.shadowAnim : ''}`} />
    </div>
  )
}
