import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/global.scss'
import cn from 'clsx'
import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import 'normalize.css/normalize.css'

const montserrat = Caveat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ua'>
			<body
				className={cn(
					'bg-primary font-medium text-black',
					montserrat.className
				)}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}