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
import { publicRequest } from "../../requestMethods";
import { useEffect } from "react";

function CustomTooltip({ active, payload, label }) {
    if (active) {
        return (
            <div className="tooltip">
                <h4>{label}</h4>
                {/* <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4> */}
                <p>%{payload[0].value.toFixed(2)}</p>
            </div>
        );
    }
    return null;
}

function Chart(props) {

    const currentDate = new Date();
    const nextDate = new Date();
    nextDate.setDate(currentDate.getDate() - 1);

    const [initialValue, setInitialValue] = useState(currentDate);
    const [finalValue, setFinalValue] = useState(nextDate);

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            let date = `${initialValue.getUTCFullYear()}-${("0" + (initialValue.getMonth() + 1)).slice(-2)}-${initialValue.getUTCDate()}`;
            let date2 = `${finalValue.getUTCFullYear()}-${("0" + (finalValue.getMonth() + 1)).slice(-2)}-${finalValue.getUTCDate()}`;
            let finaldate = `${date}T${initialValue.getHours()}:${initialValue.getMinutes()}`;
            let finaldate2 = `${date2}T${finalValue.getHours()}:${finalValue.getMinutes()}`
            let fulldate = `${finaldate}|${finaldate2}`
            const res = await publicRequest.get(`/${props.type}/${fulldate}/`)
            setData(res.data)
            console.log(res.data)

        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeInitial = (newValue) => {
        setInitialValue(newValue);
    };
    const handleChangeFinal = (newValue) => {
        setFinalValue(newValue);
    };

    useEffect(() => {
        async function fetchData() {
            const res = await publicRequest.get(`/${props.type}/2022-07-16T17:56|2022-07-17T12:50/`)
            setData(res.data)
        }
        fetchData();
    }, [setData, props.type]);

    return (
        <div>
            <button onClick={getData}>REFRESH</button>
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
                            const date = parseISO(str);
                            // if (date.getDate() % 4 === 0) {
                            //     return format(date, "MMM, d");
                            // }
                            // return "";
                            const text =  String(str).split(' ')[1]
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
                    {/* <Tooltip content={<CustomTooltip />} /> */}
                    <Tooltip />
                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>

            <div className="containerDates">
                <div className="containerDate">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Initial Date&Time"
                            value={initialValue}
                            onChange={handleChangeInitial}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className="containerDate">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Final Date&Time"
                            value={finalValue}
                            onChange={handleChangeFinal}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>

        </div>
    )
}

export default Chart