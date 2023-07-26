import img from '@/images/face.jpg'
import Image from 'next/image'
import { FC } from 'react'

export const Home: FC = () => {
	return (
		<section className='h-[101vh] w-full bg-secondary' id='Головна'>
			<div className='w-10/12 max-w-screen-xl mx-auto h-full flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-5 justify-center'>
				<div className='grid place-items-center border-4 border-primary rounded-full'>
					<div className='border-4 border-secondary flex  overflow-hidden w-[150px] h-[200px] md:w-[300px] md:h-[400px] rounded-lg'>
						<Image
							src={img}
							width={400}
							height={500}
							alt='image'
							className='w-fit rounded-full'
							priority
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2 w-full sm:w-2/5 text-primary'>
					<h2 className='text-2xl md:text-3xl'>Привіт, я</h2>
					<h1 className='text-6xl sm:leading-relaxed'>Волковська Катерина</h1>
					<h3 className='text-2xl md:text-2xl'>
						Досвідчений репетитор, <br />
						який знає багато різних методик викладання <br />
						для різних вікових категорій.
					</h3>
				</div>
			</div>
		</section>
	)
}
