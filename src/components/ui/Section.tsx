'use client'
import { Variants, motion } from 'framer-motion'
import { FC, InputHTMLAttributes } from 'react'

export interface ISection extends InputHTMLAttributes<HTMLElement> {
	id: string
	children: React.ReactNode
	className?: string
}

const cardVariants: Variants = {
	offscreen: {
		x: -100,
	},
	onscreen: {
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.6,
			duration: 1,
			delay: 0.1,
		},
	},
}

const Section: FC<ISection> = ({ children, id, className }) => {
	return (
		<motion.section
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true }}
			variants={cardVariants}
			className={className}
			id={id}
		>
			{children}
		</motion.section>
	)
}
export default Section
