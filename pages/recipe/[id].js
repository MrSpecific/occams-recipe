import { getAllRecipeIds, getRecipeData } from '../../lib/recipes'

export default function Recipe(props) {
  console.log('Props:', props)
  return <div>
      <h1>This is a test 2 z</h1>
      {props.id}
      {props.children}
    </div>
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const postData = await getRecipeData(params.id)

  return {
    props: {
      id,
      postData
    }
  }
}