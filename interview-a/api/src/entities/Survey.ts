interface IQuestion {
    question: string;
    answers: string[];
}
interface IContent {
    questions: IQuestion[]
}
export interface ISurvey {
    id: number | bigint;
    name: string;
    content: IContent;
}

class Survey implements ISurvey {

    public id: number | bigint;
    public name: string;
    public content: IContent;

    constructor(nameOrSurvey: string | ISurvey, content?: IContent, id?: number | bigint) {
        if (typeof nameOrSurvey === 'string') {
            this.name = nameOrSurvey;
            this.content = content || {"questions":[]};
            this.id = id || -1;
        } else {
            this.name = nameOrSurvey.name;
            this.content = nameOrSurvey.content;
            this.id = nameOrSurvey.id;
        }
    }
}

export default Survey;
