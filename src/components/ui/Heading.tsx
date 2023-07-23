import { FC } from 'react'

interface IHeading {
	title: string
}
export const Heading: FC<IHeading> = ({ title }) => {
	return (
		<div className='text-3xl sm:text-7xl font-semibold text-center w-full'>
			{title}
		</div>
	)
}
