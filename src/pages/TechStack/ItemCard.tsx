type itemCardProps = {
  name: string;
  icon: string;
  link: string;
};

export function ItemCard(props: itemCardProps) {
  return (
    <div className="p-6 bg-gray-800 border-[1px] border-gray-700 rounded-3xl  md:h-[300px] ">
      <a href={props.link} className="flex flex-col items-center justify-center h-full gap-6">
        <picture className="relative flex items-center flex-grow h-[60px] w-[60px]  md:h-[100px] md:w-[100px] ">
          <img className="" src={props.icon} alt={props.name} />
        </picture>
        <h2 className="self-start text-base font-semibold text-white md:text-xl">{props.name}</h2>
      </a>
    </div>
  );
}
