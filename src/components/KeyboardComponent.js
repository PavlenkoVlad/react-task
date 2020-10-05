import React, {Component} from "react";

class KeyboardComponent extends Component {

    render() {
        return(
            <div className="keyboard">
                <button className="option-button" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="option-button" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className="option-button" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="option-button" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>

                <button className="digit-button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="digit-button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="digit-button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="operation-button" name="*" onClick={e => this.props.onClick(e.target.name)}>*</button><br/>

                <button className="digit-button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="digit-button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="digit-button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="operation-button" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button className="digit-button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="digit-button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="digit-button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="operation-button" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button className="digit-button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="digit-button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="digit-button" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="operation-button" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>

                <button className="save-button" name="Save to file" onClick={e => this.props.onClick(e.target.name)}>Save to file</button><br/>
            </div>
        );
    }
}

export default KeyboardComponent;