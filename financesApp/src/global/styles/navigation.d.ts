import { RootStackParamList } from '../../components/Routes/app.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}