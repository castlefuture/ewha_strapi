import React, { useState } from "react";
import { TextField } from "../components/TextField";

export type Wine = {
  wine_id: number;
  kname: string;
};

export const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  console.log(name);
  const [wines, setWines] = useState<Wine[]>([]);

  const getData = async () => {
    const url = `http://15.165.220.123:8000/api/v1/winesearch/?search=${name}`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();

      setWines(data.results);
    } else {
      throw new Error("데이터를 받아오지 못했습니다.");
    }
    setIsLoading(false);
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
      {/* 여기에 엘라스틱서치 검색 결과
      {!isLoading &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)} */}
    </div>
  );
};
