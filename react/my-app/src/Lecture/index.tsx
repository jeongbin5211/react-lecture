import React from 'react'
//! React란
// facebook에서 개발하고 관리하는 자바스크립트 라이브러리 입니다.
// 리액트는 UI를 구축하기 위한 자바스크립트 라이브러리이며
// 컴포넌트 기반의 아키텍쳐를 사용해서 복잡한 UI를 쉽게 구축하고 관리합니다.
// Virtual DOM을 통해서 빠른 렌더링을 하게 합니다.
// 단방향 데이터 흐름(one way data flow)

//! React 기본 개념
// 컴포넌트: js(ts) 함수나 클래스로 작성하고 입력을 받아 화면에 표시될 요소를 반환합니다.
// Props: properties의 줄임말, 컴포넌트 간 데이터를 전달하는 데 사용됩니다.
// State: 컴포넌트 내에서 관리되는 데이터입니다. 변경 가능(State가 변경되면 해당 컴포넌트는 재렌더링 됩니다.)
//? Lifecycle methods(생명주기 메서드): 컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드들 입니다. 추가적으로 컴포넌트에서 에러가 났을 때 호출되는 메서드도 있습니다. 클래스형 컴포넌트에서만 사용이 가능합니다!
// Hooks: 함수형 컴포넌트에서 React state와 lifecycle 기능을 연결할 수 있게 해주는 기능입니다.

//! React의 필요성
// 유지 보수가 용이: React는 컴포넌트 기반 아키텍처를 도입함으로써, 개발자가 기능별로 컴포넌트를 분리하고 재사용함으로써 코드의 유지 보수를 쉽게 할 수 있게 해줍니다.

// 성능이 향상됨: React는 Vertual DOM을 도입함으로써, 실제 DOM에 접근하는 비용을 줄이고 성능을 향상시켰습니다. 이는 특히 대규모 애플리케이션에서 중요합니다.

// 커뮤니티와 생태계: React는 매우 크고 활성화된 커뮤니티와 풍부한 생태계를 가지고 있습니다. 이로 인해 많은 도구와 라이브러리가 React와 함께 사용될 수 있습니다.

// 다양한 플랫폼에서의 사용: React Native를 통해 React는 웹 뿐만 아니라 모바일 애플리케이션 개발에도 사용될 수 있습니다. 이로써 한 번의 학습으로 다양한 플랫폼에서의 개발이 가능해졌습니다.

//! React가 하는 일
// 1. 사용자 인터페이스(UI) 구성
// React의 주된 기능은 사용자 인터페이스를 구성하는 것입니다. 이는 웹페이지의 레이아웃, 버튼, 입력 필드 등 사용자가 상호작용하는 모든 요소를 포함합니다. React는 이러한 요소들을 컴포넌트라는 독립적인 단위로 분리하고, 이 컴포넌트들을 조합하여 전체 인터페이스를 구성합니다.

// 2. 상태 관리
// React는 "state"라는 개념을 통해 애플리케이션의 상태를 관리합니다. 상태는 애플리케이션에서 변화하는 데이터를 말하며, 예를 들어 사용자 입력, 서버로부터 받은 데이터 등이 이에 해당합니다. React는 상태의 변화에 따라 자동으로 인터페이스를 업데이트합니다.

// 3. 컴포넌트 생명주기 관리
// React는 컴포넌트의 "생명주기"를 관리합니다. 이는 컴포넌트가 생성되어 DOM에 삽입되는 과정, 상태가 업데이트되는 과정, 그리고 DOM에서 제거되는 과정을 포함합니다. 이러한 과정 동안 특정 동작을 실행하도록 하는 메서드들을 React는 제공합니다.

// 4. Virtual DOM
// React는 Virtual DOM을 통해 효율적인 렌더링을 수행합니다. 데이터가 변경될 때 마다 전체 UI를 다시 그리는 대신, React는 Virtual DOM에서 실제 DOM과의 차이점을 찾아내어 필요한 부분만 업데이트합니다.

