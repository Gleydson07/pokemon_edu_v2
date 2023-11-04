import React, {useEffect} from 'react';
import { Button, Container, Options, Overlay, Question, QuestionWrapper, Title } from './styles';
import { useGame } from '../../hooks/useGame';

export type SubmitForm = {
  response: 'a' | 'b' | 'c' | 'd';
  points: number;
  questionId: number;
  isCorrect: boolean;
}

interface ModalQuestionProps {
  showOverlay?: boolean;
  questionId: number;
  onSubmit: ({
    response,
    questionId,
  }: SubmitForm) => void;
}

function ModalQuestion({
  showOverlay,
  questionId,
  onSubmit,
}: ModalQuestionProps) {
  const { questions } = useGame();
  const [question, setQuestion] = React.useState({} as any);
  const [hasOptionSelected, setHasOptionSelected] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { option } = event.currentTarget;
    const isCorrect = String(option.value) === String(question?.correct);

    onSubmit({
      response: option.value,
      questionId,
      points: isCorrect ? question?.points : 0,
      isCorrect
    });
  }

  function onChangeOption(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setHasOptionSelected(!!value);
  }

  useEffect(() => {
    setQuestion(questions.find((q: any) => Number(q.id) === Number(questionId)));
  }, [questions, questionId]);

  return (
    <Overlay
      showOverlay={showOverlay}
    >
      <Container onSubmit={handleSubmit}>
        <Title>Pergunta</Title>
        <QuestionWrapper>
          <Question>{question?.question}</Question>
          <small>{question?.points} pontos</small>
        </QuestionWrapper>
        <Options>
          <label htmlFor='a'>
            <input 
              type="radio" 
              name="option" 
              id="a" 
              value="a" 
              onChange={onChangeOption}
            />
            <span>A) {question?.options?.a}</span>
          </label>
          <label htmlFor='b'>
            <input 
              type="radio" 
              name="option" 
              id="b" 
              value="b" 
              onChange={onChangeOption}
            />
            <span>B) {question?.options?.b}</span>
          </label>
          <label htmlFor='c'>
            <input 
              type="radio" 
              name="option" 
              id="c" 
              value="c" 
              onChange={onChangeOption}
            />
            <span>C) {question?.options?.c}</span>
          </label>
          <label htmlFor='d'>
            <input 
              type="radio" 
              name="option" 
              id="d" 
              value="d" 
              onChange={onChangeOption}
            />
            <span>D) {question?.options?.d}</span>
          </label>
        </Options>
        <Button 
          disabled={!question?.id || !hasOptionSelected} 
          type="submit"
        >
          Responder
        </Button>
      </Container>
    </Overlay>
  );
}

export default ModalQuestion;