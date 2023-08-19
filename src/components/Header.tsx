type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="container max-w-[1024px] m-auto px-10 mt-32  mb-10">
      <h1 className="break-words text-5xl font-bold leading-none text-onyx dark:text-white md:text-[80px]">
        {props.title}
      </h1>
      <p className="mt-4 mb-16 text-base text-medium-gray md:text-2xl">{props.subtitle}</p>
    </div>
  );
};
