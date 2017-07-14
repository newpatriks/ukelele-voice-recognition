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
        let fretWidth = 150;
        let circleRadius = 20;
        let height = 180;

        let stringYPosition = [verticalOffset, height / 3 + verticalOffset, height * 2 / 3 + verticalOffset, height + verticalOffset];

        let fret1X = fretWidth + headStockOffset;
        let fret2X = fretWidth*2 + headStockOffset;
        let fret3X = fretWidth*3 + headStockOffset;

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
			<svg width="500" height="400" id="svgOne">
                <rect x={headStockOffset} y={stringYPosition[0]} width={headStockOffset} height={height} fill="transparent" stroke="black" strokeWidth={1}></rect>
                <line x1={headStockOffset*2} y1={stringYPosition[0]} x2="550" y2={stringYPosition[0]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[1]} x2="550" y2={stringYPosition[1]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[2]} x2="550" y2={stringYPosition[2]} stroke="black" strokeWidth={1}></line>
                <line x1={headStockOffset*2} y1={stringYPosition[3]} x2="550" y2={stringYPosition[3]} stroke="black" strokeWidth={1}></line>
                <line x1={fret1X} y1={verticalOffset} x2={fret1X} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fret2X} y1={verticalOffset} x2={fret2X} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>
                <line x1={fret3X} y1={verticalOffset} x2={fret3X} y2={height + verticalOffset} stroke="black" strokeWidth={0.5}></line>

                {circleComponents.map(circle => (circle))}
        </svg>
      </div>
    );
  }
}

export default Ukelele;
