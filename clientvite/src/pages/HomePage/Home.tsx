import GradientText from "../../components/GradientText";
import add from "../../assets/Background/add.png";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { ComparisonSection } from "./components/ComparisonSection";
import Footer from "../../components/Footer";
import RemoveImage from "../RemovePage/RemoveImage";
import SideBar from "../../components/SideBar";
import SideBar2 from "../../components/Siderbar2";
import SideBar3 from "../../components/SideBar3";
export const Home = () => {
  return (
    <div className="w-full">

        <Navbar />
        <Background />
    <div className="flex items-center pt-32">
      <div className="grow">
        <GradientText />
      </div>
      <div className="w-2/5 rounded-3xl">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={add}
            alt="Add"
            className="shadow-2xl rounded-3xl shadow-violet-800 hover:scale-110 duration-500"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
     
    </div>
     <ComparisonSection />
     <RemoveImage/>
     <SideBar/>
     <SideBar2/>
     <SideBar3/>
     <Footer/>
    </div>
  );
};
