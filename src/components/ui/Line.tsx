import cn from 'clsx'
import { FC } from 'react'

interface ILine {
	className?: string
}

export const Line: FC<ILine> = ({ className }) => {
	return <div className={cn('h-px w-full bg-black', className)}></div>
}
