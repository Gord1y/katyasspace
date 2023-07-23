import { FC, PropsWithChildren } from 'react'

const Main: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className='h-full w-10/12 max-w-screen-xl mx-auto'>{children}</main>
	)
}

export default Main
