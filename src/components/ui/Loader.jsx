import { ClipLoader } from "react-spinners";

const Loader = ({
  loading = true,
  size = 50,
  color = "#36d7b7",
  message = "",
}) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <ClipLoader size={size} color={color} />
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
};

export default Loader;
