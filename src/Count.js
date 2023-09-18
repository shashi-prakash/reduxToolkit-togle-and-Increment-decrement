import { increment, decrease } from "./redux/countSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const value = useSelector((state) => state.icrement);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{value.count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {value.count > 0 ? (
        <button onClick={() => dispatch(decrease())}>decrease</button>
      ) : (
        <button onClick={() => dispatch(decrease())} disabled>
          decrease
        </button>
      )}
    </>
  );
}
