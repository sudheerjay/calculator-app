import axios from 'axios';

const CALCULATOR_REST_URL = 'http://localhost:8082/calculator/';

class CalculatorService{
    getCalculations(){
       return axios.get(CALCULATOR_REST_URL);
    }
    getAddition(props){
        return axios.get(CALCULATOR_REST_URL+'add/'+props.state.number1+'/'+props.state.number2);
    }
    getSubtraction(props){
       return axios.get(CALCULATOR_REST_URL+'subtract/'+props.state.number1+'/'+props.state.number2);
    }
    getMultiplication(props){
       return axios.get(CALCULATOR_REST_URL+'multiply/'+props.state.number1+'/'+props.state.number2);
    }
    getDivision(props){
       return axios.get(CALCULATOR_REST_URL+'divide/'+props.state.number1+'/'+props.state.number2);
    }
}

export default new CalculatorService();