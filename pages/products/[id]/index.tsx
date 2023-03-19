import React, { useState } from 'react'
import Image from 'next/image'
import Carousel from 'nuka-carousel'
import Head from 'next/head'

const images = [
  {
    src: 'https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg',
    alt: 'Dummy image 1',
  },
  {
    src: 'https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg',
    alt: 'Dummy image 2',
  },
  {
    src: 'https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg',
    alt: 'Dummy image 3',
  },
]

function products() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>

      <Carousel
        animation="zoom"
        withoutControls
        wrapAround
        autoplay
        speed={10}
        slideIndex={index}
      >
        {images.map((item) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width="1000"
            height="1000"
            layout="responsive"
          />
        ))}
      </Carousel>
      <div style={{ display: 'flex' }}>
        {images.map((item, idx) => (
          <div key={idx} onClick={() => setIndex(idx)}>
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={100}
              height={60}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default products
