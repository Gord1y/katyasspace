import { FC } from 'react'
import { Heading } from '../ui/Heading'
import Section from '../ui/Section'

export const About: FC = () => {
	return (
		<Section className='w-full pt-16' id='Про мене'>
			<Heading title='Про мене' />
			<div className='mt-2 sm:mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-5 text-2xl sm:text-3xl'>
				<div className='w-full sm:w-2/5'>
					<h1 className='text-secondary inline'>
						Досвідчений репетитор з англійської та італійської мови
					</h1>
					<h2 className='inline'>
						, який володіє різними методиками викладання. З більш ніж 2-річним
						досвідом, я успішно навчала учнів різних вікових категорій, даючи
						нові знання та розвиваючи навички засвоєння цих мов.
					</h2>
				</div>
				<div className='w-full h-px sm:w-px sm:h-60 bg-black' />
				<div className='flex flex-col gap-2 sm:gap-5'>
					<div className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(0, 0, 0, 1)'
						>
							<path d='M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z'></path>
						</svg>
						<h2>Більше 2х років досвіду</h2>
					</div>
					<div className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(0, 0, 0, 1)'
						>
							<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'></path>
							<path d='M14.828 14.828a3.988 3.988 0 0 1-2.02 1.09 4.108 4.108 0 0 1-1.616 0 4.103 4.103 0 0 1-.749-.232 4.161 4.161 0 0 1-.679-.368 4.115 4.115 0 0 1-1.082-1.082l-1.658 1.117c.215.319.462.619.733.889a5.991 5.991 0 0 0 8.485.002c.272-.271.52-.571.734-.891l-1.658-1.117c-.143.211-.307.41-.49.592z'></path>
							<circle cx='8.5' cy='10.5' r='1.5'></circle>
							<path d='M15.5 10c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2z'></path>
						</svg>
						<h2>Багато задоволених учнів</h2>
					</div>
					<div className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(0, 0, 0, 1)'
						>
							<path d='M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z'></path>
						</svg>
						<h2>Різні методики викладання</h2>
					</div>
					<div className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(0, 0, 0, 1)'
						>
							<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'></path>
							<path d='M13 7h-2v6h6v-2h-4z'></path>
						</svg>
						<h2>Тільки онлайн заняття</h2>
					</div>
				</div>
			</div>
		</Section>
	)
}
