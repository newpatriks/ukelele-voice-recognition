import React from 'react'
import ReactDOM from 'react-dom'
import CHORDS from './chords/ukelele.js'
import Ukelele from './components/ukelele.jsx'
import SpeechRecognition from './components/speech-recognition.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChord: 'A'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate(e) {
        console.log(e);
        this.setState({
            currentChord: e
        });
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
                <input className='input-chord-name' type='text' value={this.state.currentChord} />
                <SpeechRecognition onSpeechUpdate={this.handleUpdate}/>
                <Ukelele chord={this.state.currentChord}/>
            </div>
        );
    }
};

export default App
