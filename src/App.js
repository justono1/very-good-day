import React, { Component } from 'react';
import { Provider } from 'react-redux';
import makeStore from './store/configureStore';

//Components
import ContextualSidebar from './components/ContextualSidebar';
import Nav from './components/Nav';
import VacationInfo from './components/VacationInfo';
import  VacationTime from './components/VacationTime';

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
            <VacationInfo />
            <VacationTime />
            <ContextualSidebar />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
