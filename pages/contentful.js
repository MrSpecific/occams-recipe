import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { client } from '../lib/contentful'
import siteInfo from '../lib/siteInfo'

import Header from '../components/header'
import RecipeCard from '../components/recipeCard'


export default function Home() {
  async function fetchEntries(options = null) {
    const entries = await client.getEntries(options)
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function getRecipes() {
      // const allPosts = await fetchEntries()
      const allPosts = await fetchEntries({
        'content_type': 'recipe',
      })

      // console.log(allPosts)
      setRecipes([...allPosts])
      // setRecipes(([...allPosts.filter(post => post.sys.contentType === 'recipe')]))
    }

    getRecipes()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteInfo.title}</title>
      </Head>
      <Header></Header>

      <main className={styles.main}>
        {recipes.length > 0
        ? recipes.map((p, i) => (
          <RecipeCard {...p} key={i}/>
          ))
        : null}

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
