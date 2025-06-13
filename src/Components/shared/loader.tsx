import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="h-dvh">
      <AiOutlineLoading className="text-primary relative left-1/2 text-5xl transform -translate-x-1/2 animate-spin  top-80" />
    </div>
  );
};

export default Loader;
