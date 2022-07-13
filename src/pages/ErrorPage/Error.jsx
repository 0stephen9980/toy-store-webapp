import { BiError } from "react-icons/bi";
function Error() {
  return (
    <div className="flex flex-row text-2xl font-bold cursor-pointer">
      <span className="mr-4 relative top-[5px]">
        <BiError />
      </span>
      <span>404 error</span>
    </div>
  );
}

export default Error;
