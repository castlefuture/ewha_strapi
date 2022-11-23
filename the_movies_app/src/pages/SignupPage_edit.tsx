import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const { replace } = useHistory();

  const register = () => {
    axios
      .post("http://3.38.57.203:8000/api/v1/users/register/", {
        email: email,
        password: password,
        username: username,
        birthdate: birthdate,
        region: region,
        gender: gender,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        replace("/");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="m-4">
      <div className="text-3xl font-bold mb-10">회원가입</div>

      <div>
        <TextField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <TextField
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          label="생년월일"
          placeholder="YYYY-MM-DD"
          value={birthdate}
          onChange={(event) => {
            setBirthdate(event.target.value);
          }}
        />

        <label className="label-col">지역</label>
        <select
          // 경기도 / 강원도 / 충청북도 / 충청남도 / 전라북도 / 전라남도 / 경상북도 / 경상남도 / 제주특별자치도 / 서울 / 부산 / 인천 / 대구 / 광주 / 울산 / 세종
          className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          value={region}
          onChange={(event) => {
            setRegion(event.target.value);
          }}>
          <option>서울특별시</option>
          <option>광주광역시</option>
          <option>대구광역시</option>
          <option>부산광역시</option>
          <option>울산광역시</option>
          <option>인천광역시</option>
          <option>세종특별시</option>
          <option>강원도</option>
          <option>경기도</option>
          <option>경상남도</option>
          <option>경상북도</option>
          <option>전라남도</option>
          <option>전라북도</option>
          <option>충청남도</option>
          <option>충청북도</option>
          <option>제주특별자치도</option>
        </select>

        <label className="label-col">성별</label>
        <select
          className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}>
          <option>female</option>
          <option>male</option>
          <option>other</option>
        </select>
      </div>

      <div>
        <div
          className="bg-gray-800 text-white text-center py4"
          onClick={() => {
            register();
          }}>
          회원가입
        </div>
      </div>
    </div>
  );
};
