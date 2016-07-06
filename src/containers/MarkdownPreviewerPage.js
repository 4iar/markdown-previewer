import React from 'react';
import defaultTextAreaPlaceholder from '../utils/defaultTextAreaPlaceholder';
import ReactMarkdown from 'react-markdown';

import '../styles/markdown-previewer-page.scss';


export default class MarkdownPreviewerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: defaultTextAreaPlaceholder };
  }

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">

          <div id="input-area" className="col-md-6">
            <textarea onChange={this.onChange.bind(this)} className="form-control" rows="40" defaultValue={defaultTextAreaPlaceholder}>
            </textarea>
          </div>

          <div id="output-area" className="col-md-6">
            <ReactMarkdown source={this.state.inputValue} />
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}
