import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

// given an instrument and a chord, we should be able to generate a chord chart dynamically.
import { keys, instruments, chordOnInstrument, chordToNotes } from "../../services/music/musicUtils";
import { systemDefaultChords } from "../../services/music/systemDefaultChords";

import { SVGuitarChord } from "svguitar";


@customElement('chord-diagram')
export class ChordDiagram extends LitElement {

	static styles = css`
	:host {
		display: inline-block;
		border: 1px solid silver;
		width: 25%;
		box-sizing: border-box;
	}
	.diagram {
		width: 100%;
	}
	`
	@property({
		type: String
	})
	instrument='Standard Ukulele';

	@property({
		type: String
	})
	chord='';

	@query('.diagram')
	container?: HTMLDivElement;

  render() {

			const instrumentObject = instruments.find(({name})=>name===this.instrument)
	
			const chordFinder = chordOnInstrument(
				instrumentObject
			);
	
			// given the chord name (G7, Bbmin), we need the notes in the chord
			const chordObject = chordToNotes(this.chord);
	
			if(!chordObject) return;
	
			
			const chartSettings = systemDefaultChords[this.instrument] && systemDefaultChords[this.instrument][this.chord]?
				systemDefaultChords[this.instrument][this.chord] : 
				{
					barres: [],
					fingers: chordFinder(chordObject) 
				};
	
			let maxFrets = Math.max(...chartSettings.fingers.map(([,fret])=>fret) );
			maxFrets = maxFrets >=4 ? maxFrets : 4;
	
			let divEl = document.createElement("div");
	
			const chart = new SVGuitarChord(divEl);
			chart
				.configure({
					strings: instrumentObject?.strings.length,
					frets: maxFrets,
					position: 1,
					tuning: [...instrumentObject?.strings]
				})
				.chord(chartSettings)
				.draw();


    return html`
		<div class='chord chart'>
      <span>${this.chord.replace(/(maj)$/, '')} (${this.instrument})</span>
      <div class='diagram'>${divEl.firstChild}</div>  
    </div>
    `
  }

}

