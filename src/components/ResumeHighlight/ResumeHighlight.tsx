import type { pdfPointsProps } from "../../types/types";

export const ResumeHighlight = ({
  pdfInsights,
}: {
  pdfInsights: pdfPointsProps | null;
}) => {
  return (
    <div className="">
      {pdfInsights && (
        <>
          {/* Core Competencies */}
          <div className="">
            <p>Core Competencies:</p>
            {Array.isArray(pdfInsights.coreCompetencies) &&
              pdfInsights.coreCompetencies.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>

          {/* Skills */}
          <div className="">
            <p>Skills:</p>
            {Array.isArray(pdfInsights.skills) &&
              pdfInsights.skills.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>

          {/* Recommended Roles */}
          <div className="">
            <p>Recommended Roles:</p>
            {Array.isArray(pdfInsights.recommendedRoles) &&
              pdfInsights.recommendedRoles.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>

          {/* Strengths */}
          <div className="">
            <p>Strengths:</p>
            {Array.isArray(pdfInsights.strengths) &&
              pdfInsights.strengths.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
