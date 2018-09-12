import React from 'react'
import { DatePicker } from 'antd';
import {
  BrowserRouter,
  Route,
  HashRouter,
  Link
} from 'react-router-dom'
import './app.less';
import App from './base'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'


// redux 注入操作
const middleware = [thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));
console.log(store.getState(), 99999888888);


import Wraps from './pages/wraps'

const Home = () => (
  <div>
    <h2>Home3456788 <DatePicker /></h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul className="container">
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)



const BasicExample = () => (
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Wraps} />
        <Route path="/topics" component={Topics} />

      </App>
    </HashRouter>
  </Provider>
)
export default BasicExample