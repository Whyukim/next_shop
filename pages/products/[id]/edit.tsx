import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import Carousel from 'nuka-carousel'
import Head from 'next/head'
import CustomEditor from '@components/Editor'
import { useRouter } from 'next/router'
import { EditorState } from 'draft-js'

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

  const router = useRouter()
  const { id: productId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  )
  const handleSave = useCallback(() => {}, [])

  return (
    <>
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
      {editorState && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
    </>
  )
}

export default products
