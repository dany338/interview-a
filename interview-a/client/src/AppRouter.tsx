import { Suspense } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import Layout from "./layout";
import SurveyView from "./views/SurveyView"
import SurveyLinkView from "./views/SurveyLinkView";
import ResponsesView from "./views/ResponsesView";
import useSurvey from './hooks/useSurvey';

const AppRouter = () => {
  const location: any = useLocation();
  const state: any = location.state;
  const [
    finished,
    surveyId,
    survey,
    infoAlert,
    onSurveySubmit,
    onSurveySelection,
    onResetSurvey,
  ] = useSurvey();

  return <Routes location={state?.backgroundLocation || location}>
    <Route path="/" element={<Layout />}>
      <Route index element={
        <Suspense fallback={<span>Loading...</span>}>
          <SurveyLinkView finished={finished} surveyId={surveyId} onResetSurvey={onResetSurvey} />
        </Suspense>
      } />
      <Route path="/survey/:id" element={
        <Suspense fallback={<span>Loading...</span>}>
          <SurveyView
            surveyId={surveyId}
            survey={survey}
            infoAlert={infoAlert}
            onSurveySubmit={onSurveySubmit}
            onSurveySelection={onSurveySelection}
          />
        </Suspense>
      } />
      <Route path="/responses" element={
        <Suspense fallback={<span>Loading...</span>}>
          <ResponsesView
          />
        </Suspense>
      } />
    </Route>
  </Routes>
};

export default AppRouter;