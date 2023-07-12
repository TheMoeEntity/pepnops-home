import About from '@/components/About'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Products />
    </main>
  )
}
