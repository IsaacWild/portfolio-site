import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hi, my name is Isaac! </h1>
      <p>
        I am a new(ish) software engineer who has changed into the industry after 8 years in customer service. I have always had a passion for tech in my life and have enjoyed playing with the latest consumer tech and trying to help out my workplaces with my ideas and solutions.
      </p>
      <p>
        I am hoping to become an effective and respected software engineer in the industry, my main appeal at the moment is front end work but I haven&apos;t been slacking on my back end either it&apos;s just I always end up missing CSS
      </p>
    </main>
  )
}
