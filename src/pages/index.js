// import '../Home.css';
import Head from 'next/head'
import RecipeContainer from '../Containers/RecipeContainer'

function Home() {
  return (
    <>
    <Head> 
      <title>Home</title>
      <meta name="keywords" content="recipes" />
    </Head>
    <div>
        <RecipeContainer />
    </div>
    </>
  );
}

export default Home;