import { navigationArray } from "@/constants";

const Navigation = () => {
  return (
    <ul className="fixed left-0 top-0 h-full w-[335px] p-4 border-r border-gray-600">
      <div className="w-[311px] h-[73px] mb-[19px] pt-[25px] pr-[12px] pb-[16px] pl-[12px] text-[25px] font-black">
        Nkiagram
      </div>
      {navigationArray.map((item) => (
        <li
          key={item}
          className="w-[311px] h-[48px] m-[4px_0] p-[12px] text-[16px] font-bold"
        >
          {item}
        </li>
      ))}
      <div className="w-[311px] h-[48px] m-[4px_0] p-[12px] text-[16px] font-bold">
        Profile
      </div>
    </ul>
  );
};

export default Navigation;
