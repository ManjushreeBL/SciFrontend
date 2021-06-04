import React from 'react';
import './App.css'

class SciApp extends React.Component{
    render(){
        return(
            <div><h1>Welcome to SCI world</h1>
            <NameForm />
            </div>
        );
    }
}

export default SciApp;

class NameForm extends React.Component {
    
        constructor(props) {
            super(props);    
            this.state = { height: '' ,weight: '' };
            
        }
    
        onChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    
        onSubmit=(e)=> {
            e.preventDefault();
            const foo = encodeURIComponent(this.state.height);
            const bar=encodeURIComponent(this.state.weight);
    
            fetch(`https://localhost:8080/api/v1/?foo=${foo}&bar=${bar}`);
            this.setState({height: '',weight: ''});
        }
    
        render() {
            return (
                <div className="App">
                    <form
                        id="main-login"
                        action={this.props.action}
                        method={this.props.method}
                        onSubmit={this.onSubmit}>
                        <h2>Check your BMI </h2>
                        <label>
                            <span class="text">height</span>
                            <input name="height" value={this.state.height}/><br/>
                        </label>
                        <br/><br/>
                        <label>
                            <span class="text">weight</span>
                            <input name="weight" value={this.state.weight}/><br/>
                        </label>
                        <br/><br/>
                        <div class="align-right">
                            <button>Submit </button>
                        </div>
                    </form>
                </div>
            );
        }
    
    }
    
    // App.propTypes = { action: React.PropTypes.string.isRequired, method: React.PropTypes.string}
    
   
  

