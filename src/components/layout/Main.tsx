import { FC, PropsWithChildren } from 'react'

const Main: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className='h-full w-11/12 max-w-screen-md mx-auto'>{children}</main>
	)
}

export default Main
