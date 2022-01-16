export interface IAnswer {
    answer: string;
    count: number;
}
export interface IQuestion {
    question: string;
    answers: string[] | IAnswer[];
}
interface IContent {
    questions: IQuestion[]
}
export interface ISurvey {
    id: number;
    name: string;
    content: IContent;
}

export interface IInfoAlertProps {
  variant: string;
  message: string;
}

export interface ISurveysProps {
  surveys: Survey[]
  query: any | string;
  loading: boolean;
  onChangeQuery: (value: string) => void;
  onSearchBySurvey: () => void;
}

export interface IQuestionsProps {
  id: string;
  question: IQuestion
}

export interface ICardAnswerContainerProps {
  image: string;
};

export interface ICardAnswerProps {
  answer: IAnswer | any;
}

export interface ISearchBarProps {
  placeholder: string;
  value?: string;
  count: number;
  onChangeQuery: (value: any) => void;
  onSearchBySurvey: any | (() => void);
};

export interface IMenuProps {
  open: boolean;
};

export interface IMenuItemLinkProps {
  active: string | boolean;
  onClick: (e: any) => void;
};

export interface ISurveyLinkViewProps {
  finished: boolean;
  surveyId: number;
  onResetSurvey: () => void;
};

class Survey implements ISurvey {

    public id: number;
    public name: string;
    public content: IContent;

    constructor(nameOrSurvey: string | ISurvey, content?: IContent, id?: number) {
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
