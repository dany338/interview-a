import { useState } from "react";
import { IQuestion } from "../entities/Survey"
import Answer from "./Answer";
interface QuestionProps {
    question: IQuestion;
    onSelection?: (question: string, answer: string) => any;
}

const Question = ({ question, onSelection }: QuestionProps) => {
  const [checked, setChecked] = useState('');
    const group = `${Date.now()}`;
    const onSelectAnswer = (answer: string) => {
      if (onSelection) {
        setChecked(answer);
        onSelection(question.question, answer);
      }
    }

    const answers = question.answers.map((answer: string | any, index: number) =>
      <Answer answer={ answer }
              group={ group }
              onSelection={ onSelectAnswer }
              key={ index }
              checked={ checked }
      />
    );

    return (
        <fieldset>
            <legend> { question.question }</legend>
            { answers }
        </fieldset>
    );
};

export default Question;
