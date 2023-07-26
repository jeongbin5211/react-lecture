import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//? MUI
// Material User Interface
//! my-app으로 cd 후 설치하기
// npm install @mui/material @emotion/react @emotion/styled

//? MUI styled Method
// 

export default function index() {
  return (
    <>
          {/* variant: 버튼의 형태 */}
      <Button variant="text" fullWidth size="small">Text</Button>
      <Button variant="contained" disabled={true} size="large">Contained</Button>
      <Button variant="outlined" disabled={false} size="medium">Outlined</Button>
       {/* fullwidth
        button 컴포넌트를 block형태로 지정합니다.
        가로사이즈를 100%로 지정합니다 
       */}

       {/* disabled
        해당 기능을 사용하지 못하도록 막아주는 Props입니다.
       */}

       {/* size
        small, medium, large
       */}

       {/* mui icons
        사용하려면 설치가 필요합니다.
        npm install @mui/icons-material

        import를 해줘야 합니다.
        import { iconsButton } from '@mui/material'
        import iconsButton from '@mui/icons-material'
        <IconsButton>
            <사용하고자 하는 버튼의 태그 삽입 />
        <IconsButton />
       */}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    {/* 
        오류가 날 때
        npm i --force
        미처 설치하지 못한것들을 강제로 설치시켜줍니다.
    */}
    </>
  )
}
