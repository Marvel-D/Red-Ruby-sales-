import { Breadcrumb, Dropdown } from "../shared";
import { FaBell } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full flex flex-col justify-between h-[70px] py-1 px-2 border border-black bg-white text-black">
      <section className="flex justify-between items-center">
        <p className="">
          <span className="font-bold text-xl">Welcome</span> to Blue Ruby
        </p>
        <div className="flex justify-between items-center gap-3">
          <Dropdown />
          <FaBell className="text-blue-600 " />
          <div className="h-8 w-9 bg-gray-500"></div>
        </div>
      </section>
      <section>
        <Breadcrumb />
      </section>
    </div>
  );
};

export { Topbar };
