'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '@/styles/swiper.scss'
import Image from 'next/image'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

export default function App() {
	return (
		<section className='w-full mt-10 h-screen' id='prices'>
			<div className='text-3xl sm:text-7xl font-semibold text-center w-full'>
				Ціни
			</div>
			<Swiper
				effect={'coverflow'}
				slidesPerView={3}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 15,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={true}
				navigation={true}
				loop={true}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Image
						src='https://swiperjs.com/demos/images/nature-1.jpg'
						alt=''
						width={400}
						height={400}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='https://swiperjs.com/demos/images/nature-1.jpg'
						alt=''
						width={400}
						height={400}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='https://swiperjs.com/demos/images/nature-1.jpg'
						alt=''
						width={400}
						height={400}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='https://swiperjs.com/demos/images/nature-1.jpg'
						alt=''
						width={400}
						height={400}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='https://swiperjs.com/demos/images/nature-1.jpg'
						alt=''
						width={400}
						height={400}
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}
