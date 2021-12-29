import cloudBack from "../images/Cloud-background.png"
import {format} from "date-fns";
import imageMap from "./imageMap";
import { useSelector } from "react-redux";

export default function Sidebar({location,time, status,temp}){
    const unit = useSelector(state => state.unit)
    return(
        <div className="sidebar">
            <div className="sidebar-top">
                <button className="search-btn">
                    Search for places
                </button>
                <div className="location">
                    <span className="material-icons-sharp">gps_fixed</span>
                </div>
            </div>
            <div className="image">
                <img src={cloudBack} alt="clouds" className="cloud-back"/>
                <img src={imageMap(status)} alt="status" className="statusImage"/>
            </div>

            

            <div className="day-details">
                <p className="temp">
                    {(unit)?Math.floor(temp):Math.floor((temp * 9/5) + 32)}
                    <span>{(unit)?"℃":"℉"}</span>
                </p>

                <p className="status">{status}</p>

                <div className="date">
                    <p>Today</p>
                    <p>•</p>
                    <p>{format(Date.parse(time), 'EEE, d MMM')}</p>
                    
                </div>

                <div className="location-name">
                <span className="material-icons-sharp">location_on</span>
                    {location}
                </div>
            </div>
        </div>
    )
}

