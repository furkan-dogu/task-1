import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
