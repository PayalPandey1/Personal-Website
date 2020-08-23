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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
