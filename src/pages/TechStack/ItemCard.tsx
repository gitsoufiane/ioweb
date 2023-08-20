type itemCardProps = {
  name: string;
  icon: string;
  link: string;
};

export function ItemCard(props: itemCardProps) {
  return (
    <div className="group relative flex items-center md:justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6 ">
      <a href={props.link} className="flex items-center justify-center h-full gap-6 md:flex-col">
        <picture className="relative flex items-center flex-grow h-[60px] w-[60px]  md:h-[100px] md:w-[100px] ">
          <img className="" src={props.icon} alt={props.name} />
        </picture>
        <h2 className="text-base font-semibold text-onyx dark:text-white md:text-xl">
          {props.name}
        </h2>
      </a>
    </div>
  );
}
