import { Typography, Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Action from './types/Action';
import Question from './types/Question';

export default function OneQuestionView({
  question,
}: {
  question: Question;
}): JSX.Element {
  // стэйты на модальное окно и кнопки
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  // показ ответа или инпута
  const [answerShow, setAnswerShow] = useState(false);
  // строка ответа
  const [answer, setAnswer] = useState('');
  // инпут для ответа
  const [inputText, setInput] = useState('');

  const dispatch = useDispatch();

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => {
    setOpen(false);
    setDisable(true);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setInput(event.target.value);
  };

  const handlerAnswer: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputText.toLowerCase() === question.answer.toLowerCase()) {
      dispatch<Action>({
        type: 'themes/changePoints',
        payload: question.points,
      });
      setAnswer(`Молодец! +${question.points}`);
    } else {
      dispatch<Action>({
        type: 'themes/changePoints',
        payload: -question.points,
      });
      setAnswer(
        `Блин... -${question.points}. Правильный ответ: ${question.answer}`,
      );
    }
    setAnswerShow(true);
  };

  return (
    <div>
      <Button
        size="large"
        variant="outlined"
        onClick={handleOpen}
        disabled={disable}
        color="secondary"
      >
        {question.points}

      </Button>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              // eslint-disable-next-line @typescript-eslint/prefer-as-const
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
                // border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                backgroundColor: '#9c27b0',
                textAlign: 'center',
                color: 'white'
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {question.question}
            </Typography>
            {answerShow ? (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {answer}

              </Typography>
            ) : (
              <form onSubmit={handlerAnswer}>
                <input value={inputText} onChange={handleInputChange} />
                <Button type="submit" color="error">
                  Узнать ответ
                </Button>
              </form>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}
