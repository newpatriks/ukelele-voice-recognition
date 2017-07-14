import React from 'react'
import ReactDOM from 'react-dom'
import CHORDS from './chords/ukelele.js'
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
        let target = e.target;
        this.setState({
            currentChord: target.options[target.selectedIndex].value
        });
    }
    render() {
        let dropDownOptions = [];
        let keys = Object.keys(CHORDS);
        for (let key in CHORDS) {
            if (CHORDS.hasOwnProperty(key)) {
                dropDownOptions.push(<option id={key} value={key}>{key}</option>);
            }
        }

        return(
            <div>
                <select onChange={this.handleChange}>
                    {dropDownOptions.map(option => (option))}
                </select>
                <Ukelele chord={this.state.currentChord}/>
            </div>
        );
    }
};

export default App
