import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()

        this.state = {
            number1 : 0,
            number2 : 0,
            sum: null
        }

    }

    updateNumber1(){
        this.setState({
            number1
        })       
    }

    updateNumber2(){
        this.setState({
            number2
        })
    }

    add(number1, number2){
        this.setState({
            sum: number1 + number2
        })
    }


    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange = {e=> this.updateNumber1(e)}></input>
                <input className='inputLine' onChange = { e=> this.updateNumber2(e)}></input>
                <button className='confirmationButton'>Add</button>
                <span className= 'resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum