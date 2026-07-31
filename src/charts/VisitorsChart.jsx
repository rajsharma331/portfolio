import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function VisitorsChart({ data }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-bold mb-4">
        Visitors
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#06b6d4"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}