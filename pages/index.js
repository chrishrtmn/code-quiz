import Head from 'next/head'
import Grid from '../components/grid'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>SKYCATCHFIRE - Chris Hartman</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>
          <span>
            <i></i>Meet the Team<i></i>
          </span>
        </h1>

        <Grid />

        <footer>
          <span>
            <i></i>
          </span>
        </footer>
      </main>

      <style jsx>{`
        main {
          max-width: var(--width-max);
          margin: 0 auto;
          padding: 0 20px;
          overflow: hidden;
        }

        h1 {
          margin: 17px auto 43px;
          text-align: center;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: var(--color-base);
          border-bottom: 1px solid var(--color-base-light);
        }

        @media (min-width: 640px) {
          h1 {
            margin: 27px auto 63px;
            padding: 0;
          }
        }

        h1 span {
          display: inline-block;
          position: relative;
          top: 13px;
          padding: 0 30px;
          background: #fff;
        }

        @media (min-width: 640px) {
          h1 span {
            padding: 0;
          }
        }

        i {
          display: none;
          width: 0;
          height: 0;
          margin: 0 20px 0 14px;
          border: 6px solid transparent;
          border-bottom-color: var(--color-base);
          position: relative;
          top: -6px;
        }

        @media (min-width: 640px) {
          i {
            display: inline-block;
            margin: 0 30px 0 24px;
          }
        }

        i:after {
          content: '';
          position: absolute;
          left: -6px;
          top: 6px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top-color: var(--color-base);
        }

        footer {
          margin: 50px 0 40px;
          text-align: center;
          border-top: 1px solid var(--color-base-light);
        }

        @media (min-width: 960px) {
          footer {
            margin: 100px 0 40px;
          }
        }

        footer span {
          position: relative;
          top: -8px;
          background: #fff;
        }
      `}</style>
    </div>
  )
}
