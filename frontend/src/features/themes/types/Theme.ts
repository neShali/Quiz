import type Question from "./Question";

type Theme = {
    id: number;
    title: string;
    question: Question[];
};

export default Theme;