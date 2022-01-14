import {
  Link,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import useSurvey from '../hooks/useSurvey';

interface ISurveyLinkView {
  finished: boolean;
  surveyId: number;
};

const SurveyLinkView: React.FC<ISurveyLinkView> = ({
  finished,
  surveyId
}) => <>
  <hr />
  {finished ? (
  <Link to="/responses">
    <Button className="text-uppercase" variant="warning" block={true}>
      See the results
    </Button>
  </Link>
  ) : (
    <Link to={`/survey/${surveyId}`}>
      <Button className="text-uppercase" variant="secondary" block={true}>
        Take a Survey
      </Button>
    </Link>
  )}
</>

export default SurveyLinkView;
