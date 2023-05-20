import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    setTimeout(() => {
      this.setState({ isLoading: false });;
    }, 4000);
  }

  render() {
    const { isLoading } = this.state;  // 구조 분해 할당
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
