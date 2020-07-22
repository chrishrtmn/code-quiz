export default function Grid() {
  return (
    <div className='grid'>
      <div className='grid-item'>
        <img src='/images/gallery/image-01.jpg' alt='Image 01' />
        <div className='overlay'>
          <div className='content'>Chris Hartman's Code-Quiz</div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-02.jpg' alt='Image 02' />
        <div className='overlay'>
          <div className='content'>Built with Next.js (React Framework)</div>
        </div>
      </div>

      <div className='grid-item'>
        <div className='quote'>
          <div className='content'>
            <i>"</i>I drink to make other people more interesting.{' '}
            <span>Ernest Hemingway</span>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-04.jpg' alt='Image 04' />
        <div className='overlay'>
          <div className='content'>Interest/Hobby</div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-05.jpg' alt='Image 05' />
        <div className='overlay'>
          <div className='content'>4 Cats. Make it stop.</div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-06.jpg' alt='Image 06' />
        <div className='overlay'>
          <div className='content'>
            <h3>Tuna</h3>
            <h4>Young Buck</h4>
            <p>
              <strong>Q</strong>For what would you be famous?
            </p>
            <p>
              <strong>A</strong> My legendary puppy dog face and 1st rate
              begging skills.
            </p>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <div className='quote'>
          <div className='content'>
            <i>"</i>Good people drink good beer. <span>Hunter S. Thompson</span>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-08.jpg' alt='Image 08' />
        <div className='overlay'>
          <div className='content'>Example text overlay</div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-09.jpg' alt='Image 09' />
        <div className='overlay'>
          <div className='content'>Example text overlay</div>
        </div>
      </div>

      <div className='grid-item'>
        <img src='/images/gallery/image-10.jpg' alt='Image 10' />
        <div className='overlay'>
          <div className='content'>Example text overlay</div>
        </div>
      </div>

      <div className='grid-item'>
        <div className='join'>
          <div className='content'>
            <h2>Join our team</h2>
            <p>Think you've got what it takes?</p>
            <img />
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-gap: 60px 20px;
          justify-content: center;
          justify-items: center;
        }

        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 60px 45px;
          }
        }

        @media (min-width: 960px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .grid-item {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .grid-item > div {
          position: absolute;
          bottom: 0;
          left: 0;
          display: grid;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          padding: 20px;
          text-align: center;
        }

        .grid-item .overlay {
          opacity: 0;
          color: #fff;
          transition: all ease-in-out 0.2s;
        }

        .grid-item:hover .overlay {
          opacity: 1;
          background: rgba(100, 120, 133, 0.92);
        }

        .grid-item .quote {
          justify-content: start;
          align-items: end;
          padding: 0 0 85px;
          text-align: left;
        }

        .grid-item:nth-child(3) .quote {
          justify-content: end;
        }

        .grid-item .quote .content {
          max-width: 220px;
        }

        .grid-item .join {
          background: #eff1f2;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: var(--color-base);
        }

        @media (min-width: 960px) {
          .grid-item .join {
            padding: 40px;
          }
        }

        .grid-item .join h2 {
          margin: 0 0 20px;
          font-size: 32px;
          line-height: 1.2;
        }

        .grid-item .join p {
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
}
