/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import './styles/index.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import MarkdownPreviewerPage from './containers/MarkdownPreviewerPage';

render(
  <MarkdownPreviewerPage />, document.getElementById('app')
);
