

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility: false,
            message: 'Some message'
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        });
    }
    
    render(){
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details':'Show details'}</button>
                {this.state.visibility && <p>Some message to show</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const messageTemplate = "This is some message to show";
// let message = '';

// const showDetails = ()=>{
//     if (message){
//         message = '';
//     } else {
//         message = messageTemplate;
//     }
//     render();
// }

// const appRoot = document.getElementById('app');
// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={showDetails}>{message ? 'Hide details':'Show details'}</button>
//             {message && <p>{message}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
// render();