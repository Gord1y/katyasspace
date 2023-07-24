import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ title, placeholder, error, className, type = 'text', style, ...rest },
		ref
	) => (
		<div className={cn('w-full')} style={style}>
			<label>
				<span className='text-2xl'>{title ? title : placeholder}</span>
				<input
					placeholder={placeholder}
					type={type}
					ref={ref}
					className={cn(
						'mt-1 px-4 py-2 w-full outline-none border-2 border-black focus:border-black rounded transition-all placeholder:text-secondary block',
						{
							'border-red-400': !!error,
						},
						className
					)}
					{...rest}
				/>
			</label>
			{error && <div className='mt-1 text-red'>{error}</div>}
		</div>
	)
)

Field.displayName = 'Field'

export default Field
