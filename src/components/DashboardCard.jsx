import { FaUsers } from "react-icons/fa";

export default function DashboardCard({
  title,
  value,
  icon = <FaUsers />,
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-400">{title}</h3>

          <p className="text-4xl font-bold mt-2">
            {value}
          </p>
        </div>

        <div className="text-4xl text-cyan-400">
          {icon}
        </div>
      </div>
    </div>
  );
}