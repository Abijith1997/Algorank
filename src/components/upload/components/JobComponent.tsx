import { UrlComponent } from "./UrlComponent";
import { OrComponent } from "./OrComponent";
import { JobDescription } from "./JobDescription";
import type { JobComponentProps } from "../../../types/types";

export const JobComponent = ({
  setDescription,
  description,
}: JobComponentProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-5 px-10 gap-5 w-full">
      <UrlComponent setDescription={setDescription} />
      <OrComponent />
      <JobDescription
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};
