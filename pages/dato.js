import { request, responsiveImageFragment } from '../lib/datocms';
import { gql } from 'graphql-request'
import { Image } from 'react-datocms'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../styles/test.module.css'

import Header from '../components/header'
import RecipeCard from '../components/recipeCard'
import IngredientsList from '../components/IngredientsList'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <style jsx>{`
        .recipe :global(.ingredient-name) {
          font-weight: bold;
        }
        `}
      </style>
      
      <Head>
        <title>Occam's Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      
      <main className={styles.main}>
        {data.allRecipes.map(recipe => {
          return (
            <div className="recipe">
              <h2>{recipe.title}</h2>
              <Image data={recipe.cover.responsiveImage} />
              <IngredientsList ingredients={recipe.ingredients} />
            </div>
          )
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
      },
      ingredients {
        ingredient,
        amount
      }
    }
  }

  ${responsiveImageFragment}
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