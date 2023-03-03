import type Question from './Question';

type Theme = {
  id: number;
  title: string;
  questions: Question[];
};

export default Theme;
