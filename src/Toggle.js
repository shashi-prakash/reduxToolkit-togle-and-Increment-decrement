import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "./redux/toggleSlice";
export default function Toggle(props) {
  const isActive = useSelector((state) => state.toggle);

  const dispatch = useDispatch();
  return (
    <div style={props.style.bgStyle}>
      <button onClick={() => dispatch(toggleSwitch())} style={props.style.buttonStyle}>
        Click
      </button>
      {isActive.active === true ? <p>Active</p> : <p>Not Active</p>}
    </div>
  );
}
