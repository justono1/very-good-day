import React, { Component } from 'react';
import { Provider } from 'react-redux';
import makeStore from './store/configureStore';

//Components
import Nav from './components/Nav';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainArea from './components/MainArea';

const store = makeStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="view-container">
          <nav className="nav-bar">
            <Nav />
          </nav>
          <main>
            <LeftSidebar />
            <MainArea />
            <RightSidebar />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
