import React from 'react'
import ReactDOM from 'react-dom'
import Ukelele from './components/ukelele.jsx'
import SpeechRecognition from './components/speech-recognition.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChord: 'A'
        };
        this.handleTranscript = this.handleTranscript.bind(this);
    }
    handleTranscript(e) {
        this.setState({
            currentChord: e
        });
    }

    render() {
        return(
            <div>
                <input className='input-chord-name' type='text' value={this.state.currentChord} />
                <SpeechRecognition onSpeechUpdate={this.handleTranscript}/>
                <Ukelele chord={this.state.currentChord} width="500" height="300"/>
            </div>
        );
    }
};

export default App
