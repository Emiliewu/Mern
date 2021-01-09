import { render } from 'react-dom';
import { Tabs } from './components/Tabs';
// import App from './App';
import './index.css';

const TabList = [
  {label: 1, content: 'content'},
  {label: 2, content: 'content'},
  {label: 3, content: 'content'}
];

render(
  <Tabs list={TabList} />,
  // <App />,
  document.getElementById('root')
);