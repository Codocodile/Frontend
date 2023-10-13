import HalfWidthInput from "./input/HalfWidthInput.tsx";
import FullWidthInput from "./input/FullWidthInput.tsx";
import FullWidthSelect from "./input/FullWidthSelect.tsx";
import FormHeader from "./FormHeader.tsx";
import FullWidthCheckbox from "./input/FullWidthCheckbox.tsx";
import axios from "axios";
import { Alert, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { urls } from "../../global/Variables.ts";
import { HashLink } from "react-router-hash-link";

const API_URL = "http://localhost:8000";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function signUp(
  e: React.FormEvent<HTMLFormElement>,
  setSuccessAlert: React.Dispatch<React.SetStateAction<boolean>>,
  setFailureAlert: React.Dispatch<React.SetStateAction<boolean>>,
  setFailureResponse: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction,
  status: string,
  gender: string
) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const object: any = {};
  data.forEach(function (value, key) {
    object[key] = value;
  });
  object["is_workshop_attender"] = object["is_workshop_attender"] === "on";
  if (status === "Junior (Highschool)") {
    object["status"] = "J";
  } else if (status === "Senior (University)") {
    object["status"] = "S";
  } else {
    object["status"] = "P";
  }
  object["gender"] = gender === "Male" ? "M" : "F";
  object["user"] = {
    email: object["email"],
    password: object["password"],
    first_name: object["first_name"],
    last_name: object["last_name"],
  };
  delete object["email"];
  delete object["password"];
  delete object["first_name"];
  delete object["last_name"];
  axios
    .post(API_URL + "/api/create-challenger/", object)
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        setSuccessAlert(true);
        delay(5000).then(() => {
          navigate(urls.landing);
        });
      } else {
        setFailureResponse("Something went wrong!");
        setFailureAlert(true);
        delay(5000).then(() => {
          setFailureAlert(false);
        });
      }
    })
    .catch((err) => {
      var errors = err.response.data.errors;
      if (errors) {
        var error = errors[0].detail;
        if (error == "UNIQUE constraint failed: auth_user.username") {
          error = "This phone number is already taken!";
        }
        setFailureResponse(error);
      } else {
        setFailureResponse("Something went wrong!");
      }
      setFailureAlert(true);
      delay(5000).then(() => {
        setFailureAlert(false);
      });
    });
}

function signIn(
  e: React.FormEvent<HTMLFormElement>,
  setSuccessAlert: React.Dispatch<React.SetStateAction<boolean>>,
  setFailureAlert: React.Dispatch<React.SetStateAction<boolean>>,
  setFailureResponse: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const object: any = {};
  data.forEach(function (value, key) {
    object[key] = value;
  });
  object["username"] = object["phone_number"];
  delete object["phone_number"];
  axios
    .post(API_URL + "/api/token/", object)
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        setSuccessAlert(true);
        localStorage.setItem("auth.access", res.data.access)
        localStorage.setItem("auth.refresh", res.data.refresh)
        delay(5000).then(() => {
          navigate(urls.landing);
        });
      } else {
        setFailureResponse("Something went wrong!");
        setFailureAlert(true);
        delay(5000).then(() => {
          setFailureAlert(false);
        });
      }
    })
    .catch((err) => {
      var errors = err.response.data.errors;
      if (errors) {
        var error = errors[0].detail;
        if (error == "UNIQUE constraint failed: auth_user.username") {
          error = "This phone number is already taken!";
        }
        setFailureResponse(error);
      } else {
        setFailureResponse("Something went wrong!");
      }
      setFailureAlert(true);
      delay(5000).then(() => {
        setFailureAlert(false);
      });
    });
}

function Form({ headerText }: { headerText: "Sign In" | "Sign Up" }) {
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);
  const [failureResponse, setFailureResponse] = useState("");
  const [status, setStatus] = useState("Junior (Highschool)");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex justify-center items-center flex-col bg-gradient-to-b from-green-900 to-gray-900 min-h-screen h-full"
      }
    >
      <FormHeader text={headerText} />
      <form
        onSubmit={(e) =>
          headerText === "Sign Up"
            ? signUp(
                e,
                setSuccessAlert,
                setFailureAlert,
                setFailureResponse,
                navigate,
                status,
                gender
              )
            : signIn(
                e,
                setSuccessAlert,
                setFailureAlert,
                setFailureResponse,
                navigate
              )
        }
        className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-2xl"
      >
        {headerText === "Sign Up" ? (
          <>
            <div className="flex flex-wrap -mx-3 mb-3">
              <HalfWidthInput
                label={"First Name"}
                name="first_name"
                placeholder={"First Name"}
                id={"sign-in-first-name"}
                type={"text"}
              />
              <HalfWidthInput
                label={"Last Name"}
                name="last_name"
                placeholder={"Last Name"}
                id={"sign-in-last-name"}
                type={"text"}
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <HalfWidthInput
                label={"First Name in Persian"}
                name="first_name_persian"
                placeholder={"First Name"}
                id={"sign-in-first-name-persian"}
                type={"text"}
              />
              <HalfWidthInput
                label={"Last Name in Persian"}
                name="last_name_persian"
                placeholder={"Last Name"}
                id={"sign-in-last-name-persian"}
                type={"text"}
              />
            </div>{" "}
          </>
        ) : (
          <></>
        )}
        <div className="flex flex-wrap -mx-3">
          <FullWidthInput
            label={"Phone Number"}
            name="phone_number"
            placeholder={"09123456789"}
            id={"sign-in-phone"}
            type={"text"}
          />
          {headerText === "Sign Up" ? (
            <FullWidthInput
              label={"Email"}
              name="email"
              placeholder={"example@gmail.com"}
              id={"sign-in-email"}
              type={"email"}
            />
          ) : (
            <></>
          )}
          <FullWidthInput
            label={"Password"}
            name="password"
            placeholder={"******************"}
            id={"sign-in-password"}
            type={"password"}
          />
        </div>
        {headerText === "Sign Up" ? (
          <div className="flex flex-wrap -mx-3 mb-6">
            <FullWidthSelect
              label={"Division"}
              options={[
                "Junior (Highschool)",
                "Senior (University)",
                "Pro (Medalist)",
              ]}
              onChange={setStatus}
              name="status"
              id="sign-in-status"
            />
            <FullWidthSelect
              label={"Gender"}
              options={["Male", "Female"]}
              onChange={setGender}
              name="gender"
              id="sign-in-gender"
            />
            <FullWidthCheckbox
              title="Workshops"
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  Want to particiapte in&nbsp;
                  <Typography
                    as="a"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  >
                    <HashLink
                      to="../#imperfect-minds-(software-engineering-workshop)"
                      smooth={true}
                    >
                      Software Workshops
                    </HashLink>
                  </Typography>
                  ?
                </Typography>
              }
              name="is_workshop_attender"
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
        <Alert
          open={failureAlert}
          onClose={() => setFailureAlert(false)}
          color="red"
          className="mt-5"
        >
          {failureResponse}
        </Alert>
        <Alert
          open={successAlert}
          onClose={() => setSuccessAlert(false)}
          color="green"
          className="mt-5"
        >
          Sign {headerText == "Sign Up" ? "Up" : "In"} Successful!
        </Alert>
      </form>
    </div>
  );
}

export default Form;
