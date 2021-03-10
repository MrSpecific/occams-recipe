import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { recipes, getPaths, getEntry } from '../../lib/data'

import Header from '../../components/header'

export default function SingleRecipe(props) {
  const { fields } = props;
  const router = useRouter();
  const id = router.query;
  console.log('Props:', props)
  console.log('Fields:', fields)
  
  return (
    <>
      <Header title={fields.title}></Header>
      <h2>{fields.title}</h2>
      <div className="description">{documentToReactComponents(fields.description)}</div>
      <div className="instructions">{documentToReactComponents(fields.instructions)}</div>
    </>
  )
}

export async function getStaticPaths() {
  const allRecipes = await recipes();

  const paths = getPaths(allRecipes)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const allRecipes = await recipes();
  const recipeData = getEntry({
    slug: params.slug,
    entries: allRecipes,
  });

  return {
    props: recipeData
  }
}