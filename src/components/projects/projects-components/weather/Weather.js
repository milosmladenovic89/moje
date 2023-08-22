import React, { useEffect, useRef, useState } from 'react'
import Axios from 'axios'
import { FadeLoader } from 'react-spinners'
import { DateTime } from 'luxon'



export default function Weather({mouseLeave}) {
    const [location, setLocation] = useState("")
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)
    const [long, setLong] = useState(0)
    const [lat, setLat] = useState(0)
    const [zone, setZone] = useState("")
    const [second, setSecond] = useState(0)
    const [err, setErr] = useState(false)
    const imageRef = useRef("weather-container")
    const inputRef = useRef()
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=58925ea5432c3734fe31349c1c186141&units=metric`


    const ts = require('@mapbox/timespace');

    const timestamp = Date.now();
    const point = [`${long}`, `${lat}`];
    const time = ts.getFuzzyLocalTimeFromPoint(timestamp, point);


    useEffect(() => {
        time ? setZone(time._z.name) : setZone("")
        data ? setSecond(data.dt) : setSecond(0)
    }, [time, data, second, zone])


    const formatToLocalTime = (sec, zone, format = "cccc , dd LLL yyyy'  | Local time: 'hh:mm a") => DateTime.fromSeconds(sec).setZone(zone).toFormat(format)



    function searchCity(e) {
        if (e.key === "Enter") {
            setLoader(true)
            Axios.get(url).then((response) => {
                setData(response.data)
                setLong(response.data.coord.lon)
                setLat(response.data.coord.lat)
            }).then(() => {
                setLoader(false)
                setLocation("")
            }).catch((err) => {
                if (err) {
                    setErr(true)
                }
            })
        }
    }

    useEffect(() => {
        inputRef.current.focus()
      
    }, [])

    useEffect(() => {
        //clear
        if (data.main && data.weather ? data.main.temp.toFixed() >= 25 && data.weather[0].main === "Clear" : null) {
            imageRef.current = "weather-overlay-summer-sun"
        } else if (data.main && data.weather ? (data.main.temp.toFixed() <= 24 && data.main.temp.toFixed() >= 11) && data.weather[0].main === "Clear" : null) {
            imageRef.current = "weather-overlay-summer-sun2"
        }
        else if (data.main && data.weather ? data.main.temp.toFixed() <= 10 && data.weather[0].main === "Clear" : null) {
            imageRef.current = "weather-overlay-winter-sun"
        }

        //clouds
        else if (data.main && data.weather ? data.main.temp.toFixed() >= 15 && data.weather[0].main === "Clouds" : null) {
            imageRef.current = "weather-overlay-summer-clouds"
        } else if (data.main && data.weather ? data.main.temp.toFixed() <= 14 && data.weather[0].main === "Clouds" : null) {
            imageRef.current = "weather-overlay-summer-clouds-cold"
        }
        //rain
        else if (data.weather ? data.weather[0].main === "Rain" : null) {
            imageRef.current = "weather-overlay-summer-rain"
        } else if (data.weather ? data.weather[0].main === "Drizzle" : null) {
            imageRef.current = "weather-overlay-summer-rain"
        }
        //snow
        else if (data.weather ? data.weather[0].main === "Snow" : null) {
            imageRef.current = "weather-overlay-winter-snow"
        }
        ///Thunderstorm
        else if (data.weather ? data.weather[0].main === "Thunderstorm" : null) {
            imageRef.current = "weather-overlay-winter-thunderstorm"
        }
        /// fog
        else if (data.weather ? data.weather[0].main === "Fog" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Mist" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Smoke" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Sand" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Haze" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Dust" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Tornado" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Squall" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        } else if (data.weather ? data.weather[0].main === "Ash" : null) {
            imageRef.current = "weather-overlay-winter-fog"
        }


    }, [data.main, data.weather])

   
    return (



        <div className={`${imageRef.current}`} onMouseEnter={mouseLeave}>

            <div className='weather-overlay'>

                <input ref={inputRef} className='weather-input' value={location} onKeyDown={searchCity}
                    onChange={(e) => { setLocation(e.target.value) }} type={"text"} placeholder="Enter city name.." />

                {err && loader && <p>City not found.</p>}
                {!loader ? <div>
                    <h1>{data.name}</h1>

                    <p>{second ? formatToLocalTime(second, zone) : null}</p>
                    {data.weather ? <div>
                        <img alt="loading weather..." src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                        <p>{data.weather[0].description}</p>
                    </div>
                        : null}
                    <div className='weather-temp'>
                        {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
                        {data.weather ? <p className='vertical-text-weather'>{data.weather[0].main}</p> : null}
                    </div>

                    {data.name && <div className='weather-feels-like'>

                        {data.main ? <p>{data.main.feels_like.toFixed()}°C<br />
                            <span>Feels like </span>
                        </p> : null}

                        {data.wind ? <p>{data.wind.speed.toFixed()} km/h<br />
                            <span>Wind speed </span>
                        </p> : null}

                        {data.main ? <p>{data.main.humidity.toFixed()}%<br />
                            <span>Humidity</span>
                        </p> : null}

                    </div>}
                </div> : <div className='weather-loader'>
                    <FadeLoader color="#36d7b7" />
                </div>}

            </div>
        </div>

    )



}




































