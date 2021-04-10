import '../styles.css'
import Layout from '../Components/Layout'
import { RecipeProvider } from '../RecipeContext/state'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <RecipeProvider>
        <Component {...pageProps} />
      </RecipeProvider>
    </Layout>
  )
}