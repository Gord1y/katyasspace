import { Heading } from "../ui/Heading";
import Section from "../ui/Section";

export default function App() {
  return (
    <Section className="w-full pt-16" id="Ціни">
      <Heading title="Ціни" />
      <div className="flex flex-col md:flex-row overflow-hidden justify-center items-center w-full mt-5 gap-5 md:gap-8">
        <div className="flex flex-col gap-2 justify-center items-center p-5 snap-center border-2 border-secondary text-secondary rounded-lg md:w-1/4">
          <h1 className="text-3xl md:text-4xl font-bold">Пробне заняття</h1>
          <h2 className="text-3xl md:text-4xl text-rose-500 font-black">
            200грн/60хв
          </h2>
          <h3 className="text-2xl md:text-3xl">
            1 пробне заняття, на якому оцінюється рівень знань, та ми розуміємо
            чи підходимо один одному.
          </h3>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-10 snap-center bg-secondary rounded-lg text-primary md:w-1/3">
          <h1 className="text-3xl md:text-4xl font-bold">Блок занять</h1>
          <h2 className="text-3xl md:text-4xl text-rose-500 font-black">
            2999грн/11 занять
          </h2>
          <h3 className="text-2xl md:text-3xl">
            Найвигідніший тариф, оскільки є додаткове заняття по ціні 10
            разових.
          </h3>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-5 snap-center border-2 border-black text-black rounded-lg md:w-1/4">
          <h1 className="text-3xl md:text-4xl font-bold">Разове заняття</h1>
          <h2 className="text-3xl md:text-4xl text-rose-500 font-black">
            300грн/60хв
          </h2>
          <h3 className="text-2xl md:text-3xl">
            Звичайне заняття, під час якоро розвиваємо навички та знання.
          </h3>
        </div>
      </div>
    </Section>
  );
}