// 5. 이벤트 처리
// React는 사용자의 행동에 반응하는 이벤트를 처리합니다. 예를 들어 사용자가 버튼을 클릭하거나 텍스트 필드에 입력하는 등의 동작에 대해 React는 이벤트 핸들러를 통해 응답할 수 있습니다.

//! 다른 프레임워크와의 비교
//? Angular
// Angular는 Google이 관리하는 TypeScript 기반의 프론트엔드 프레임워크입니다.

// 전체적인 프레임워크: Angular는 완전한 프레임워크로서, form validation, dependency injection, routing 등의 기능이 내장되어 있습니다. 반면, React는 이런 기능들을 갖추기 위해 외부 라이브러리를 사용해야 합니다.

// Two-Way Data Binding: Angular는 뷰와 모델 사이에 양방향 데이터 바인딩을 제공합니다. 이는 UI의 변화가 상태에 자동으로 반영되며, 상태의 변화도 UI에 자동으로 반영된다는 의미입니다. 반면, React는 단방향 데이터 흐름을 사용합니다.

// Learning Curve: Angular는 복잡하고 큰 규모의 애플리케이션을 만들기 위한 많은 기능을 제공합니다. 이로 인해 학습 곡선이 상대적으로 높을 수 있습니다.

//? Vue.js
// Vue.js는 Evan You가 개발하고 관리하는 프론트엔드 프레임워크입니다.

// 간결함: Vue.js는 API와 디자인이 간결하며, 사용자 친화적입니다. 이는 Vue.js의 학습 곡선이 상대적으로 낮게 만듭니다.

// 유연성: Vue.js는 React와 Angular 사이의 중간 정도로 생각할 수 있습니다. Vue.js는 React와 같이 라이브러리로 시작하여 필요한 기능을 추가하는 방식을 취할 수도 있고, Angular처럼 프레임워크로서의 역할을 하도록 구성할 수도 있습니다.

// Two-Way Data Binding: Vue.js도 Angular와 같이 양방향 데이터 바인딩을 제공합니다.

//! Node.js 이해하기
// Node.js는 JavaScript를 브라우저 외부에서 실행할 수 있게 해주는 환경입니다. 이를 통해 JavaScript로 서버 사이드 스크립트를 작성할 수 있게 되었으며, 이로 인해 웹 페이지의 동적인 기능뿐만 아니라 서버 애플리케이션 전체를 JavaScript로 작성할 수 있게 되었습니다.

//! Node.js와 React
// React는 JavaScript 라이브러리이므로 브라우저에서 실행되지만, Node.js 환경에서는 다음과 같은 작업을 수행합니다.

// 1. 개발 서버 실행: Node.js를 사용하여 로컬 개발 서버를 실행할 수 있습니다. 이 서버는 코드 변경을 실시간으로 반영하고, 에러 메시지를 표시하며, 빌드 프로세스를 관리합니다.

// 2. 빌드 및 번들링: React 애플리케이션은 보통 여러 JavaScript 파일과 컴포넌트로 구성되지만, 이러한 파일들은 브라우저에서 직접 실행할 수 있는 단일 JavaScript 파일로 번들링되어야 합니다. 이 과정은 종종 Node.js와 Webpack 같은 도구를 사용하여 수행됩니다.

// 3. 서버 사이드 렌더링: React는 서버 사이드 렌더링(SSR)을 지원합니다. 이는 첫 번째 페이지 로드에서의 성능을 향상시키고, SEO(검색 엔진 최적화)를 개선하는 데 도움이 됩니다.

//! npm/yarn 이해하기
// npm(Node Package Manager)과 yarn은 JavaScript 코드를 공유하고 재사용하기 위한 패키지 관리자입니다. 이들은 프로젝트에 필요한 라이브러리와 도구를 쉽게 설치하고 업데이트하며 관리할 수 있게 해줍니다.

// React 및 기타 라이브러리 설치: React 및 관련 라이브러리(ex: Redux, React Router 등)를 설치하고 업데이트 하는데 사용됩니다.

// 프로젝트 의존성 관리: 프로젝트의 모든 의존성을 관리하고, 이들의 정확한 버전을 유지하여 프로젝트의 일관성을 보장합니다.

