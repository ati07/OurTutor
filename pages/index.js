import Head from 'next/head'
import Header from '../Components/Header/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
    </div>
  )
}
