export const OrComponent = () => {
  return (
    <div className="relative w-[90%] my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-[45%] border-t border-gray-500" />
      </div>
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-[45%] border-t border-gray-500" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2  text-lg text-black/70 font-bold">or</span>
      </div>
    </div>
  );
};
