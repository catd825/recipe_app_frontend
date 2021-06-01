// import '../Home.css';
import Head from 'next/head'
import RecipeContainer from '../../Containers/RecipeContainer'
import { useRecipeContext } from '../../RecipeContext/state'

export default function Home() {
  const {recipes} = useRecipeContext();

  return (
    <>
    <Head> 
      <title>Home</title>
      <meta name="keywords" content="recipes" />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sansita&display=swap');
      </style>
    </Head>
    <div>
        { recipes ? <RecipeContainer /> : 'you need to log in'}

    </div>
    </>
  );
};
