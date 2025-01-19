const Loader = ({
  size = "screen",
}: {
  size?: "small" | "medium" | "large" | "screen";
}) => {
  const heightClasses = {
    small: "h-20",
    medium: "h-32",
    large: "h-48",
    screen: "h-screen",
  };

  return (
    <div
      className={`flex ${heightClasses[size]} items-center justify-center bg-white dark:bg-dark`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
