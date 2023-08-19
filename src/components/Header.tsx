type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="container my-10">
      <h1 className="text-5xl font-bold break-words dark:text-white">{props.title}</h1>
      <p className="mt-4 mb-16 text-base text-medium-gray">{props.subtitle}</p>
    </div>
  );
};
