import React from 'react'

//! 컴포넌트(components)
// 재사용 가능한 독립적인 코드 단위
// HTML, CSS, JS/TS 사용 가능

interface Props {
    name?: string;
    color: string;
    isSpecial?: boolean;
}

const Index: React.FC<Props> = ({name, color, isSpecial}) => {
  return (
    <>
        {/* <h1 style={{color}}>{ isSpecial ? "특별한 컴포넌트": null }components, { name }</h1> */}

        {/* isSpecial이 true이면 && 연산자 뒤에있는 string값이 출력된다. */}
        
        <h1 style={{color}}>{ isSpecial && "특별한 컴포넌트"}components, { name }</h1>
        {/* App.tsx에서 <Component name="react" /> */}
        {/* style을 지정하는 변수 안에 color 변수가 들어가기 때문에
            style={{color}}
        */}
    </>
  )
}

// name 기본값 지정방법은 아래처럼 작성하거나
// 12 번째 줄에서 매개변수 name="이름없음" 작성
Index.defaultProps = {
    name: '이름없음'
}

export default Index;