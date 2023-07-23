'use client'

import '@/styles/header.scss'
import cn from 'clsx'
import { useEffect, useState } from 'react'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [activeSection, setActiveSection] = useState('Головна')

	const [sectionNames] = useState<string[]>([
		'Головна',
		'Про мене',
		'Ціни',
		'Контакти',
	])

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setIsScrolled(scrollPosition > 0)
			const activeSection = sectionNames.find(sectionName => {
				const element = document.getElementById(sectionName)
				if (!element) return false
				return (
					element.offsetTop <= scrollPosition + 1 &&
					element.offsetTop + element.offsetHeight > scrollPosition + 1
				)
			})
			setActiveSection(activeSection || '')
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [sectionNames])

	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<header
			className={cn('fixed w-full', {
				'bg-primary text-secondary shadow-secondary shadow': isScrolled,
				'bg-secondary text-primary': !isScrolled,
			})}
		>
			<div className='w-10/12 max-w-screen-xl mx-auto flex flex-row items-center justify-between py-3 sm:py-5'>
				<a href='/' className='text-2xl'>
					Katyas Website
				</a>
				<nav>
					<section className='flex sm:hidden'>
						<div
							className='space-y-2'
							onClick={() => setIsNavOpen(prev => !prev)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill={isScrolled ? '#53AAF9' : 'white'}
							>
								<path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
							</svg>
						</div>

						<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
							<div
								className='absolute top-0 right-0 px-8 py-8'
								onClick={() => setIsNavOpen(false)}
							>
								<svg
									className='h-8 w-8 text-black'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<line x1='18' y1='6' x2='6' y2='18' />
									<line x1='6' y1='6' x2='18' y2='18' />
								</svg>
							</div>
							<ul className='flex flex-col items-center justify-between min-h-[250px] text-secondary'>
								{sectionNames.map(sectionName => (
									<li key={sectionName}>
										<a
											href={`/#${sectionName}`}
											className={cn('text-xl', {
												'font-bold underline': activeSection === sectionName,
											})}
										>
											{sectionName}
										</a>
									</li>
								))}
							</ul>
						</div>
					</section>

					<ul className='hidden space-x-8 sm:flex'>
						{sectionNames.map(sectionName => (
							<li key={sectionName}>
								<a
									href={`/#${sectionName}`}
									className={cn(
										'text-xl',
										{
											underline: activeSection === sectionName,
										},
										{
											'text-secondary': isScrolled,
											'text-primary': !isScrolled,
										}
									)}
								>
									{sectionName}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
