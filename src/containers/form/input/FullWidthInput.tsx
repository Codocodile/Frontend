function FullWidthInput({label, placeholder, id, type}: {
  label: string,
  placeholder: string,
  id: string,
  type: 'text' | 'password' | 'email'

}) {
  return (
    <div className="w-full px-3">
      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={id} type={type} placeholder={placeholder} required={true}/>
    </div>
  )
}

export default FullWidthInput;