
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    handleAddOne(){
        this.setState((prevState)=>{
            prevState.count++;
            return prevState;
        });

    }
    handleMinusOne(){
        this.setState((prevState)=>{
            prevState.count--;
            return prevState;
        });
    }
    handleReset(){
        this.setState(()=>{
            return {count: 0}
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count: -10
}
ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () =>{
//     count --;
//     renderCounterApp();
// }
// const reset = ()=>{
//     count = 0;
//     renderCounterApp();
// }



// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();