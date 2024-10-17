import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../redux/recipeSlice";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(updateField({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <form>
        <label>
          Mąka:
          <input
            type="radio"
            name="flour"
            value="1"
            checked={formData.buildingType === "1"}
            onChange={handleChange}
          />
          1 kg
          <input
            type="radio"
            name="flour"
            value="0,5"
            checked={formData.buildingType === "0,5"}
            onChange={handleChange}
          />
          0,5 kg
        </label>
      </form>
    </>
  );
};

export default Form;
