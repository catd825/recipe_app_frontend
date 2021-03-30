// import '../Home.css';
import Head from 'next/head'
import RecipeContainer from '../../Containers/RecipeContainer'

export default function Home() {
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
};
