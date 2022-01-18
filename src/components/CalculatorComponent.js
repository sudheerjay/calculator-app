import React from "react";
import CalculatorService from "../services/CalculatorService";


class CalculatorComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            calculations:[],
            number1:'',
            number2:''
        }
    }

    handleFromChange1(event){
        this.setState({
            number1: event.target.value
        });
    }
    handleFromChange2(event){
        this.setState({
            number2: event.target.value
        });
    }

    handleFormAddSubmit(){
        CalculatorService.getAddition(this).then((response) => {
            this.setState({calculations: response.data})
        });

    };


    handleFormSubtractSubmit(){
        CalculatorService.getSubtraction(this).then((response) => {
            this.setState({calculations: response.data})
        });

    };


    handleFormMultiplySubmit(){
        CalculatorService.getMultiplication(this).then((response) => {
            this.setState({calculations: response.data})
        });

    };


    handleFormDivideSubmit(){
        CalculatorService.getDivision(this).then((response) => {
            this.setState({calculations: response.data})
        });

    };

    componentDidMount(){
        CalculatorService.getCalculations().then((response) => {
            this.setState({calculations: response.data})
        });
    }

    render(){
        return (
            <div>
                
                <form>
                    <div style={{fontSize:25, fontWeight:3}}>Calculate:
                    <input type="text"
                    name="number1"
                    placeholder="enter a number.."
                    onChange={this.handleFromChange1.bind(this)}
                    />
                    <input type="text"
                    name="number2"
                    placeholder="enter a number.."
                    onChange={this.handleFromChange2.bind(this)}
                    />
                    <button onClick={this.handleFormAddSubmit.bind(this)}>Add</button>
                    <button onClick={this.handleFormSubtractSubmit.bind(this)}>Subtract</button>
                    <button onClick={this.handleFormMultiplySubmit.bind(this)}>Multiply</button>
                    <button onClick={this.handleFormDivideSubmit.bind(this)}>Divide</button>
                    </div>
                    <div style={{fontSize:25, fontWeight:3}}>Result:
                    <p>{this.state.calculations.result}</p>
                    </div>
                </form>
                <br/>
                <br/>
                <h2 className="text-center">Calculations Recorded</h2>
                <table className="table table-striped">
                    <thead className="text-center">
                        <tr>
                            <td>Id</td>
                            <td>Calculation</td>
                            <td>Result</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.calculations.map(
                                calculation =>
                                <tr key = {calculation.id}>
                                        <td> {calculation.id} </td>
                                        <td> {calculation.calculation} </td>
                                        <td> {calculation.result} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}

export default  CalculatorComponent