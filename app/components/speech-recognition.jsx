import React from 'react'
import ReactDOM from 'react-dom'

class SpeechRecognition extends React.Component {
	constructor() {
        super();
    }
	render() {
		var that = this;
		var lang = ['English',['en-US', 'United States']];
		var dialect = ['en-US', 'United States'];
		var create_email = false;
		var final_transcript = '';
		var recognizing = true;
		var ignore_onend;
		var start_timestamp;
		if (!('webkitSpeechRecognition' in window)) {
			upgrade();
		} else {
			var recognition = new webkitSpeechRecognition();

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
				var range = document.createRange();
				range.selectNode(document.getElementsByClassName('input-chord-name')[0]);
				window.getSelection().addRange(range);
			}
			if (create_email) {
				create_email = false;
				createEmail();
			}
		};

		recognition.onresult = function(event) {
			var interim_transcript = '';
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					final_transcript = event.results[i][0].transcript;
				} else {
					interim_transcript = event.results[i][0].transcript;
				}
			}
			final_transcript = final_transcript.toUpperCase();
			console.log(final_transcript);
			if (final_transcript) {
				that.props.onSpeechUpdate(final_transcript);
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
