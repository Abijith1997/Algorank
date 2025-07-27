import { UrlComponent } from "./UrlComponent";
import { OrComponent } from "./OrComponent";
import { JobDescription } from "./JobDescription";
import type { JobComponentProps } from "../../../types/types";

export const JobComponent = ({
  setUrl,
  url,
  setDescription,
  description,
}: JobComponentProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-5 px-10 gap-5 w-full">
      <UrlComponent url={url} setUrl={setUrl} />
      <OrComponent />
      <JobDescription
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};
