import {
  Link,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container, Wrapper } from "./styled";
import { ISurveyLinkViewProps } from "src/entities/Survey";

const SurveyLinkView: React.FC<ISurveyLinkViewProps> = ({
  finished,
  surveyId,
  onResetSurvey,
}) => <Container>
  <Wrapper>
    <div className="survey-container">
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
      <hr />
      <Button className="text-uppercase" variant="primary" block={true} onClick={onResetSurvey}>
        Reset Survey
      </Button>
    </div>
  </Wrapper>
</Container>

export default SurveyLinkView;
