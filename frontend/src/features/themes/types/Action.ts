import Theme from './Theme';

type Action =
  | { type: 'themes/loadThemes'; payload: Theme[] }
  | { type: 'themes/changePoints'; payload: number };

export default Action;
