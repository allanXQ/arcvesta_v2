const HeaderSection = ({
  subTitle,
  title,
}: {
  subTitle?: string;
  title?: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {subTitle && (
        <p className="text-3xl font-bold text-center text-wrap">{subTitle}</p>
      )}
      {title && <h2 className="text-center">{title}</h2>}
    </div>
  );
};

export default HeaderSection;
