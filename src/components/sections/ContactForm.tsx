'use client'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../ui/input/Field'

export default function ContactForm() {
	interface IForm {
		name: string
		surname: string
		phone: string
		messenger: string
		message: string
	}

	const {
		register: registerForm,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IForm>({
		mode: 'onChange',
	})
	const [submited, setSubmited] = useState(false)
	const onSubmit: SubmitHandler<IForm> = async data => {
		const template_params = {
			name: data.name,
			surname: data.surname,
			phone: data.phone,
			messenger: data.messenger,
			message: data.message,
		}

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
				process.env.NEXT_PUBLIC_EMAIL_TEMPLETE_ID || '',
				template_params,
				process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ''
			)
			.then(
				result => {
					if (result.text) setSubmited(true)
				},
				error => {
					setError('name', { message: error.text })
				}
			)
	}
	if (submited)
		return (
			<h2 className='text-2xl md:text-3xl text-secondary'>
				Дякую за вашу відповідь.
				<br />Я зв’яжусь з вами найближчим часом. :)
			</h2>
		)
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-wrap gap-2 w-full md:w-11/12 max-w-md'
		>
			<Field
				title='Ім’я'
				placeholder='Ім’я'
				type='text'
				{...registerForm('name', {
					required: 'Ім’я необхідне',
					maxLength: {
						value: 21,
						message: 'max length is 21',
					},
				})}
				error={errors.name?.message}
			/>
			<Field
				title='Прізвище'
				placeholder='Прізвище'
				type='text'
				{...registerForm('surname', {
					required: 'Прізвище необхідне',
					maxLength: {
						value: 21,
						message: 'max length is 21',
					},
				})}
				error={errors.surname?.message}
			/>
			<Field
				title='Номер телефону'
				placeholder='+380XXXXXXXXX'
				type='text'
				{...registerForm('phone', {
					required: 'Номер телефону необхідний',
					maxLength: {
						value: 21,
						message: 'max length is 21',
					},
					pattern: {
						value: /[+380][0-9]{9}/,
						message: 'Номер телефону повинен бути у форматі +380XXXXXXXXX',
					},
				})}
				error={errors.phone?.message}
			/>
			<Field
				title='Мессенджер'
				placeholder='Telegram, Viber..'
				type='text'
				{...registerForm('messenger', {
					required: 'Мессенджер необхідний',
					maxLength: {
						value: 21,
						message: 'max length is 21',
					},
				})}
				error={errors.messenger?.message}
			/>
			<div className='text-xl md:text-2xl w-full'>Будь які додаткові дані</div>
			<textarea
				{...registerForm('message', {
					maxLength: {
						value: 500,
						message: 'max length is 500',
					},
				})}
				rows={3}
				placeholder='Повідомлення'
				className='w-full p-2 rounded-md border-2 border-black placeholder:text-secondary outline-none focus:border-black'
			/>
			<button
				type='submit'
				className='mt-1 w-full md:w-1/2 p-2 rounded-md border-2 border-black text-black hover:bg-black hover:text-white'
			>
				Відправити
			</button>
		</form>
	)
}
