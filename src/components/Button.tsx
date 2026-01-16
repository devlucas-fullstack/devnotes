type Props = React.ComponentProps<"button">;

export function Button({ children, type = "button", ...rest }: Props) {
  return (
    <button
      type={type}
      className="flex justify-center items-center bg-gray-900 text-white font-semibold cursor-pointer px-5 h-12 rounded-lg hover:bg-black transition ease-linear disabled:opacity-50 disabled:cursor-progress"
      {...rest}
    >
      {children}
    </button>
  );
}
