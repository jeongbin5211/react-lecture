import React from 'react'

export default function index() {
    const text = 'TSX';

    const trueFlag = true;
    const falseFlag = false;

    const numberArray = [1, 2, 3, 4, 5];

    const TRUE_TEXT = 'true';

    // TSX 파일에서 작성된 ts 컴포넌트 함수는
    // return () 소괄호 안에 html 태그를 포함할 수 있음  
    
    //! ts return html을 표기하기 위해서는 ()소괄호로 묶어서 작성해야 합니다.
    //! return안에 최상위 부모 태그가 무조건 1개 존재해야 합니다. <></>
    //! return안에 ts를 작성하려면 {}로 묶어 주어야 합니다.
    //! ts의 중괄호는 반드시! html태그 안에 존재해야 합니다.
    // return() 안의 {}안에서 다시 html을 표기하고 싶을 경우 ()로 반환 시켜야 합니다.

    //! return 안에서는 제어문을 사용할 수 없습니다!
    // 변수와 연산자는 사용 가능합니다.
    // if문 대체는 논리연산자, 삼항연산자
    // for문 대체는 배열 객체의 map메서드
    
    //! return()안에는 html주석 사용불가능
    // {}를 사용한 js/ts 주석을 사용해야 합니다.

    //! XML문법을 준수해야 합니다.
    // html 요소를 소문자로 작성
    // html 속성은 대소문자를 구분합니다.
  return (
    <>
        { trueFlag && (<div>{TRUE_TEXT}</div>)}
        { trueFlag ? (<div>true</div>) : (<div>false</div>) }; 
        { numberArray.map((number) => {
            (<div>{number}</div>)
        })}
    </>
  )
}
