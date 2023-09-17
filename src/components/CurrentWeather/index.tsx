import { resData } from "../../interfaces";
import SearchInput from "../SearchInput";
import TodayIcon from "../TodayIcon";
import TodayInfo from "../TodayInfo";

type Props = {
  data: resData,
  reloadFunc: ()=>void
};

const CurrentWeather = (props: Props): JSX.Element => {
  return (
    <div className="lg:col-start-1 lg:col-end-3">
      <div className="w-full glass px-5 py-7">
        <SearchInput reloadFunc={props.reloadFunc} />
        <div className="grid md:grid-cols-2 lg:grid-cols-1">
            <TodayIcon data={props.data}/>
            <TodayInfo data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
