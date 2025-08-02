interface PromptBuilderProps {
  pdfText: string;
  jobText: string;
}

export const PromptBuilder = ({ pdfText, jobText }: PromptBuilderProps) => {
  return `
You are an expert recruiter. Compare the following resume and job description, and provide a compatibility score out of 100 with a one-line justification.
Resume:
${pdfText}
Job Description:
${jobText}
Respond as a json object:
{
Score: <number>
Reason: <short reason>}
    `;
};
