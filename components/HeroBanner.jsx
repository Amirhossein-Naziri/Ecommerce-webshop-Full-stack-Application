import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
          <div >
            <p className="beats-solo">
              SMALL-TEXT
            </p>
            <h3>MID TEXT</h3>
            <img src="" alt="headphone" className='hero-banner-image' />
          </div>
          <div>
            <Link href="/product/id">
              <button type='button'>button text</button>
            </Link>
            <div className="desc">
              <h5>description</h5>
              <p>DESCRIPTION</p>
            </div>
          </div>
    </div>
  )
}

export default HeroBanner