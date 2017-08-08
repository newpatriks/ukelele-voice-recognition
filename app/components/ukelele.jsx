import React from 'react'
import ReactDOM from 'react-dom'
import CHORDS from './ukelele-chords.js'

class Ukelele extends React.Component {
	constructor() {
        super();
    }
	render() {
        let svgns = "http://www.w3.org/2000/svg";
		let that = this;
		let padding = this.props.padding || 10;
		let fretWidth = this.props.width / 5 || 550;
		let stringHeight = this.props.height / 2 || 300;

		let verticalOffset = 50;
        let headStockOffset = 10;
        let circleRadius = fretWidth / 6;

        let stringYPosition = [verticalOffset, stringHeight / 3 + verticalOffset, stringHeight * 2 / 3 + verticalOffset, stringHeight + verticalOffset];
        let fretXPosition = [fretWidth + headStockOffset, fretWidth*2 + headStockOffset, fretWidth*3 + headStockOffset, fretWidth*4 + headStockOffset];

        let circleComponents = [];
        let chordSchema;

        if (this.props.chord) {
            if (CHORDS[this.props.chord]) {
                chordSchema = CHORDS[this.props.chord];
                chordSchema.forEach(function(finger) {
                    finger.string.forEach(function(string, index) {
                        circleComponents.push(<circle key={that.props.chord + '_' + finger.fingerId + '_' + index} cx={((fretWidth/2) + fretWidth * (finger.fret-1)) + headStockOffset} cy={stringYPosition[string-1]} r={circleRadius} fill="black"></circle>)
                    });
                });
            } else {
          	     if (Array.isArray(this.props.chord)) {
					 let chordSchema = this.props.chord;
					 chordSchema.forEach(function(finger) {
					 	finger.string.forEach(function(string, index) {
					 		circleComponents.push(<circle key={that.props.chord + '_' + finger.fingerId + '_' + index} cx={((fretWidth/2) + fretWidth * (finger.fret-1)) + headStockOffset} cy={stringYPosition[string-1]} r={circleRadius} fill="black"></circle>)
					 	});
					 });
				 }
             }
         }

    return (
    	<div>
			<svg width={this.props.width} height={this.props.height} id="svgOne">
				<rect x={headStockOffset} y={stringYPosition[0]} width={headStockOffset} height={stringHeight} fill="transparent" stroke="black" strokeWidth={1}></rect>

                <line x1={headStockOffset*2} y1={stringYPosition[0]} x2={this.props.width} y2={stringYPosition[0]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[1]} x2={this.props.width} y2={stringYPosition[1]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[2]} x2={this.props.width} y2={stringYPosition[2]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[3]} x2={this.props.width} y2={stringYPosition[3]} stroke="black" strokeWidth={1}></line>

                <line x1={fretXPosition[0]} y1={verticalOffset} x2={fretXPosition[0]} y2={stringHeight + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fretXPosition[1]} y1={verticalOffset} x2={fretXPosition[1]} y2={stringHeight + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fretXPosition[2]} y1={verticalOffset} x2={fretXPosition[2]} y2={stringHeight + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fretXPosition[3]} y1={verticalOffset} x2={fretXPosition[3]} y2={stringHeight + verticalOffset} stroke="black" strokeWidth={0.5}></line>

                {circleComponents.map(circle => (circle))}
        </svg>
      </div>
    );
  }
}

export default Ukelele;
