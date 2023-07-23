import img from '@/images/image.jpg'
import Image from 'next/image'
import { FC } from 'react'

export const Home: FC = () => {
	return (
		<>
			<section className='h-screen w-full bg-black' id='home'>
				<div className='w-10/12 max-w-screen-xl mx-auto h-full flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-5 justify-center'>
					<Image
						src={img}
						width={400}
						height={400}
						alt='image'
						className='w-full sm:w-1/4'
					/>
					<div className='flex flex-col gap-2 w-full sm:w-2/5 text-primary'>
						<p className='text-lg sm:texl-xl'>Привіт, я</p>
						<p className='text-6xl sm:leading-relaxed'>Волковська Катерина</p>
						<p className='text-xl sm:texl-2xl'>
							Досвідчений репетитор, <br />
							який знає багато різних методик викладання <br />
							для різних вікових категорій.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
