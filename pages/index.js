import { request, responsiveImageFragment } from '@lib/datocms';
import { gql } from 'graphql-request'
import { Image, StructuredText } from 'react-datocms'
import styles from '@styles/Home.module.css'

import Header from '@components/header'
import Footer from '@components/footer'
import RecipeCard from '@components/recipeCard';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header></Header>

      <style jsx>{`
        .recipe :global(.ingredient-name) {
          font-weight: bold;
        }
      `}</style>
      
      <main className={styles.main}>
        <ol className={styles.cardList}>
          {data.allRecipes.map(recipe => {
            return <li key={recipe.id}><RecipeCard {...recipe}></RecipeCard></li>
          })}
        </ol>
      </main>

      <Footer></Footer>
    </div>
  )
}

const HOMEPAGE_QUERY = gql`
  query HomePage($limit: IntType) {
    allRecipes(first: $limit) {
      id,
      title,
      slug,
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 600, h: 600 }) {
          ...responsiveImageFragment
        }
      },
      description
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