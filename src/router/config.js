import LandingPage from "../routes/LandingPage";
import ExperimentPage from "../routes/ExperimentPage";
import AboutPage from "../routes/AboutPage";
import UseCasesPage from "../routes/UseCasesPage";
import EvaluationsPage from "../routes/EvaluationsPage";
import ConferencePage from "../routes/ConferencePage";
import NewsPage from "../routes/NewsPage";
import ModelDetailPage from "../routes/ModelDetailPage";
import ModelListContainer from "../routes/ModelListContainer";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/usecases",
    component: UseCasesPage,
  },
  {
    path: "/evaluations",
    component: EvaluationsPage,
  },
  {
    path: "/playground",
    component: ExperimentPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/conference",
    component: ConferencePage,
    exact: false,
  },
  {
    path: "/news",
    component: NewsPage,
    exact: false,
  },
  {
    path: "/models",
    component: ModelListContainer,
  },
  {
    path: "/model/:modelId",
    component: ModelDetailPage,
    exact: false,
  },
];

export default routes;
