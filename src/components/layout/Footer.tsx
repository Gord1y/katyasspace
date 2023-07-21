import { Line } from '../ui/Line'

export default function Footer() {
	return (
		<footer className='flex flex-row w-11/12 mx-auto max-w-screen-md gap-2 p-3'>
			<div className='flex flex-col w-full items-center gap-2'>
				<Line /> © Made by Gord1y. 2023 All Rights Reserved.
			</div>
		</footer>
	)
}
