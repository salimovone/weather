import React from "react";
import { resData } from "../../interfaces";

type Props = {
  data: resData;
};

const Highlights = ({data}: Props) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mt-5">Kunlik ma'lumotlar</h2>
        <div className="w-full flex flex-wrap mt-2 gap-2 justify-center">
            <div className="p-6 w-full glass">
                <ul>
                    <li><b>So'ngi yangilanish</b> - <span>{data.location.localtime}</span></li>
                    <li><b>Shamol tezligi</b> - <span>{data.current.wind_kph} km/soat</span></li>
                    <li><b>Quyosh chiqishi</b> - <span>{data.forecast.forecastday[0].astro.sunrise}</span></li>
                    <li><b>Quyosh botishi</b> - <span>{data.forecast.forecastday[0].astro.sunset}</span></li>
                </ul>
            </div>
            <div className="p-6 w-full glass">
                <ul>
                    <li><b>Namlik</b> - <span>{data.current.humidity} %</span></li>
                    <li><b>Kabi his qilinmoqda</b> - <span>{data.current.feelslike_c}°C</span></li>
                    {/* <li><b>Yomg'ir ehtimoli</b> - <span>0%</span></li> */}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Highlights;
