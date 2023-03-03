import { Typography, Box, Button, Modal } from '@mui/material';
import React from 'react';

export default function OneQuestionView(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <div>
      <Button size="large" variant="outlined" color="secondary" onClick={handleOpen}>
        200
      </Button>

      {open ? (
        <div>
          <Button onClick={handleOpen} />
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
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                backgroundColor: 'violet',
                textAlign: 'center'
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: 36, }}>
                Вопрос
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 22, }}>
                Ответ
              </Typography>
            </Box>
          </Modal>
        </div>
      ) : null}
    </div>
  );
}
