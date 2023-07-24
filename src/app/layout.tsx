import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/global.scss'
import cn from 'clsx'
import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import 'normalize.css/normalize.css'

const montserrat = Caveat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Katyas Portfolio',
	description: 'Katyas Portfolio by Gord1y',
	manifest: '/site.webmanifest',
	themeColor: '#F5F7F7',
	applicationName: 'Katyas Portfolio',
	appleWebApp: {
		capable: true,
		title: 'Katyas Portfolio',
		statusBarStyle: 'black-translucent',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5,
		userScalable: true,
	},
	icons: {
		apple: '/apple-touch-icon.png',
		icon: '/favicon.ico',
	},
	creator: 'Gord1y',
	authors: [{ name: 'Gord1y', url: 'https://activedocks.top' }],
	keywords:
		'Portfolio, Gord1y, React, Next.js, TypeScript, SCSS, Site, Web development',
	other: {
		'mobile-web-app-capable': 'yes',
		'msapplication-tap-highlight': 'no',
	},
	openGraph: {
		type: 'website',
		siteName: 'Katyas Space',
		emails: ['gordiy@gmail.com'],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@site',
		creator: '@gord1y',
		images: '/apple-touch-icon.png',
	},
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uk'>
			<body
				className={cn(
					'bg-primary font-medium text-black overflow-x-hidden',
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
