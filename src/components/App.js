import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import SearchBox from './SearchBox/SearchBox';
import ResultContainer from './ResultContainer/ResultContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state = {
    headerText:"Name It!",
    headerExpanded:true,
    suggestedNames:[]
  };

  handleInputChange=(inputText)=>{
    this.setState({
      headerExpanded: inputText.length>0? false:true,
      suggestedNames: inputText? name(inputText): [],
    });
  }
 render(){
  return (
    <div className="App">
      <Header 
         headerExpanded={this.state.headerExpanded}
         headTitle={this.state.headerText}/>
      <SearchBox onInputChange={this.handleInputChange}/>
      <ResultContainer suggestedNames={this.state.suggestedNames}/>
    </div>
  );
  }
}

export default App;
