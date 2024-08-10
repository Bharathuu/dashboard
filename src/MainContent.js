import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend,AreaChart, Area } from 'recharts';
import './MainContent.css'

const MainContent = () => {
    // Sample data for charts
    const data = [
        { name: '10', school: 30, college: 20 },
        { name: '11', school: 20, college: 25 },
        // Add more data as required
    ];

    const pieData = [
        { name: 'School', value: 400 },
        { name: 'College', value: 300 },
    ];

    return (
        <main className="main-content">
            <div className="overview">
                <h2>Overview</h2>
                <div className="stats" >
                    
                    <div className='light-blue'>
                        <div><i className="bi bi-building icon-large"></i></div>
                        <div><h1>Total School</h1>
                        <h1 className='head'>145</h1>
                        </div>
                        
                    </div>
                    <div className='light-grey'>
                        <div><i className="bi bi-people icon-large"></i></div>
                        <div>
                        <h1>Total Staffs</h1>
                        <h1 className='head'>1265</h1>
                        </div>
                     </div>
                    <div className='light-pink'>
                        <div><i className="bi bi-person icon-large"></i></div>
                        <div>
                        <h1 >Total Students</h1>
                        <h1 className='head'> 21571</h1>
                        </div>
                    </div>
                    <div className='light-green'>
                        <div><i className="bi bi-people-fill icon-large"></i></div>
                        <div>
                        <h1>Total Parents</h1>
                        <h1 className='head'>25245</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="charts">
             <div className='bar-chart'>
                <h1>School</h1>
                <p>...</p>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="school" fill="#8884d8" />
                    <Bar dataKey="college" fill="#82ca9d" />
                </BarChart>
             </div>
             <div className='bar-chart'>
                <h1>Institution Inspection</h1>
                <p>Track institution inspections</p>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="school" fill="#8884d8" />
                    <Bar dataKey="college" fill="#82ca9d" />
                </BarChart>
             </div>
             <div className='bar-chart'>
                <h1>Academic report</h1>
                <p>Track institution inspections</p>

                <PieChart width={400} height={400}>
                    <Pie
                        data={pieData}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    />
                    <Tooltip />
                    
                </PieChart>
                
             </div>
             <div className='bar-chart'>
                <h1>Academics and Scores</h1>

                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="school" stroke="#8884d8" />
                    <Line type="monotone" dataKey="college" stroke="#82ca9d" />
                </LineChart>
             </div>
             <div className='bar-chart'>
             <BarChart
                    width={500}
                    height={300}
                    data={data}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="school" fill="#8884d8" />
                    <Bar dataKey="college" fill="#82ca9d" />
                </BarChart>
             </div>
             <div className='bar-chart'>
                <h1>Assesment and examination</h1>
                <p>Track Institution Inspection</p>
                <AreaChart width={500} height={300} data={data}>
                    <defs>
                        <linearGradient id="colorSchool" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCollege" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="school" stroke="#8884d8" fillOpacity={1} fill="url(#colorSchool)" />
                    <Area type="monotone" dataKey="college" stroke="#82ca9d" fillOpacity={1} fill="url(#colorCollege)" />
                </AreaChart>
                
             </div>
             <div className='bar-chart'>
                <h1>Institution list</h1>
                <div className='instuition-list'>
                 <div>
                    <p>Samantha William</p>
                    <p>Reena</p>
                    <p>John</p>
                    <p>Janathan</p>
                    <p>Ramya</p>
                 </div>
                 <div>
                    <p>ID 123456789</p>
                    <p>ID 12345456</p>
                    <p>ID 123458745</p>
                    <p>ID 123452389</p>
                    <p>ID 123459087</p>
                 </div>
                 <div>
                    <p>2300</p>
                    <p>1900</p>
                    <p>200</p>
                    <p>1300</p>
                    <p>200</p>
                 </div>
                </div>
             </div>
            </div>
        </main>
  );
};

export default MainContent;