// 스크립트 실행: 테스트, 빌드, 개발 서버 실행 등의 작업을 자동화하는 데 사용되는 스크립트를 실행합니다.

//! Node.js 설치

// Window/Mac 사용자:

// Node.js 공식 웹사이트에 접속합니다.
// "LTS" 버전을 선택하고 다운로드합니다. LTS 버전은 "Long Term Support"를 의미하며, 안정적인 버전입니다.
// 다운로드 받은 파일을 열고, 설치 과정을 따릅니다.

// Linux 사용자:

// Linux 사용자는 package manager를 통해 Node.js를 설치할 수 있습니다. Ubuntu를 사용하는 경우, 다음과 같은 명령어를 사용하면 됩니다.

// sudo apt-get update
// sudo apt-get install nodejs
// sudo apt-get install npm

//! Node.js 버전 확인
// Node.js 버전 확인
// 설치가 완료되면, 터미널에서 다음과 같이 입력하여 Node.js와 NPM이 올바르게 설치되었는지 확인합니다.

// node -v
// npm -v

//! Yarn 설치
// npm을 통해 yarn을 설치할 수 있습니다. 터미널에서 다음 명령어를 입력합니다.

// bash
// Copy code
// npm install -g yarn
// '-g' 옵션은 'global'을 의미하며, 이는 yarn을 전역적으로 설치한다는 것을 의미합니다.

//! Yarn 버전 확인
// 설치가 완료되면, 터미널에서 다음과 같이 입력하여 Yarn이 올바르게 설치되었는지 확인합니다.

// bash
// Copy code
// yarn -v

//! Create-react-app

// Create React App 설치 및 프로젝트 생성
// Create React App은 React 애플리케이션을 손쉽게 시작할 수 있게 해주는 툴입니다. Node.js와 npm 또는 yarn이 설치되어 있어야 합니다.

// 다음 명령어를 통해 Create React App을 사용하여 새로운 프로젝트를 생성합니다!

// bash
// Copy code
// npx create-react-app my-app

// 또는 yarn을 사용하는 경우

// bash
// Copy code
// yarn create-react-app my-app
// 여기서 'my-app'은 생성하려는 애플리케이션의 이름입니다. 해당 이름으로 새로운 디렉토리가 생성됩니다.

//! Typescript 설정
// Create React App은 TypeScript를 기본적으로 지원합니다. TypeScript를 사용하려면, 프로젝트를 생성할 때 --template typescript 옵션을 추가하면 됩니다.

// bash
// Copy code
// npx create-react-app my-app --template typescript

// 또는 yarn을 사용하는 경우

// bash
// Copy code
// yarn create-react-app my-app --template typescript
// 이 명령어는 TypeScript 템플릿을 사용하여 새로운 React 애플리케이션을 생성합니다. 이 템플릿에는 TypeScript 설정과 함께 기본적인 TypeScript 타입이 적용된 몇 가지 React 컴포넌트가 포함되어 있습니다.

//! 프로젝트 시작
// 프로젝트 디렉토리로 이동하여 애플리케이션을 시작합니다.

// bash
// Copy code
// cd my-app
// npm start

// 또는 yarn을 사용하는 경우

// bash
// Copy code
// cd my-app
// yarn start
// 이제 브라우저에서 'localhost:3000'에 접속하면, 새로 생성된 React 애플리케이션이 실행되는 것을 확인할 수 있습니다.


//! JSX: Javascript + XML
// UI구조를 직관적이고 명확하게 표현 가능

// .ts 을 컴파일시 .js

//! JSX문법
// 1. 닫힘 태그가 필수입니다. ex) <input /> self-closing 형식으로 작성

// 2. 자바스크립트의 표현식 사용 가능
// 중괄호 안에 js표현식 작성 가능
//  <div>{name}</div> name 값을 받아오기

// 3. 스타일과 클래스 지정 : style속성은 js객체로 전달되어야 하고, class대신 className을 사용합니다.

// 4. 자식요소 : 태그 사이에 존재하는 내용은 모두 자식요소로 간주

//! TSX

export default function index() {
  return (
    <>

    </>
  )
}
