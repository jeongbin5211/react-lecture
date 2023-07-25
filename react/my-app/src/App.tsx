import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error">
          Error
        </Button>
    </Stack>
    </>
  );
}

export default App;
