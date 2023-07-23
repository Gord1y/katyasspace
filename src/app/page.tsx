import Main from '@/components/layout/Main'
import { About } from '@/components/sections/About'
import { Home } from '@/components/sections/Home'
import Prices from '@/components/sections/Prices'

export default function HomePage() {
	return (
		<>
			<Home />
			<Main>
				<About />
				<Prices />
			</Main>
		</>
	)
}
