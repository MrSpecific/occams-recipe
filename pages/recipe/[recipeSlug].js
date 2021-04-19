import { useRouter } from 'next/router'
import { gql } from 'graphql-request'
import { recipes, getPaths, getEntry } from '../../lib/data'
import { Image, StructuredText } from 'react-datocms'
import { request, responsiveImageFragment, getRecipeList } from '../../lib/datocms'

import Header from '@components/header'
import Footer from '@components/footer'
import Wrapper from '@components/layout/Wrapper'
import Attribution from '@components/Attribution'
import EstimatedTime from '@components/EstimatedTime'
import IngredientsList from '@components/IngredientsList'

import styles from '@styles/recipe.module.css'

export default function SingleRecipe(props) {
  // const { fields } = props;
  const router = useRouter();
  const id = router.query;
  
  return (
    <>
      <style jsx>{`
        .recipe :global(.ingredient-name) {
          font-weight: bold;
        }
      `}</style>
      <Header title={props.title}></Header>
      <div className={styles.recipe}>
        <Attribution {...props}></Attribution>
        <Image data={props.cover.responsiveImage} />
        <Wrapper width="standard" padding="true" gutter="true">
          <EstimatedTime {...props}/>
          <div className="vitals">
            {props.ingredients && (
              <section className="ingredients">
                <h2 className="decorated">Ingredients:</h2>
                <IngredientsList ingredients={props.ingredients} />
              </section>
            )}
            {props.instructions && (
              <section className="instructions">
                <h2 className="decorated">Instructions:</h2>
                <StructuredText data={props.instructions} />
              </section>
            )}
          </div>
        </Wrapper>
      </div>

      <Footer></Footer>
    </>
  )
}

export async function getStaticPaths() {
  const allRecipes = await getRecipeList();

  const paths = getPaths(allRecipes, 'recipeSlug')

  return {
    paths,
    fallback: false
  }
}

const SINGLE_RECIPE_QUERY = gql`
  query Recipe($slug: String) {
    recipe(filter: {slug: {eq: $slug}}) {
      title
      date
      description
      slug
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 1400, h: 600 }) {
          ...responsiveImageFragment
        }
      }
      prepTime,
      cookingTime,
      ingredients {
        id
        ingredient
        amount
      }
      instructions {
        value
      }
      author {
        name
      }
    }
  }

  ${responsiveImageFragment}
`

export async function getStaticProps({ params }) {
  const data = await request({
    query: SINGLE_RECIPE_QUERY,
    variables: { slug: params.recipeSlug },
    preview: false
  });

  return {
    props: data.recipe
  }
}