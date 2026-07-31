import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

export default function BrowserChart({ data }) {

  const chartData = data.map((item) => ({
    name: item.browser || "Unknown",
    value: item._count.browser,
  }));

  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-bold mb-4">
        🌐 Browsers
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((item, index) => (
              <Cell key={index} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}