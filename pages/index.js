import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <style jsx>
        {`
           *{
             font-family : "Quicksand" ;
           }
        `}
      </style>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
      </Head>
      <h3>Payal Pandey</h3>
      <h4>About</h4>
      <h4>Interests</h4>
    </div>
  )
}
