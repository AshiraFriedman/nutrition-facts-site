import { useEffect, useState } from "react";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Facts from "./Components/Facts";

export default function App() {
  const [nutritionFacts, setNutritionFacts] = useState([]);

  function getNutritionFacts(query) {
    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
      headers: { "X-Api-Key": "eLRiQvvFz08ov8L7UX9rfg==eeLw8qpuRV08Cvk7" },
    })
      .then((response) => response.json())
      .then((data) => setNutritionFacts(data));
  }

  useEffect(() => console.log(nutritionFacts), [nutritionFacts]);

  return (
    <main>
      <Heading />
      <Input onClick={getNutritionFacts} />
      <br></br>
      <Facts food={nutritionFacts} />
    </main>
  );
}
