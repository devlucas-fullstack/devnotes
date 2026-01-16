type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 text-gray-700 focus-within:text-black">
      <legend className="text-inherit text-sm uppercase mb-2">{legend}</legend>
      <input
        type="text"
        className="w-full rounded-lg px-3 h-12 border border-gray-700 text-sm text-black outline-none focus:border-2 focus:border-black"
        {...rest}
      />
    </fieldset>
  );
}
