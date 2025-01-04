
interface Stat {
  label: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="flex justify-between mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-gray-100 font-bold">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;