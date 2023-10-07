import { Select, Option } from "@material-tailwind/react";

function FullWidthSelect({
  label,
  options,
  id,
}: {
  label: string;
  options: string[];
  id: string;
}) {
  return (
    <div className="w-full px-3 mt-3">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <Select
        label={label}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </div>
  );
}

export default FullWidthSelect;
