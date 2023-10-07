import { Checkbox } from "@material-tailwind/react";

function FullWidthCheckbox({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) {
  return (
    <div className="w-full px-3 mt-3">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <Checkbox label={label} className="" crossOrigin="" />
    </div>
  );
}

export default FullWidthCheckbox;
