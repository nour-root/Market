import { useRouteError, Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError() as {
    statusText?: string;
    message?: string;
  };
  console.error(error);

  return (
    <div
      id="error-page"
      className="text-head flex flex-col h-dvh justify-center items-center"
    >
      <h1>Oops!</h1>
      <p className="text-[100px] text-primary font-bold">404</p>
      <p className="text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>
        <button className="p-2 bg-head text-white rounded-lg mt-5">Back</button>
      </Link>
    </div>
  );
}
