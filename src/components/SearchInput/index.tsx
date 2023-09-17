import axios from "axios";
import React, { useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { baseURL } from "../../helper";

type Props = {
  reloadFunc: ()=>void
};

const SearchInput = ({reloadFunc}: Props) => {
  const [inpVal, setInpVal] = useState<string>("");
  const localStorage = window.localStorage;
  const [searchData, setSearchData] = useState<any[]>([]);

  const handleChange = (e: string): void => {
    setInpVal(e);
    axios
      .get(`${baseURL.replace("forecast", "search")}&q=${e}`)
      .then((res) => setSearchData(res.data)).catch(error=>console.log(error.message)
      )
  };

  // const handleClick = (prop?: boolean): void => {
  //   window.addEventListener("keypress", (event) => {
  //     if (event.code === "Enter") {
  //       // setInpVal("");
  //       window.removeEventListener("keypress", () => {}, true);
  //     }
  //   });
  //   if (prop) {
  //     // setInpVal("");
  //     window.removeEventListener("keypress", () => {}, true);
  //   }
  // };

  const handleClickCity = (cityURL:string):void => {
    setInpVal('')
    localStorage.setItem('cityURL', cityURL)
    reloadFunc()
  }

  return (
    <div className="relative w-full flex justify-between items-center text-white px-5 p-3 bg-stone-700 bg-opacity-40 rounded-3xl border border-neutral-300">
      <input
        type="text"
        className="bg-transparent outline-none placeholder:text-white w-full"
        placeholder="Shahar Izlash"
        value={inpVal}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button>
        <BiSearchAlt2 />
      </button>
      <div className="absolute z-50 w-full top-14 left-0 glass-bg p-5 pt-2 text-black" style={{display: !inpVal?'none':'block'}}>
        {searchData.map(e=>(
          <div className="glass-bg p-2 px-4 mt-3 text-white" key={e.id} onClick={() => handleClickCity(e.url)}>{`${e.country}/${e.region.length>1&&e.region}`}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
