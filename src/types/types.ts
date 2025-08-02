export interface handleUploadProps {
  setPdfText: (text: string) => void;
  e: React.ChangeEvent<HTMLInputElement>;
  setFileName: (value: string) => void;
  setPdfInsights: (value: pdfPointsProps) => void;
}

export interface extractFromPdfProps {
  file: File;
  setPdfInsights: (value: pdfPointsProps) => void;
}

export interface UploadProps {
  setPdfText: (text: string) => void;
  setDescription: (value: string) => void;
  description: string;
  setPdfInsights: (value: pdfPointsProps) => void;
}

export interface JobComponentProps {
  description: string;
  setDescription: (value: string) => void;
}

export interface pdfPointsGeneratorProps {
  pdfText: string;
  setPdfInsights: (value: pdfPointsProps) => void;
}

export interface SendButtonProps {
  pdfText: string;
  description: string;
  setResponseGenerated: (value: boolean) => void;
  setResponse: (value: promptResponseProps) => void;
}

export interface GeminiCompareProps {
  pdfText: string;
  url?: string;
  description?: string;
  setLoading: (value: boolean) => void;
  setResponseGenerated: (value: boolean) => void;
  setResponse: (value: promptResponseProps) => void;
}

export interface promptResponseProps {
  score: number;
  reason: string;
}

export interface ResumeUploadProps {
  setPdfText: (text: string) => void;
  setPdfInsights: (value: pdfPointsProps) => void;
}

export interface OutputProps {
  response: promptResponseProps;
  pdfInsights: pdfPointsProps | null;
}

export interface InputProps {
  setPdfText: (text: string) => void;
  setDescription: (value: string) => void;
  description: string;
  pdfText: string;
  setResponseGenerated: (value: boolean) => void;
  setResponse: (value: promptResponseProps) => void;
  setPdfInsights: (value: pdfPointsProps) => void;
}

export interface ScorecardProps {
  response: promptResponseProps;
}

export interface pdfPointsProps {
  skills: string[];
  strengths: string[];
  coreCompetencies: string[];
  recommendedRoles: string[];
}
