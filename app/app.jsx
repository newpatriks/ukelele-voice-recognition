import React from 'react'
import ReactDOM from 'react-dom'

import Ukelele from './components/ukelele.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChord: 'A'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        var target = e.target;
        this.setState({
            currentChord: target.options[target.selectedIndex].value
        });
    }
    render() {
        return(
            <div>
                <select id="" className="" onChange={this.handleChange}>
                    <option value='A'>A</option>
                    <option value='Am'>Am</option>
                    <option value='C'>C</option>
                </select>
                <Ukelele chord={this.state.currentChord}/>
            </div>
        );
    }
};

export default App
