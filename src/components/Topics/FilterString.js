import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        
        this.state = {
            unfilteredArray: ['Honda', 'Toyota', 'Mazda', 'Subaru', 'Nissan', 'Acura','Lexus', 'Infinity'],
            filterdArray:[],
            userInput: ''

        }

    }


handleUserInput(e){
    this.setState({
        userInput:e.target.value
    })

}


stringFilterer(userInput){
    let unfilteredArray = this.state.unfilteredArray
    let filteredArray = []

    for (let i=0; i< unfilteredArray.lengtrh; i++){
        if (unfilteredArray[i].includes(userInput)){
            filteredArray.push(unfilteredArray[i])
        }
    }

    this.setState({
        filteredArray: filteredArray
    })

}

    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className= 'puzzleText'>Original: {this.state.unfilteredArray} </span>
                <input className = 'inputLine'onChange = {e=>this.handle.userInput(e)}></input>
                <button className = 'confirmationButton'onClick = {()=>this.stringFilterer(this.state.unfilteredArray)}></button>
                <span className = 'resultsBox filterStringRB'> Filtered Cars: {this.state.filteredArray}</span>
            </div>
        )
        
    }
}

export default FilterString