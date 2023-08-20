import { techStackData } from './data';
import { Header } from '../../components/Header';
import { ItemCard } from './ItemCard';
export function TechStack() {
  return (
    <div>
      <Header
        title="TechStack"
        subtitle="The dev tools, apps, and devices I use, and the games I play."
      />
      <hr className="py-4" />
      <div className="max-w-[1024px] m-auto px-10">
        {techStackData.map((ts) => {
          return (
            <div className="mb-16 mx">
              <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl ">
                {ts.category}
              </h2>
              <div className="grid grid-cols-1 gap-4 my-5 md:my-8 md:grid-cols-3">
                {ts.items.map((item) => (
                  <ItemCard name={item.name} icon={item.icon} link={item.link} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
