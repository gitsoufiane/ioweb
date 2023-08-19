import { techStackData } from './data';
export function TechStack() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-5xl">Tech Stack</h1>
      <p className="text-zinc-300">The Dev tools , apps, and devices we use.</p>
      <hr />
      <div>
        {techStackData.map((ts) => {
          return (
            <>
              <h2>{ts.cat}</h2>
            </>
          );
        })}
      </div>
    </div>
  );
}
