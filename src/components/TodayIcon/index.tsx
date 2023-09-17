import { GoLocation } from "react-icons/go"; 
import { resData } from "../../interfaces";

type Props = {
  data: resData
}

const TodayIcon = (props: Props) => {  
  return (
    <div>
        <div className="flex justify-center">
            <img src={props.data.current.condition.icon} alt={`${props.data.current.condition.text} icon`} className='w-40 mt-3' />
        </div>
        <div className="">
            <p className="flex items-center gap-2">
                <span><GoLocation /></span>
                <span>{`${props.data.location.name}, ${props.data.location.country}`}</span>
            </p>
            <p className="font-bold text-[40px]">{props.data.current.temp_c}°C</p>
            <p>So'ngi yangilanish: <b>{props.data.location.localtime.split(' ')[1]}</b></p>
        </div>
    </div>
  )
}

export default TodayIcon