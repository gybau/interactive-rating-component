import { useState } from "react";
import Rating from "../components/Rating";
import ThankYou from "../components/ThankYou";

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(null);

  function handleChoice(e) {
    const currentNumber = +e.target.innerText;
    console.log(currentNumber);

    setCurrentNumber(currentNumber);
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {isSubmitted ? (
        <ThankYou currentNumber={currentNumber} />
      ) : (
        <Rating
          handleChoice={handleChoice}
          handleSubmit={handleSubmit}
          currentNumber={currentNumber}
          disabled={!currentNumber}
        />
      )}
    </div>
  );
}
