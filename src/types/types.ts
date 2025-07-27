export interface handleUploadProps {
  setPdfText: (text: string) => void;
  e: React.ChangeEvent<HTMLInputElement>;
  setFileName: (value: string) => void;
}

export interface UploadProps {
  setPdfText: (text: string) => void;
  url: string;
  setUrl: (value: string) => void;
  setDescription: (value: string) => void;
  description: string;
}

export interface JobComponentProps {
  setUrl: (value: string) => void;
  url: string;
  description: string;
  setDescription: (value: string) => void;
}

export interface SendButtonProps {
  url: string;
  pdfText: string;
  description: string;
  setResponseGenerated: (value: boolean) => void;
  responseGenerated: boolean;
}

export interface GeminiCompareProps {
  pdfText: string;
  url?: string;
  description?: string;
  setLoading: (value: boolean) => void;
  setResponseGenerated: (value: boolean) => void;
}
