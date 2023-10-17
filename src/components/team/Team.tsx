import axios from "axios";
import { Section } from "../../containers";
import {
  Alert,
  Button,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { API_URL, urls } from "../../global/Variables";
import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { RefreshToken } from "../panel/Panel";
import TeamList, { Challenger, ChallengerTeam, Invitation } from "./TeamList";
import "./TeamPagination";
import TeamPagination from "./TeamPagination";
import InputText from "../profile/InputText";
import Invitations from "./Invitations";

let timer: number;

function debouncedSearchChallenger(
  name: string,
  navigate: NavigateFunction,
  page: number,
  setUsers: React.Dispatch<React.SetStateAction<never[]>>,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>,
  is_crashed: boolean
) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchChallenger(name, navigate, page, setUsers, setTotalPages, is_crashed);
  }, 500);
}

function searchChallenger(
  name: string,
  navigate: NavigateFunction,
  page: number,
  setUsers: React.Dispatch<React.SetStateAction<never[]>>,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>,
  is_crashed: boolean
) {
  if (name.length < 3) {
    setUsers([]);
    setTotalPages(1);
    return;
  }
  axios
    .get(API_URL + "/api/search-challenger/?name=" + name + "&page=" + page, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth.access"),
      },
    })
    .then((res) => {
      setUsers(res.data.results);
      setTotalPages(Math.ceil(res.data.count / 10));
    })
    .catch((err) => {
      if (is_crashed) {
        navigate(urls.signIn);
        return;
      }
      if (err.response.status === 401) {
        if (!RefreshToken()) {
          navigate(urls.signIn);
          return;
        }
        searchChallenger(name, navigate, page, setUsers, setTotalPages, true);
      }
    });
}

function loadTeam(
  setTeam: React.Dispatch<ChallengerTeam>,
  navigate: NavigateFunction,
  is_crashed: boolean
) {
  axios
    .get(API_URL + "/api/team/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth.access"),
      },
    })
    .then((res) => {
      setTeam(res.data);
    })
    .catch((err) => {
      if (is_crashed) {
        navigate(urls.signIn);
        return;
      }
      if (err.response.status === 401) {
        if (!RefreshToken()) {
          navigate(urls.signIn);
          return;
        }
        loadTeam(setTeam, navigate, true);
      }
    });
}

function loadInvitations(
  setInvitations: React.Dispatch<Invitation[]>,
  navigate: NavigateFunction,
  page: number,
  is_crashed: boolean
) {
  axios
    .get(API_URL + "/api/invitation/?page=" + page, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth.access"),
      },
    })
    .then((res) => {
      setInvitations(res.data.results);
    })
    .catch((err) => {
      if (is_crashed) {
        navigate(urls.signIn);
        return;
      }
      if (err.response.status === 401) {
        if (!RefreshToken()) {
          navigate(urls.signIn);
          return;
        }
        loadInvitations(setInvitations, navigate, page, true);
      }
    });
}

function updateTeam(
  setTeam: React.Dispatch<ChallengerTeam>,
  navigate: NavigateFunction,
  is_crashed: boolean,
  team: ChallengerTeam
) {
  axios
    .put(
      API_URL + "/api/team/",
      {
        name: team.name,
        description: team.description,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth.access"),
        },
      }
    )
    .then((res) => {
      setTeam(res.data);
    })
    .catch((err) => {
      if (is_crashed) {
        navigate(urls.signIn);
        return;
      }
      if (err.response.status === 401) {
        if (!RefreshToken()) {
          navigate(urls.signIn);
          return;
        }
        updateTeam(setTeam, navigate, true, team);
      }
    });
}

function deleteTeam(
  setTeam: React.Dispatch<ChallengerTeam>,
  navigate: NavigateFunction,
  is_crashed: boolean
) {
  axios
    .delete(API_URL + "/api/team/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth.access"),
      },
    })
    .then(() => {
      setTeam({
        name: "",
        description: "",
        members: [],
      });
    })
    .catch((err) => {
      if (is_crashed) {
        navigate(urls.signIn);
        return;
      }
      if (err.response.status === 401) {
        if (!RefreshToken()) {
          navigate(urls.signIn);
          return;
        }
        deleteTeam(setTeam, navigate, true);
      }
    });
}

