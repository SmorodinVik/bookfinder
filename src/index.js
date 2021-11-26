// @ts-check
import './styles/style.css';
import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import { render } from 'react-dom';
import init from './init.jsx';

const runApp = async () => {
  render(
    await init(),
    document.getElementById('container'),
  );
};

runApp();
