import React from 'react'
import ReactDOM from 'react-dom'
import CHORDS from '../chords/ukelele.js'

class Ukelele extends React.Component {
	constructor() {
        super();
    }
	render() {
        let svgns = "http://www.w3.org/2000/svg";
        let verticalOffset = 50;
        let headStockOffset = 10;
        let fretWidth = 100;
        let circleRadius = 20;
        let height = 180;

        let stringYPosition = [verticalOffset, height / 3 + verticalOffset, height * 2 / 3 + verticalOffset, height + verticalOffset];
        let fretXPosition = [fretWidth + headStockOffset, fretWidth*2 + headStockOffset, fretWidth*3 + headStockOffset, fretWidth*4 + headStockOffset];

        let circleComponents = [];
        let chordSchema;

        if (this.props.chord) {
            console.log(CHORDS);
            if (CHORDS[this.props.chord]) {
                chordSchema = CHORDS[this.props.chord];
                chordSchema.forEach(function(finger) {
                    finger.string.forEach(function(string, index) {
                        console.log(finger, string);
                        circleComponents.push(<circle cx={((fretWidth/2) + fretWidth * (finger.fret-1)) + headStockOffset} cy={stringYPosition[string-1]} r={circleRadius} fill="black"></circle>)
                    });
                });
            } else {
          	     // doesn't exist in our db
             }
         }

    return (
    	<div>
			<svg width="550" height="400" id="svgOne">
                <rect x={headStockOffset} y={stringYPosition[0]} width={headStockOffset} height={height} fill="transparent" stroke="black" strokeWidth={1}></rect>

                <line x1={headStockOffset*2} y1={stringYPosition[0]} x2="500" y2={stringYPosition[0]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[1]} x2="500" y2={stringYPosition[1]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[2]} x2="500" y2={stringYPosition[2]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[3]} x2="500" y2={stringYPosition[3]} stroke="black" strokeWidth={1}></line>

                <line x1={fretXPosition[0]} y1={verticalOffset} x2={fretXPosition[0]} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fretXPosition[1]} y1={verticalOffset} x2={fretXPosition[1]} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fretXPosition[2]} y1={verticalOffset} x2={fretXPosition[2]} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fretXPosition[3]} y1={verticalOffset} x2={fretXPosition[3]} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>

                {circleComponents.map(circle => (circle))}
        </svg>
      </div>
    );
  }
}

export default Ukelele;
