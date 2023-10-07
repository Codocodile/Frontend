import HalfWidthInput from "./input/HalfWidthInput.tsx";
import FullWidthInput from "./input/FullWidthInput.tsx";
import FullWidthSelect from "./input/FullWidthSelect.tsx";
import FormHeader from "./FormHeader.tsx";
import FullWidthCheckbox from "./input/FullWidthCheckbox.tsx";

function Form({ headerText }: { headerText: "Sign In" | "Sign Up" }) {
  return (
    <div
      className={
        "flex justify-center items-center flex-col bg-gradient-to-b from-red-900 to-gray-900 h-screen"
      }
    >
      <FormHeader text={headerText} />
      <form className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
        {headerText === "Sign Up" ? (
          <>
            <div className="flex flex-wrap -mx-3 mb-3">
              <HalfWidthInput
                label={"First Name"}
                placeholder={"First Name"}
                id={"sign-in-first-name"}
                type={"text"}
              />
              <HalfWidthInput
                label={"Last Name"}
                placeholder={"Last Name"}
                id={"sign-in-last-name"}
                type={"text"}
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <HalfWidthInput
                label={"First Name in Persian"}
                placeholder={"First Name"}
                id={"sign-in-first-name"}
                type={"text"}
              />
              <HalfWidthInput
                label={"Last Name in Persian"}
                placeholder={"Last Name"}
                id={"sign-in-last-name"}
                type={"text"}
              />
            </div>{" "}
          </>
        ) : (
          <></>
        )}
        <div className="flex flex-wrap -mx-3">
          <FullWidthInput
            label={"Email"}
            placeholder={"example@gmail.com"}
            id={"sign-in-email"}
            type={"email"}
          />
          <FullWidthInput
            label={"Password"}
            placeholder={"******************"}
            id={"sign-in-password"}
            type={"password"}
          />
          {headerText === "Sign Up" ? (
            <FullWidthInput
              label={"Phone Number"}
              placeholder={"09123456789"}
              id={"sign-in-phone"}
              type={"text"}
            />
          ) : (
            <></>
          )}
        </div>
        {headerText === "Sign Up" ? (
          <div className="flex flex-wrap -mx-3 mb-6">
            <FullWidthSelect
              label={"Division"}
              options={["Junior (Highschool)", "Senior (University)", "Pro (Medalist)"]}
              id="sign-in-status"
            />
            <FullWidthSelect
              label={"Gender"}
              options={["Male", "Female"]}
              id="sign-in-gender"
            />
            <FullWidthCheckbox
              title="Workshops"
              label={"Want to particiapte in software workshops?"}
              id="sign-in-workshop"
            />
          </div>
        ) : (
          <></>
        )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
