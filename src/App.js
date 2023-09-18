import Toggle from "./Toggle";
import Count from "./Count";
import { useSelector } from "react-redux";
export default function App() {
  const isActive = useSelector((state) => state.toggle);
  const buttonStyle = {
    backgroundColor: `${isActive.active === true ? "black" : "white"}`,
    color: `${isActive.active === true ? "white" : "black"}`,
    border: `${
      isActive.active === true ? "1px solid white" : "1px solid black"
    }`,
  };
  const bgStyle = {
    backgroundColor: `${isActive.active === true ? "red" : "white"}`,
    color: `${isActive.active === true ? "white" : "black"}`,
    padding: "4px 0 40px 4px",
  };
  return (
    <div style={bgStyle}>
      <Toggle style={{ bgStyle, buttonStyle }} />
      <Count />
    </div>
  );
}
