import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unfiltered: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray: []
        }
    }

    handleUserInput(e){
        this.setState({
            userInput:e.target.value
        })
    }

    arrayFilterer(userInput){
        let unfilteredArray = this.state.unfilteredArray
        let filteredArray =[]

        for ( let i = 0; i < unfilteredArray.length; i++ ) {
            if ( unfilteredArray[i].hasOwnProperty(userInput) ) {
              filteredArray.push(unfilteredArray[i])
            }
        }

        this.setState({
            filteredArray: filteredArray
        })
    }



    render(){
        return(
            <div className ='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className = 'puzzleText'>Original: {this.state.unfilteredArray}</span>
                <input className = 'inputLine'onChange = {(e)=>this.handleUserInput(e)}></input>
                <button className = 'confirmationButton'onClick = {()=>this.arrayFilterer(this.state.userInput)}>Filter</button>
                <span className = 'resultsBox filterObjectRB'> Filtered {this.state.filteredArray}</span>
            </div>
        )
        
    }
}

export default FilterObject