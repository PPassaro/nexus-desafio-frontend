// import {api} from "../../services/api"
import { useEffect, useState } from "react";
import { CardContainer } from "./styles";
import { apiAdvice } from "../../services/api";
import patternDividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import iconDice from "../../assets/images/icon-dice.svg";



interface InformationCardProps {
  slip: {
    advice: string;
    id: number;
  };
}

export function InformationCard() {
  const [advices, setAdvices] = useState<InformationCardProps | null>();

  const newAdvice = async () => {
    const {data} = await apiAdvice.get("advice");
    setAdvices(data);
  }
  
  useEffect(() => {
    newAdvice();
  }, []);

  return (
    <CardContainer>
      <div>
        <h1>ADVICE #{advices?.slip.id}</h1>
        <p>"{advices?.slip.advice}"</p>
        <img src={patternDividerDesktop} alt="Pattern Divider"/>
        <button type="button" onClick={newAdvice}>
          <img src={iconDice} alt="Dice" />
        </button>
      </div>
    </CardContainer>
  );
}
