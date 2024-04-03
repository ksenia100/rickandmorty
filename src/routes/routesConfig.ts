import HomePage from 'containers/HomePage';
import CharacterPage from 'containers/CharacterPage';
import EpisodePage from 'containers/EpisodePage';

interface RouteConfig {
  path: string;
  exact?: boolean;
  component: React.FC;
}

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/characters',
    exact: true,
    component: CharacterPage
  },
  {
    path: '/episode',
    exact: true,
    component: EpisodePage
  }
];

export default routesConfig;