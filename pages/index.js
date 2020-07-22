import Head from 'next/head'
import Grid from '../components/grid'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>SKYCATCHFIRE / chrishrtmn</title>
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
          overflow: hidden;
        }

        h1 {
          margin: 27px auto 63px;
          text-align: center;
          border-bottom: 1px solid var(--color-base-light);
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: var(--color-base);
        }

        h1 span {
          display: inline-block;
          position: relative;
          top: 13px;
          background: #fff;
        }

        i {
          display: inline-block;
          width: 0;
          height: 0;
          margin: 0 30px 0 24px;
          border: 6px solid transparent;
          border-bottom-color: var(--color-base);
          position: relative;
          top: -6px;
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

        footer span {
          position: relative;
          top: -8px;
          background: #fff;
        }
      `}</style>
    </div>
  )
}
