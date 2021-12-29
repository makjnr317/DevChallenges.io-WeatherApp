import {format} from "date-fns";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import imageMap from "./imageMap";
import {switchUnit} from '../redux/actions'

export default function Main({data}) {
    const unit = useSelector(state => state.unit)
    const dispatch = useDispatch();
    const changeUnit = (change)=>{
        if (unit != change){
            dispatch(switchUnit())
        }
    }
    return (
        <main>
            <div className="units">
                <div className={`unit${(unit)?' active': ''}`} onClick={()=> changeUnit(true)}>℃</div>
                <div className={`unit${(!unit)?' active': ''}`} onClick={()=> changeUnit(false)}>℉</div>
            </div>

            <div className="days">
                <Day data={data[1]} tomorrow={true} unit={unit}/>
                <Day data={data[2]} unit={unit}/>
                <Day data={data[3]} unit={unit}/>
                <Day data={data[4]} unit={unit}/>
                <Day data={data[5]} unit={unit}/>
            </div>

            <p id="highlights">Today’s Hightlights </p>
            <div className="details">
                <div className="wind">
                    <h1>Wind Status</h1>
                    <p>{Math.floor(data[0].wind_speed)}<span>mph</span></p>
                    <div className="direction">
                        <div className="arrow">
                            <span className="material-icons-sharp" style={{transform:`scale(0.7) rotate(${Math.floor(data[0].wind_direction)}deg)`}}>navigation</span>
                        </div>
                        <p>
                            {data[0].wind_direction_compass}
                        </p>
                    </div>
                </div>

                <div className="humidity">
                    <h1>Humidity</h1>
                    <p>{data[0].humidity}<span>%</span></p>
                    <div className="display">
                        <div className="scale">
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>
                        <div className="display-background">
                            <div className="value" style={{width:`${data[0].humidity/100 * 229}px`}}></div>
                        </div>
                        <div className="scale sign">
                            <p>%</p>
                        </div>
                    </div>
                </div>

                <div className="visibility">
                    <h1>Visibility</h1>
                    <p>{data[0].visibility.toFixed(1).toString().replace(".",",")} <span>miles</span></p>
                </div>

                <div className="pressure">
                    <h1>Air Pressure</h1>
                    <p>{data[0].air_pressure} <span>mb</span></p>
                </div>
            </div>

            <p className="footer">created by <span className="bold">makjnr317</span> - devChallenges.io</p>
        </main>
    )
}

function Day({data, tomorrow, unit}){
    return(
        <div className="day">
            <h1 className="day-date">{(tomorrow)?"Tomorrow": format(Date.parse(data.applicable_date), 'EEE, d MMM')}</h1>
            <img className="day-status" src={imageMap(data.weather_state_name)} alt="status"/>
            <div className="future-temps">
                <p>{(unit)?Math.floor(data.max_temp):Math.floor((data.max_temp * 9/5) + 32)}{(unit)?"℃":"℉"}</p>
                <p className="min-temp" >{(unit)?Math.floor(data.min_temp):Math.floor((data.min_temp * 9/5) + 32)}{(unit)?"℃":"℉"}</p>
            </div>
        </div>
    )
}
