// import '../Home.css';
import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
    <Head> 
      <title>Home</title>
      <meta name="keywords" content="recipes" />
    </Head>
    <div>
        <Link href="/recipes">Begin</Link>
    </div>
    </>
  );
}

export default Home;