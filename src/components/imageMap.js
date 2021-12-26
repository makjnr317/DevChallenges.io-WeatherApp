import Clear from "../images/Clear.png"
import Snow from "../images/Snow.png"
import Sleet from "../images/Sleet.png"
import Hail from "../images/Hail.png"
import ThunderStorm from "../images/Thunderstorm.png"
import HeavyRain from "../images/HeavyRain.png"
import LightRain from "../images/LightRain.png"
import Showers from "../images/Shower.png"
import HeavyCloud from "../images/HeavyCloud.png"
import LightCLoud from "../images/LightCloud.png"

export default function imageMap(condition){
    if (condition === "Light Cloud") return LightCLoud;
    if (condition === "Snow") return Snow;
    if (condition === "Hail") return Hail;
    if (condition === "Sleet") return Sleet;
    if (condition === "Clear") return Clear;
    if (condition === "Showers") return Showers;
    if (condition === "Heavy Cloud") return HeavyCloud;
    if (condition === "Light Rain")return LightRain;
    if (condition === "Heavy Rain") return HeavyRain;
    if (condition === "Thunderstorm") return ThunderStorm;

}