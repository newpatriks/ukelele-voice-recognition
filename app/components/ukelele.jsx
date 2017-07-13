import React from 'react'
import ReactDOM from 'react-dom'

const CHORDS = {
	'A': [{
        string: [3],
        fret: 1,
        fingerId: 1
    },{
        string: [4],
        fret: 2,
        fingerId: 2
    }],
    'Am': [{
        string: [4],
        fret: 2,
        fingerId: 1
    }],
    'C':[{
        string: [1],
        fret: 3,
        fingerId: 1
    }]
};

class Ukelele extends React.Component {
	constructor() {
        super();
    }
	render() {
        var svgns = "http://www.w3.org/2000/svg";
        var verticalOffset = 50;
        var headStockOffset = 10;
        var fretWidth = 150;
        var circleRadius = 20;
        var height = 180;

        var stringYPosition = [verticalOffset, height / 3 + verticalOffset, height * 2 / 3 + verticalOffset, height + verticalOffset];

        var fret1X = fretWidth + headStockOffset;
        var fret2X = fretWidth*2 + headStockOffset;
        var fret3X = fretWidth*3 + headStockOffset;

        var circleComponents = [];
        var chordSchema;

        if (this.props.chord) {
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
