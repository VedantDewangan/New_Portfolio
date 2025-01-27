import { array_answer } from "./Dsa_Answer/ArrayAnswer";
import { basic_answer } from "./Dsa_Answer/BasicAnswers";
import { linked_list_answer } from "./Dsa_Answer/LinkedListAnswer";
import { pattern_answer } from "./Dsa_Answer/PatternAnswer";

export const allQuestionAndAnswer = [
    ...basic_answer,
    ...pattern_answer,
    ...array_answer,
    ...linked_list_answer
];
