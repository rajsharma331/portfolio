import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function CountryChart({ data }) {

  const chartData = data.map((item) => ({
    country: item.country || "Unknown",
    visitors: item._count.country,
  }));

  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-bold mb-4">
        🌍 Visitors by Country
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="country" />

          <YAxis />

          <Tooltip />

          <Bar 
            dataKey="visitors"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}