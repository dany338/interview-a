interface AnswerProps {
    answer: string | any;
    group: string;
    onSelection?: (answer: string) => any;
    checked: string;
}

const Answer = ({ answer, group, onSelection, checked }: AnswerProps) => {
    const onClickAnswer = (e: React.FormEvent<HTMLFormElement>) => {
      e.stopPropagation();
        if (onSelection) {
            onSelection(answer);
        }
    };

    return (
        <div>
            <label>
                <input value={ answer }
                       type="radio"
                       name={ group }
                       onChange={ (_event: any) => onClickAnswer(_event) }
                       checked={checked === answer}
                />{' '}
                { answer }
            </label>
        </div>
    );
};

export default Answer;