function loadChallenger(
  navigate: NavigateFunction,
  setChallenger: React.Dispatch<any>,
  is_crashed: boolean
) {
  axios
    .get(API_URL + "/api/view-challenger/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth.access"),
      },
    })
    .then((res) => {
      setChallenger(res.data);
    })
    .catch((err) => {
      if (is_crashed) {
        navigate(urls.signIn);
        return;
      }
      if (err.response.status === 401) {
        if (!RefreshToken()) {
          navigate(urls.signIn);
          return;
        }
        loadChallenger(navigate, setChallenger, true);
      }
    });
}

const Team = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState<ChallengerTeam>({
    name: "",
    description: "",
    members: [],
  });
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [failureMessage, setFailureMessage] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [division, setDivision] = useState("");
  const [challenger, setChallenger] = useState<Challenger>({
    id: 0,
    first_name_persian: "",
    last_name_persian: "",
    university: "",
    status: "",
    national_code: "",
    is_confirmed: false,
    user: {
      first_name: "",
      last_name: "",
    },
  });

  useEffect(() => {
    loadChallenger(navigate, setChallenger, false);
    loadTeam(setTeam, navigate, false);
    loadInvitations(setInvitations, navigate, 1, false);
  }, []);

  useEffect(() => {
    let max_division = "J";
    for (const member of team.members) {
      if (max_division == "J" && member.challenger.status != "J") {
        max_division = member.challenger.status;
      } else if (max_division == "S" && member.challenger.status == "P") {
        max_division = member.challenger.status;
      }
    }
    setDivision(max_division);
  }, [team]);

  return (
    <>
      {team.members.length > 0 ? (
        <Section name="Team" side="left">
          <InputText
            value={team.name}
            placeholder={"Team Name"}
            onChange={(e) => {
              setTeam({ ...team, name: e.target.value });
            }}
          />
          <Textarea
            color="light-blue"
            size="md"
            placeholder="Description"
            className="text-white"
            value={team.description}
            onChange={(e) => {
              setTeam({ ...team, description: e.target.value });
            }}
          />
          <Typography variant="h2" className="text-white">
            Division:{" "}
            {(division == "J" && "Junior") ||
              (division == "S" && "Senior") ||
              (division == "P" && "Professional")}
          </Typography>
          <TeamList
            users={team.members.map((m) => m.challenger)}
            type="members"
          />
          <div className="flex flex-row gap-2 mt-2">
            <Button
              onClick={() => {
                updateTeam(setTeam, navigate, false, team);
              }}
            >
              Update
            </Button>
            <Button
              color="red"
              onClick={() => {
                deleteTeam(setTeam, navigate, false);
              }}
            >
              Delete/Leave
            </Button>
          </div>
        </Section>
      ) : (
        <>
          <Section name="Invitations" side="left">
            <Alert open={failureMessage != ""} color="red">
              <span className="text-sm">
                {challenger.national_code == "" &&
                  "Please complete your profile"}
              </span>
              <span className="text-sm">
                {!challenger.is_confirmed && "Please confirm your email"}
              </span>
              <span className="text-sm">{failureMessage}</span>
            </Alert>
            {challenger.national_code != "" && challenger.is_confirmed && (
              <Invitations
                invitations={invitations}
                setInvitations={setInvitations}
                setTeam={setTeam}
                loadTeam={loadTeam}
                setFailureMessage={setFailureMessage}
              />
            )}
          </Section>
        </>
      )}
      {team.members.length < 2 && (
        <Section name="Challengers" side="right">
          {challenger.national_code != "" && challenger.is_confirmed && (
            <>
              <Input
                type="text"
                color="light-blue"
                placeholder="Name"
                crossOrigin=""
                className="text-white"
                onChange={(e) => {
                  setName(e.target.value);
                  debouncedSearchChallenger(
                    e.target.value,
                    navigate,
                    1,
                    setUsers,
                    setTotalPages,
                    false
                  );
                }}
                value={name}
              />
              <TeamList
                users={users}
                team={team}
                setTeam={setTeam}
                type="challengers"
              />
              <TeamPagination
                pager={(nextPage) => {
                  debouncedSearchChallenger(
                    name,
                    navigate,
                    nextPage,
                    setUsers,
                    setTotalPages,
                    false
                  );
                }}
                totalPages={totalPages}
              />
            </>
          )}
        </Section>
      )}
    </>
  );
};

export default Team;
