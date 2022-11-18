import React, { useEffect, useState } from "react";
import { TextField } from "../components/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const FindPage = () => {
  const [name, setName] = useState("");

  const searchName = () => {
    axios
      .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="m-4">
      <div className="flex justify-center text-black text-3xl font-extrabold">
        <a href="http://localhost:3000/homepage">wabawachi</a>
      </div>
      <div className="text-3xl text-extrabold">와인 검색</div>
      <div>
        <TextField
          placeholder="와인명을 입력해주세요."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
