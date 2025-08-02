import type { ScorecardProps } from "../../../types/types";

export const Scorecard = ({ response }: ScorecardProps) => {
  return (
    <div className="w-full max-w-xl p-6 bg-white shadow-md flex flex-col items-start gap-4 border border-gray-200">
      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
        Resume Score
      </div>
      <div className="text-5xl font-bold text-black/90">
        {response.score} / 100
      </div>
      <p className="text-sm text-gray-500">
        This score reflects how well your resume matches the job description. A
        higher score indicates better alignment with experience, skills, and
        requirements.
      </p>

      <div className="mt-6 text-sm font-semibold text-gray-600 uppercase tracking-wider">
        Reason for Score
      </div>
      <div className="w-full bg-gray-100 rounded-xl p-4 text-gray-800 text-base leading-relaxed">
        {response.reason}
      </div>
    </div>
  );
};
