import Theme from './Theme';

type Action = 
| {type: 'themes/loadThemes'; payload: Theme[]};

export default Action;