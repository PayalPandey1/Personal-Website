import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style jsx>
        {`
          * {
            font-family: 'Quicksand';
          }
        `}
      </style>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
