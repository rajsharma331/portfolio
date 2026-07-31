import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function DeviceChart({ data }) {

  const chartData = data.map((item) => ({
    name: item.device,
    value: item._count.device,
  }));

  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-bold mb-4">
        📱 Devices
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
            {chartData.map((entry, index) => (
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