import { Heading } from '../ui/Heading'

export default function App() {
	return (
		<section className='w-full pt-16' id='Ціни'>
			<Heading title='Ціни' />
			<div className='flex flex-col md:flex-row overflow-hidden justify-center items-center w-full mt-5 gap-5 md:gap-8'>
				<div className='flex flex-col gap-2 justify-center items-center p-5 snap-center border-2 border-secondary text-secondary rounded-lg md:w-1/4'>
					<p className='text-3xl md:text-4xl'>Пробне заняття</p>
					<p className='text-2xl md:text-3xl'>250грн/60хв</p>
					<p className='text-xl md:text-2xl'>
						1 пробне заняття, на якому оцінюється рівень знань, та ми розуміємо
						чи підходимо один одному
					</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center p-10 snap-center bg-secondary rounded-lg text-primary md:w-1/4'>
					<p className='text-3xl md:text-4xl'>Блок занять</p>
					<p className='text-2xl md:text-3xl'>2999грн/11 занять</p>
					<p className='text-xl md:text-2xl'>
						Найвигідніший тариф, оскільки є додаткове заняття по ціні 10
						разових.
					</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center p-5 snap-center border-2 border-black text-black rounded-lg md:w-1/4'>
					<p className='text-3xl md:text-4xl'>Разове заняття</p>
					<p className='text-2xl md:text-3xl'>300грн/60хв</p>
					<p className='text-xl md:text-2xl'>
						Наступний урок, після пробного, під час якого уже починаємо щось
						розбирати та вибираємо шляхи вивчення
					</p>
				</div>
			</div>
		</section>
	)
}
