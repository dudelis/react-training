console.log("App.js is running - hey");

const  appObject = {
    title: "Indecision app",
    subtitle: "Put your life in hands of a computer",
    options: []
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        appObject.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const onRemoveAll = ()=>{
    appObject.options = [];
    render();
};
const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    console.log(option);
}

const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const render  = ()=>{
    const template  = (
        <div>
            {appObject.title && <h1>{appObject.title}</h1>}
            <h2>{appObject.subtitle}</h2>
            {appObject.options.length > 0 ? 'Here are your options' : 'No options'}
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    appObject.options.map((option)=> {
                        return <li key={appObject.options.indexOf(option)}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button> Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();


