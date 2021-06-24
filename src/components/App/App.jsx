import React from 'react'
import './App.css'
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            headerExpanded : true,
            suggestedNames : [],
        }
    }

    handleInputChange=(inputText)=>{
        this.setState({headerExpanded: !(inputText.length>0),
                    suggestedNames : inputText?name(inputText):[],
        })

    }

    render(){
       return (
           <div>
               <Header headerExpanded={ this.state.headerExpanded }/>
               <SearchBox onInputChange={this.handleInputChange} />
               <ResultsContainer suggestedNames={this.state.suggestedNames}/>
           </div>
       )
    }

}

// function App(){
//     return <h1>First component</h1>
// }

export default App;