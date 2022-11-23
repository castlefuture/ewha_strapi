import React, { useEffect, useState } from "react";
import { TextField } from "../components/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const TestPage = () => {
  /*  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [state, setstate] = useState([] as any[]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://reqres.in/api/users");

      setUsers(response.data.data);
    };
    loadUsers();
  }, []);

  const onSuggestionHandler = (text: string) => {
    setText(text);
    setSuggestions([]);
  };
  const onChangeHandler = (value: unknown) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user["email"].match(regex);
      });
    }
    console.log("matches", matches);
    const matches = [];
    setSuggestions(matches);
    setText(text);
  }; */

  return (
    <div></div>
    /*     <div className="text-3xl text-extrabold">
      <div>Test Page</div>
      <div className="container">
        <input
          type="text"
          className="col-md-12 input"
          style={{ marginTop: 10 }}
          onChange={(event) => onChangeHandler(event.target.value)}
          value={text}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
        {suggestions &&
          suggestions.map((suggestions, i) => (
            <div
              key={i}
              className="suggestion col-md-12 justify-content-md-center"
              onClick={() => onSuggestionHandler(suggestions["email"])}>
              {suggestions["email"]}
            </div>
          ))}
      </div>
    </div> */
  );
};
