import { useEffect, useState } from "react";
import API from "../services/api";

import VisitorsChart from "../charts/VisitorsChart";
import DeviceChart from "../charts/DeviceChart";
import CountryChart from "../charts/CountryChart";
import BrowserChart from "../charts/BrowserChart";


function Dashboard() {

  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);


  useEffect(() => {

    Promise.all([
      API.get("/analytics/stats"),
      API.get("/analytics/daily"),
    ])
      .then(([statsRes, chartRes]) => {

        setStats(statsRes.data);
        setChartData(chartRes.data);

      })
      .catch(console.error);

  }, []);



  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }



  return (

    <div className="min-h-screen bg-slate-950 text-white p-8">


      <div className="flex justify-between items-center mb-8">

  <h1 className="text-4xl font-bold">
    📊 Portfolio Analytics
  </h1>


  <button
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }}
    className="bg-red-500 px-5 py-2 rounded-lg font-bold"
  >
    Logout
  </button>

</div>



      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">


        <div className="bg-slate-800 rounded-xl p-6">
          <p>Total Visitors</p>

          <h2 className="text-5xl font-bold">
            {stats.totalVisitors}
          </h2>
        </div>



        <div className="bg-slate-800 rounded-xl p-6">
          <p>Today's Visitors</p>

          <h2 className="text-5xl font-bold">
            {stats.todayVisitors}
          </h2>
        </div>



        <div className="bg-slate-800 rounded-xl p-6">
          <p>Countries</p>

          <h2 className="text-5xl font-bold">
            {stats.countries.length}
          </h2>
        </div>



        <div className="bg-slate-800 rounded-xl p-6">
          <p>Browsers</p>

          <h2 className="text-5xl font-bold">
            {stats.browsers.length}
          </h2>
        </div>



        <div className="bg-slate-800 rounded-xl p-6">
          <p>Devices</p>

          <h2 className="text-5xl font-bold">
            {stats.devices.length}
          </h2>
        </div>



        <div className="bg-slate-800 rounded-xl p-6">

          <p>Top Source</p>

          <h2 className="text-xl font-bold mt-3 break-all">
            {
              stats.topReferrer?.[0]?.referrer || "Direct"
            }
          </h2>

        </div>


      </div>





      {/* Visitor Line Chart */}

      <div className="mt-10">

        <VisitorsChart data={chartData} />

      </div>





      {/* Device + Browser */}

      <div className="mt-10 grid md:grid-cols-2 gap-6">


        <DeviceChart 
          data={stats.devices}
        />


        <BrowserChart 
          data={stats.browsers}
        />


      </div>





      {/* Country Chart */}

      <div className="mt-10">

        <CountryChart 
          data={stats.countries}
        />

      </div>





      {/* Countries List */}

      <div className="mt-10 bg-slate-800 rounded-xl p-6">


        <h2 className="text-2xl font-bold mb-5">
          🌍 Countries
        </h2>



        {
          stats.countries.map((country)=>(
            
            <div
              key={country.country}
              className="flex justify-between py-2 border-b border-slate-700"
            >

              <span>
                {country.country}
              </span>


              <span>
                {country._count.country}
              </span>


            </div>

          ))
        }


      </div>





      {/* Recent Visitors */}

      <div className="mt-10 bg-slate-800 rounded-xl p-6">


        <h2 className="text-2xl font-bold mb-5">
          🧾 Recent Visitors
        </h2>



        <table className="w-full">


          <thead>

            <tr className="text-left">

              <th>Country</th>
              <th>Browser</th>
              <th>Device</th>
              <th>Time</th>

            </tr>

          </thead>




          <tbody>


          {
            stats.recentVisitors.map((visitor)=>(

              <tr key={visitor.id}>


                <td>
                  {visitor.country}
                </td>


                <td>
                  {visitor.browser}
                </td>


                <td>
                  {visitor.device}
                </td>


                <td>
                  {
                    new Date(visitor.createdAt)
                    .toLocaleString()
                  }
                </td>


              </tr>

            ))
          }


          </tbody>


        </table>


      </div>



    </div>

  );

}


export default Dashboard;