import { useRouter } from 'next/router'
import { gql } from 'graphql-request'
import { recipes, getPaths, getEntry } from '../../lib/data'
import { Image, StructuredText } from 'react-datocms'
import { request, responsiveImageFragment, getRecipeList } from '../../lib/datocms'

import Header from '@components/header'
import Footer from '@components/footer'
import IngredientsList from '../../components/ingredientsList'

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
      <div className="recipe">
        <Image data={props.cover.responsiveImage} />
        <IngredientsList ingredients={props.ingredients} />
        <StructuredText data={props.instructions} />
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
      description
      slug
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 1400, h: 600 }) {
          ...responsiveImageFragment
        }
      }
      ingredients {
        id
        ingredient
        amount
      }
      instructions {
        value
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