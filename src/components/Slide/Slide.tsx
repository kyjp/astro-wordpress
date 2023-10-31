import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import './style.sass'

export default function Slide() {
  const [data, setData] = useState([])
  const [flg, setFlg] = useState(false)
  const [tag, setTag] = useState<any>([])

  const format = (date: string) => {
    const tempDate = new Date(date)
    const year = tempDate.getFullYear()
    const month = tempDate.getMonth() + 1
    const day = tempDate.getDate()
    return year + '.' + month + '.' + day
  }

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/posts?per_page=100&page=1&order=asc`)
      const posts = await res.json()
      let tags = await fetch(`${import.meta.env.PUBLIC_API_URL}/tags`)
      tags = await tags.json()
      setData(posts)
      setFlg(true)
      setTag(tags)
      let temp = await fetch(`${import.meta.env.PUBLIC_API_URL}/posts?_embed&slug=test`)
      temp = await temp.json()
      console.log(temp)

    })()
    try {
    } catch (error) {
      console.log(error)
    }
    return () => {
    }
  }, [])

  return (
    <>
      {flg ?
        <>
        <Swiper
          slidesPerView={4.5}
          initialSlide={0}
          centeredSlides={true}
          loop={true}
          spaceBetween={50}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={1000}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={
            [Navigation, Pagination, Autoplay]
          }
          pagination={{
            type: 'fraction',
            el: '.swiper-pagination',
          }}
        >
          {
            [...data, ...data].map((post: any, index) =>
              <SwiperSlide key={index}>
                <a href={`/blog/${post.slug}`}>
                  <div className="c-image-wrapper"></div>
                  {
                    post.tags.length !== 0 ?
                      <div className="c-tag">
                        {
                          tag.map((item: any, index: number) => {
                            if (post.tags.includes(item.id)) {
                              return (
                                <div key={`tag-${index}`}>{item.name}</div>
                              )
                            }
                          })
                        }
                      </div>
                    : <></>
                  }
                  <p><strong>{post.title.rendered}</strong></p>
                  <p>{format(post.date)}</p>
                </a>
              </SwiperSlide>
            )
          }
          </Swiper>
          <div className="c-swiper-nav-outer">
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
          </div>
        </>
      : <></>}
    </>
  )
}
