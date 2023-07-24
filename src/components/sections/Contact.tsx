'use client'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { useRef } from 'react'

export default function Contact() {
	const form = useRef<HTMLFormElement>(null)
	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (form.current)
			emailjs
				.sendForm(
					'service_fl1fch6',
					'template_dt05hyr',
					form.current,
					'dAsoY-KQOF7HgVGCS'
				)
				.then(
					result => {
						console.log(result.text)
					},
					error => {
						console.log(error.text)
					}
				)
	}

	return (
		<section
			className='w-full mt-16 flex flex-col md:flex-row-reverse justify-center items-center'
			id='Контакти'
		>
			<div className='w-full md:w-2/5 p-16 min-h-fit md:h-screen flex flex-col gap-3 justify-center text-2xl text-primary bg-secondary'>
				<div className='text-4xl md:text-5xl font-semibold'>Напишіть мені</div>
				<div className='flex flex-col gap-2 md:gap-4'>
					<div className='flex items-center gap-2 md:gap-4'>
						<div className=' w-8 h-8 rounded-2xl bg-primary text-black grid place-items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='#53AAF9'
							>
								<path d='M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z'></path>
							</svg>
						</div>
						Пошта katyshavolk1511@gmail.com
					</div>
					<Link
						href='https://t.me/kitikat1503'
						className='flex items-center gap-2 md:gap-4'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(245, 247, 247, 1)'
						>
							<path d='m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z'></path>
						</svg>
						Telegram @kitikat1503
					</Link>
					<div className='flex items-center gap-2 md:gap-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(245, 247, 247, 1)'
						>
							<path d='M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z'></path>
							<path d='M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z'></path>
						</svg>
						Телефон +38-093-551-30-66
					</div>
					<Link
						href='https://www.instagram.com/katya_volkovska/'
						className='flex items-center gap-2 md:gap-4'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='rgba(245, 247, 247, 1)'
						>
							<path d='M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z'></path>
							<circle cx='11.994' cy='11.979' r='3.003'></circle>
						</svg>
						Instagram @katya_volkovska
					</Link>
				</div>
			</div>
			<div className='w-full md:w-3/5 p-10 min-h-fit md:h-4/5 flex flex-col gap-3 justify-center text-xl items-center text-black md:bg-white'>
				<div className='text-2xl md:text-3xl font-semibold'>
					Форма для зворотнього зв’язку
				</div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex flex-wrap gap-2 w-full md:w-11/12 max-w-md mt-5 '
				>
					<div className='text-xl md:text-2xl w-full'>
						Ваше ім’я та прізвище
					</div>
					<input
						type='text'
						name='name'
						placeholder='Ім’я'
						className='w-full md:w-5/12 p-2 rounded-md border-2 border-black placeholder:text-black'
						required
					/>
					<input
						type='text'
						name='surname'
						placeholder='Прізвище'
						className='w-full md:w-5/12 p-2 rounded-md border-2 border-black placeholder:text-black'
						required
					/>
					<div className='text-xl md:text-2xl w-full'>
						Ваш номер телефону та мессенджер для зв’язку
					</div>
					<input
						type='text'
						name='phone'
						placeholder='+380XXXXXXXXX'
						className='w-full md:w-5/12 p-2 rounded-md border-2 border-black placeholder:text-black'
						required
					/>
					<input
						type='text'
						name='messenger'
						placeholder='Telegram, Viber...'
						className='w-full md:w-5/12 p-2 rounded-md border-2 border-black placeholder:text-black'
					/>
					<div className='text-xl md:text-2xl w-full'>
						Будь які додаткові дані
					</div>
					<textarea
						name='message'
						rows={5}
						placeholder='Повідомлення'
						className='w-full p-2 rounded-md border-2 border-black placeholder:text-black'
						required
					/>
					<button
						type='submit'
						className='w-full md:w-1/2 p-2 rounded-md border-2 border-black placeholder:text-black hover:bg-black hover:text-white'
					>
						Відправити
					</button>
				</form>
			</div>
		</section>
	)
}
