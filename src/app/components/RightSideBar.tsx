import MiniProfile from "./MiniProfile";
import SuggestedUserList from "./SuggestedUsersList";

const RightSideBar = () => {
  return (
    <div className="w-[319px] h-[548px] fixed top-36 right-0">
      <MiniProfile />
      <SuggestedUserList />
    </div>
  );
};

export default RightSideBar;
