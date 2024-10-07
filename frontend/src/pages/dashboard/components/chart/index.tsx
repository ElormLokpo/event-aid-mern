import { Button } from "@/components/button";
import { useState } from "react";
import Chart from "react-apexcharts";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineTableChart } from "react-icons/md";

export const ChartSection = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-semibold mb-2">Summary Statistics</p>

                <div className="flex items-center gap-1">
                    <Button handler={() => { }} content="Table" custom_style="text-[0.7rem] flex gap-1 items-center underline" icon={<MdOutlineTableChart />} />

                    <Button handler={() => { }} content="Statistics" custom_style="text-[0.7rem] flex gap-1 items-center underline" icon={<IoStatsChartOutline />} />
                </div>
            </div>

            <div className="bg-stone-800 rounded-lg p-2">
                <ChartComponent />
            </div>
        </div>
    )
}


const ChartComponent = () => {
    const [chatOptions, setChatOptions] = useState({
        options: {
            chart: {
                type: "area",
                height: 350,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                axisBorder: {
                    show: true,
                    color: "#44403c",
                },
                labels: {
                    style: {
                        colors: "#d6d3d1",
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#d6d3d1",
                    },
                },
            },
            stroke: {
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            grid: {
                show: false,
            },
            colors: ["#84cc16"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#FFC300", "#06b6d4"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 0.8,
                    opacityTo: 0.3,
                    stops: [0, 50, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
        },
        series: [
            {
                name: "Series 1",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
    });


    return (
        <div className="w-full h-[24rem]">
            <Chart
                options={chatOptions.options}
                series={chatOptions.series}
                type="area"
                width="100%"
                height="100%"
            />
        </div>
    )
}