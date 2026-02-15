import { achievements } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Achievements = () => (
  <div className="w-full padding-x-lg mt-20">
    <TitleHeader title="Achievements" sub="🏆 Milestones & Recognition" />
    <div className="mx-auto mt-10">
      <ul className="list-disc list-inside space-y-4 text-white-50 text-xl font-medium">
        {achievements.map((achievement, index) => (
          <li key={index} className="hover:text-white transition-colors duration-300">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Achievements;
