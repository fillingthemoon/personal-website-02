import Head from 'next/head'
import GoogleFonts from '../components/googleFonts'

const Home = () => {
  return (
    <div>
      <Head>
        <title>about me</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      about me
    </div>
  )
}

export default Home
