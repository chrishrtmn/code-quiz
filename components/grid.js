import ProgressiveImage from 'react-progressive-image'

export default function Grid() {
  return (
    <div className='grid'>
      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-01.webp'
          placeholder='images/gallery/image-01.jpg'
        >
          {(src) => <img src={src} alt='Image 1' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <h2>Chris Hartman</h2>
            <ul>
              <li>Front-End Developer</li>
              <li>UI/UX Enthusiast</li>
              <li>Accessibility Advocate</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-02.webp'
          placeholder='images/gallery/image-02.jpg'
        >
          {(src) => <img src={src} alt='Image 2' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <h2>Site Built With</h2>
            <ul>
              <li>Next.js (React Framework)</li>
              <li>styled-jsx &middot; PostCSS &middot; CSS Grid</li>
              <li>Progressive Images (WebP Format with JPG Fallback)</li>
              <li>Mobile-First Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <div className='quote'>
          <div className='content'>
            <i>&ldquo;</i>
            <blockquote>
              I drink to make other people more interesting.
              <cite>Ernest Hemingway</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-03.webp'
          placeholder='images/gallery/image-03.jpg'
        >
          {(src) => <img src={src} alt='Image 3' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <h2>Experience</h2>
            <ul>
              <li>HTML &middot; CSS &middot; JavaScript &middot; PHP</li>
              <li>jQuery &middot; React.js &middot; Vue.js &middot; Next.js</li>
              <li>Drupal &middot; Laravel &middot; ASP.NET</li>
              <li>
                Git &middot; npm &middot; Webpack &middot; Sass &middot;
                CSS-in-JS
              </li>
              <li>UI/UX Design &middot; Adobe Creative Suite &middot; Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-04.webp'
          placeholder='images/gallery/image-04.jpg'
        >
          {(src) => <img src={src} alt='Image 4' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <h2>Interests</h2>
            <ul>
              <li>
                Learning more{' '}
                <a
                  href='https://comicvine1.cbsistatic.com/uploads/original/11125/111256935/5157145-large.gif'
                  target='_blank'
                >
                  code
                </a>
              </li>
              <li>
                Ride my{' '}
                <a href='https://onewheel.com' target='_blank'>
                  Onewheel
                </a>
              </li>
              <li>Snowboard in winters</li>
              <li>Kayaking</li>
              <li>Watching Movies</li>
              <li>Listening to Music</li>
              <li>Visual Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-05.webp'
          placeholder='images/gallery/image-05.jpg'
        >
          {(src) => <img src={src} alt='Image 5' />}
        </ProgressiveImage>

        <div className='overlay qa'>
          <div className='content'>
            <h3>Tuna</h3>
            <h4>Young Buck</h4>
            <p>
              <span>Q:</span> For what would you be famous?
            </p>
            <p>
              <span>A:</span> My legendary puppy dog face and 1st rate begging
              skills.
            </p>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <div className='quote'>
          <div className='content'>
            <i>&ldquo;</i>
            <blockquote>
              Good people drink good beer.
              <cite>Hunter S. Thompson</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-06.webp'
          placeholder='images/gallery/image-06.jpg'
        >
          {(src) => <img src={src} alt='Image 6' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <p>Text overlay</p>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-07.webp'
          placeholder='images/gallery/image-07.jpg'
        >
          {(src) => <img src={src} alt='Image 7' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <p>Text overlay</p>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <ProgressiveImage
          src='images/gallery/image-08.webp'
          placeholder='images/gallery/image-08.jpg'
        >
          {(src) => <img src={src} alt='Image 8' />}
        </ProgressiveImage>

        <div className='overlay'>
          <div className='content'>
            <h2>Congrats!</h2>
            <p>
              <a
                href='https://fsmedia.imgix.net/0b/48/3d/e0/7994/4301/ac18/8616981ab178/spider-man-homecoming-2017.gif?rect=141%2C0%2C860%2C430&auto=format%2Ccompress&w=650&gifq=35'
                target='_blank'
              >
                You've found the secret!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className='grid-item'>
        <div className='join'>
          <div className='content'>
            <h2>Join our team</h2>
            <p>Think you've got what it takes?</p>
            <img src='images/badge.svg' alt="Martha's Vineyard" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-gap: 20px;
          justify-content: center;
          justify-items: center;
        }

        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px 30px;
          }
        }

        @media (min-width: 960px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 60px 45px;
          }
        }

        .grid-item {
          position: relative;
          width: 100%;
          text-align: center;
        }

        @media (min-width: 640px) {
          .grid-item {
            height: 100%;
            width: auto;
          }

          .grid-item:last-child:nth-child(3n - 1) {
            grid-column: span 2;
            width: 100%;
          }
        }

        @media (min-width: 960px) {
          .grid-item {
            width: 100%;
          }

          .grid-item:last-child:nth-child(3n - 1) {
            grid-column: span 1;
          }
        }

        .grid-item img {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: 0 20%;
        }

        @media (min-width: 640px) {
          .grid-item img {
            max-height: none;
            object-fit: none;
            object-position: 50% 50%;
          }
        }

        .grid-item .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          display: grid;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 300px;
          overflow: hidden;
          padding: 20px;
          text-align: center;
          opacity: 0;
          color: #fff;
          transition: all ease-in-out 0.2s;
        }

        @media (min-width: 640px) {
          .grid-item .overlay {
            height: 100%;
          }
        }

        .grid-item:hover .overlay {
          opacity: 1;
          background: rgba(100, 120, 133, 0.92);
        }

        .grid-item .content h2 {
          margin: 0 0 10px;
        }

        @media (min-width: 640px) {
          .grid-item .content h2 {
            margin: 0 0 20px;
          }

          .grid-item .content li {
            padding: 3px 0;
          }
        }

        .grid-item .content a {
          color: #fff;
          text-decoration: none;
          border-bottom: 2px solid #fff;
          transition: all ease-in-out 0.2s;
        }

        .grid-item .content a:hover {
          color: var(--color-brand-primary-dark);
          border-color: var(--color-brand-primary-dark);
        }

        .grid-item .overlay.qa .content {
          max-width: 240px;
        }

        .grid-item .overlay.qa h3 {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 14px;
        }

        .grid-item .overlay.qa h4 {
          margin: 5px 0 0;
          font-weight: lighter;
          letter-spacing: 3px;
          font-size: 14px;
          color: var(--color-brand-primary-dark);
        }

        .grid-item .overlay.qa p {
          margin: 15px 0;
          font-size: 14px;
        }

        .grid-item .overlay.qa p span {
          font-weight: bold;
          color: var(--color-brand-primary-dark);
        }

        .grid-item .quote,
        .grid-item .join {
          display: grid;
          height: 100%;
          min-height: 200px;
        }

        .grid-item .quote {
          text-align: left;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 640px) {
          .grid-item .quote {
            justify-content: start;
            align-items: end;
            padding: 0 0 85px;
          }
        }

        @media (min-width: 640px) {
          .grid-item:nth-child(3) .quote {
            justify-content: end;
          }
        }

        .grid-item .quote .content {
          max-width: 240px;
        }

        .grid-item .quote i {
          display: block;
          font-size: 90px;
          line-height: 0.3;
          font-family: var(--font-family-base);
          color: var(--color-brand-secondary);
        }

        .grid-item .quote blockquote {
          color: var(--color-brand-primary);
          text-transform: uppercase;
          line-height: 1.6;
        }

        .grid-item .quote blockquote cite {
          display: block;
          margin: 15px 0 0;
          font-size: 14px;
          font-style: normal;
          color: var(--color-brand-secondary);
        }

        .grid-item .join {
          align-items: center;
          padding: 40px 20px;
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

        .grid-item .join img {
          display: none;
        }

        @media (min-width: 960px) {
          .grid-item .join img {
            display: block;
            max-width: 150px;
            position: absolute;
            right: -30px;
            bottom: -70px;
          }
        }
      `}</style>
    </div>
  )
}
