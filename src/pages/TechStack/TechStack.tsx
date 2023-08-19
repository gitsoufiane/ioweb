import { techStackData } from './data';
import { Header } from '../../components/Header';
import { ItemCard } from './ItemCard';
export function TechStack() {
  return (
    <div>
      <Header title="TechStack" subtitle="todo" />
      <hr />
      <div>
        {techStackData.map((ts) => {
          return (
            <>
              <h2 className="text-3xl font-bold text-onyx dark:text-white md:text-5xl ">
                {ts.category}
              </h2>
              <div className="grid grid-cols-1 gap-4 my-5 md:my-8 md:grid-cols-3">
                {ts.items.map((item) => (
                  <ItemCard name={item.name} icon={item.icon} link={item.link} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
