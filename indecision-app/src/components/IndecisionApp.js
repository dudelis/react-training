import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: this.props.options,
        selectedOption: undefined
    }    
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json);
            if (options){
                this.setState(()=>({options}));
            }
        } catch (e){

        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
    handleDeleteOptions = ()=>{
        this.setState(()=>({options:[]}));
    };
    handleDeleteOption = (optionToRemove) =>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>option !== optionToRemove)
        }));
    }
    handleAddOption = (option)=>{
        if (!option.trim()){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option)>-1){
            return 'This item already exists!'
        }
        this.setState((prevState)=>({
            options: prevState.options.concat(option)
        }));
    };
    handlePick = ()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }));
    }
    handleClearSelectedOption = ()=>{
        this.setState(()=>({selectedOption: undefined}));
    }
    render(){
        const subtitle  = 'Put your life in the hands of the computer';
        return (
            <div>
                <Header
                    subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOption 
                    handleAddOption={this.handleAddOption} />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}/>
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: []
}
