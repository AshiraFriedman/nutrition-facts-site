export default function Facts(props) {
  const foodArr = props.food.items;
  const markup = !foodArr
    ? ""
    : foodArr.map((item) => (
        <div className="col-lg-3">
          <ul className="list-group">
            <h3>{item.name}</h3>
            <div className="serving">
              Nutrition for serving of {item.serving_size_g} gr
            </div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Calories
              <span className="badge">{item.calories}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total Fat
              <span className="badge">{item.fat_total_g} gr</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Saturated Fat
              <span className="badge">{item.fat_saturated_g} gr</span>
            </li>{" "}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Protein
              <span className="badge">{item.protein_g} gr</span>
            </li>{" "}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Carbohydrates
              <span className="badge">{item.carbohydrates_total_g} grams</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sugar
              <span className="badge">{item.sugar_g} gr</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Fiber
              <span className="badge">{item.fiber_g} gr</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cholesterol
              <span className="badge">{item.cholesterol_mg} mg</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Potassium
              <span className="badge">{item.potassium_mg} mg</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sodium
              <span className="badge">{item.sodium_mg} mg</span>
            </li>
          </ul>
        </div>
      ));

  return <div className="row">{markup}</div>;
}
