export default function Facts(props) {
  const foodArr = props.food.items;
  const markup = !foodArr
    ? ""
    : foodArr.map((item) => (
        <div className="col-lg-4">
          <ul className="list-group">
            <h3>{item.name}</h3>
            <h4>Serving size: {item.serving_size_g} gr</h4>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Calories
              <span className="badge bg-primary rounded-pill">
                {item.calories}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total Fat
              <span className="badge bg-primary rounded-pill">
                {item.fat_total_g} gr
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Saturated Fat
              <span className="badge bg-primary rounded-pill">
                {item.fat_saturated_g} gr
              </span>
            </li>{" "}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Protein
              <span className="badge bg-primary rounded-pill">
                {item.protein_g} gr
              </span>
            </li>{" "}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Carbohydrates
              <span className="badge bg-primary rounded-pill">
                {item.carbohydrates_total_g} grams
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sugar
              <span className="badge bg-primary rounded-pill">
                {item.sugar_g} gr
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Fiber
              <span className="badge bg-primary rounded-pill">
                {item.fiber_g} gr
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cholesterol
              <span className="badge bg-primary rounded-pill">
                {item.cholesterol_mg} mg
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Potassium
              <span className="badge bg-primary rounded-pill">
                {item.potassium_mg} mg
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sodium
              <span className="badge bg-primary rounded-pill">
                {item.sodium_mg} mg
              </span>
            </li>
          </ul>
        </div>
      ));

  return <div className="row">{markup}</div>;
}
