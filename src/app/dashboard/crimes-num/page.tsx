"use client";

import React,{useState} from 'react';
import { CrimeData } from './CrimeTypesJson';
import BarArea from "./(components)/BarArea";

const CrimesNum = () => {
    const [chartData,setChartData]=useState({
        labels:CrimeData.map((data)=>data.types),
        datasets:[
            {
                label:"Crimes Ration",
                data:CrimeData.map((data)=>data.count)
            },  
        ]
    })

    console.log(chartData)

    return (
        <>
            <BarArea chartData={chartData}></BarArea>
        </>
    )
}

export default CrimesNum;
