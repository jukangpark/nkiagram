import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

const Home = () => {
  return (
    <div>
      <Header />
      <LeftSideBar />
      <Feed />
      <RightSideBar />
    </div>
  );
};

export default Home;
