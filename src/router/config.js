import HomePage from "../components/HomePage/HomePage";
import ExperimentPage from "../routes/ExperimentPage";
import AboutPage from "../routes/AboutPage";
import UseCasesPage from "../routes/UseCasesPage";
import EvaluationsPage from "../routes/EvaluationsPage";
import ConferencePage from "../routes/ConferencePage";
import NewsPage from "../routes/NewsPage";
import ModelDetailContainer from "../routes/ModelDetailContainer";
import ModelListContainer from "../routes/ModelListContainer";
import ExperimentDetailContainer from "../routes/ExperimentDetailContainer";
import AddModelListContainer from "../routes/AddModelListContainer";

const routes = [
  {
    path: "/",
    component: HomePage,
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
    path: "/model/:modelId/experiment/:experimentId",
    component: ModelDetailContainer,
    exact: false,
  },
  {
    path: "/model/:modelId",
    component: ModelDetailContainer,
    exact: false,
  },
  {
    path: "/experiment/:experimentId/add-models",
    component: AddModelListContainer,
    exact: false,
  },
  {
    path: "/experiment/:experimentId",
    component: ExperimentDetailContainer,
    exact: false,
  }
];

export default routes;
