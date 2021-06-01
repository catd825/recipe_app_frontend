import '../styles.css'
import Layout from '../Components/Layout'
import { RecipeProvider } from '../RecipeContext/state'
import { UserProvider } from '../UserContext/state'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
          <RecipeProvider>
            <Component {...pageProps} />
          </RecipeProvider>
      </Layout>
    </UserProvider>
  )
}