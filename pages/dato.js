import { request } from '../lib/datocms';
import { gql } from 'graphql-request'
import { Image } from 'react-datocms'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import RecipeCard from '../components/recipeCard'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Occam's Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.main}>
        {data.allRecipes.map(recipe => {
          return <Image data={recipe.cover.responsiveImage} />
        })}
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

const HOMEPAGE_QUERY = gql`
  query HomePage($limit: IntType) {
    allRecipes(first: $limit) {
      title,
      slug,
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 1400, h: 600 }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
    preview: false
  });

  return {
    props: { data }
  };
}