import { format, parseISO } from "date-fns";
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
} from "recharts";
import './chart.css'
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from "react";
import { useEffect } from "react";
import './chart.css'
import { useSelector } from "react-redux";
import axios from "axios";



function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        let date = parseISO(label)
        return (
            <div className="tooltip">
                <h4>{format(date, "eeee, d MMM, yyyy")}</h4>
                <h4>{format(date, "HH:mm:ss")}</h4>
                <h4>{`Usage: ${payload[0]?.payload?.value}%`}</h4>
                {/* <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4> */}
                {/* <p>%{payload[0].value.toFixed(2)}</p> */}
            </div>
        );
    }
    return null;
}

function Chart(props) {

    const { ip } = useSelector(state => state.user.currentUser)

    const [custom, setCustom] = useState(false);

    const [initialValue, setInitialValue] = useState();
    const [finalValue, setFinalValue] = useState();

    const [data, setData] = useState([]);

    const getData = async (e, initialOrFinal) => {
        try {
            let inicial = initialOrFinal ? e : initialValue;
            let final = initialOrFinal? finalValue : e;
            let date = `${format(inicial, "yyyy-MM-dd")}T${format(inicial, "HH:mm")}`;
            let date2 = `${format(final, "yyyy-MM-dd")}T${format(final, "HH:mm")}`;
            let fulldate = `${date}|${date2}`
            const res = await axios.get(`http://${ip}:8000/api/${props.type}/${fulldate}/`)
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    const handleCustom = async () => {
        setCustom(true)
        let currentDate = new Date();
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() - 1)
        setInitialValue(nextDate)
        setFinalValue(currentDate)
    }

    const handle1Day = async () => {
        try {
            setCustom(false)
            let currentDate = new Date();
            let nextDate = new Date();
            nextDate.setDate(nextDate.getDate() - 1)

            let date = `${format(currentDate, "yyyy-MM-dd")}T${format(currentDate, "HH:mm")}`;
            let date2 = `${format(nextDate, "yyyy-MM-dd")}T${format(nextDate, "HH:mm")}`;
            let fulldate = `${date}|${date2}`
            console.log(`http://${ip}:8000/api/${props.type}/${fulldate}/`)
            const res = await axios.get(`http://${ip}:8000/api/${props.type}/${fulldate}/`)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }

    }
    const handle1Month = async () => {
        try {
            setCustom(false)
            let currentDate = new Date();
            let nextDate = new Date();
            nextDate.setMonth(nextDate.getMonth() - 1)

            let date = `${format(currentDate, "yyyy-MM-dd")}T${format(currentDate, "HH:mm")}`;
            let date2 = `${format(nextDate, "yyyy-MM-dd")}T${format(nextDate, "HH:mm")}`;
            let fulldate = `${date2}|${date}`
            // const res = await publicRequest.get(`/${props.type}/${fulldate}/`)
            const res = await axios.get(`http://${ip}:8000/api/${props.type}/${fulldate}/`)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        async function fetchData() {
            // const res = await publicRequest.get(`/${props.type}/2022-07-16T17:56|2022-07-17T12:50/`)
            const res = await axios.get(`http://${ip}:8000/api/${props.type}/2022-07-16T17:56|2022-07-17T12:50/`)
            setData(res.data)
        }
        fetchData();
    }, [setData, props.type, ip]);

    return (
        <div>
            <div className="containerButtonsChart">
                <div className="multi-button">
                    <button onClick={handle1Day}>1 Day</button>
                    <button onClick={handle1Month}>1 Month</button>
                    <button onClick={handleCustom}>Custom Interval</button>
                </div>

            </div>
            {
                custom &&
                <div className="containerDates" >
                    <div className="containerDate">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Initial Date&Time"
                                value={initialValue}
                                // onChange={handleChangeInitial}
                                onChange={(e) => { setInitialValue(e) }}
                                onAccept={(e) => getData(e, true)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="containerDate">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Final Date&Time"
                                value={finalValue}
                                // onChange={handleChangeFinal}
                                onChange={(e) => { setFinalValue(e) }}
                                onAccept={(e) => getData(e, false)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>

            }

            <ResponsiveContainer width="100%" height={700}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#e25a24" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#e25a24" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <Area dataKey="value" stroke="#e25a24" fill="url(#color)" />

                    <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(str) => {
                            // const date = parseISO(str);
                            // if (date.getDate() % 4 === 0) {
                            //     return format(date, "MMM, d");
                            // }
                            // return "";
                            const text = String(str).split(' ')[1]
                            return text
                        }}
                    />

                    <YAxis
                        datakey="value"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        tickFormatter={(number) => `${number}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Tooltip /> */}
                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>



        </div>
    )
}

export default Chart