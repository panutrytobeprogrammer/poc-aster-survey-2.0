import { useState } from "react";
import "./App.css";
import RadioCard from "./components/Radio";
import { faker } from "@faker-js/faker";

function App() {
  const mockLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [no, setNo] = useState(1);

  return (
    <>
      {mockLength.map((v) => {
        return (
          <RadioCard
            setState={setNo}
            v={v}
            key={v}
            active={v === no}
            question={faker.animal.bear()}
            opt={["1", "2", "3", "4", "5"]}
          />
        );
      })}
    </>
  );
}

export default App;
