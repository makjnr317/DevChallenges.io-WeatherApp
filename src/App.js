import {useState, useEffect} from "react"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import LocationTab from "./components/LocationTab"
import "./index.css"

function App() {
	const [location, setlocation] = useState("1591691")
	const [data, setdata] = useState()

	useEffect(() => {
		fetch(`https://www.metaweather.com/api/location/${location}`)
		.then(res => res.json())
		.then(res => setdata(res))
	}, [location])

	if (data === undefined){
		return(
			<div></div>
		)
	}

	return (
		<>
			<LocationTab/>
			{/*<Sidebar location={data.title} time={data.consolidated_weather[0].applicable_date} status={data.consolidated_weather[0].weather_state_name} temp={data.consolidated_weather[0].the_temp}/>*/}
			<Main data={data.consolidated_weather}/>
		</>
	);
}

export default App;
