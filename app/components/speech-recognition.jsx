import React from 'react'
import ReactDOM from 'react-dom'

class SpeechRecognition extends React.Component {
	constructor() {
        super();
    }
	render() {
		let that = this;
		let lang = ['English',['en-US', 'United States']];
		let dialect = ['en-US', 'United States'];
		let create_email = false;
		let final_transcript = '';
		let recognizing = true;
		let ignore_onend;
		let start_timestamp;
		if (!('webkitSpeechRecognition' in window)) {
			upgrade();
		} else {
			let recognition = new webkitSpeechRecognition();

			recognition.continuous = true;
			recognition.interimResults = true;
			final_transcript = '';
			recognition.lang = ['en-US', 'United States'];
			recognition.start();
			ignore_onend = true;
			start_timestamp = +new Date();

			recognition.onstart = function() {
				recognizing = true;
			};

		recognition.onerror = function(event) {
			if (event.error == 'no-speech') {
				ignore_onend = true;
			}
			if (event.error == 'audio-capture') {
				ignore_onend = true;
			}
			if (event.error == 'not-allowed') {
				if (event.timeStamp - start_timestamp < 100) {
				} else {
				}
				ignore_onend = true;
			}
		};

		recognition.onend = function() {
			recognizing = false;
			if (ignore_onend) {
				return;
			}
			if (!final_transcript) {
				return;
			}
			if (window.getSelection) {
				window.getSelection().removeAllRanges();
				let range = document.createRange();
				range.selectNode(document.getElementsByClassName('input-chord-name')[0]);
				window.getSelection().addRange(range);
			}
			if (create_email) {
				create_email = false;
				createEmail();
			}
		};

		recognition.onresult = function(event) {
			let interim_transcript = '';
			let parsedWord = 'A';
			for (let i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					final_transcript = event.results[i][0].transcript;
				} else {
					interim_transcript = event.results[i][0].transcript;
				}
			}
			final_transcript = final_transcript.toUpperCase();
			// console.log(final_transcript);
			if (final_transcript) {

				switch(final_transcript) {
		            case 'HEY':
		                parsedWord = 'A';
		                break;
		            case 'BE':
		            case 'BEAT':
		            case 'BEE':
		                parsedWord = 'B';
		                break;
		            case 'SEA':
		            case 'SEE':
		                parsedWord = 'C';
		                break;
		            case 'HE':
		                parsedWord = 'E';
		                break;
		            default:
		                // parsedWord = 'A';
						parsedWord = final_transcript
		        }

				that.props.onSpeechUpdate(parsedWord);
			}
		};
	}

        return (
			<div id="info">
			</div>
        );
  }
}

export default SpeechRecognition;
