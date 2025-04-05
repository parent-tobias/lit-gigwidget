import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, state, } from 'lit/decorators.js';

@customElement('chord-list')
export class ChordList extends LitElement {
	@property({
		type: String
	})
	instrument='Standard Ukulele';

	@property({type: Array})
	chords: string[] = [];

	@state()
	numChords = 0;
	
	static styles = css`
	  :host {
			display: block;
			width: 30vw;
      height: fit-content(100%);
		}
		.list {
	    display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
		}

	`



	updated(changedProperties: PropertyValues<this>){
		if(changedProperties.has("chords"))
			this.numChords = this.chords.length;
	}

	render(){
		return html`<header><h3>${this.instrument}</h3></header>
		<div class='list'>
			${this.chords.map((chord)=>
				html`<chord-diagram chord=${chord} instrument='${this.instrument}'></chord-diagram>`
			)}
			<style>
				chord-diagram {
		  	  width: calc(100%/${this.numChords});
					min-width:  100px;
    		}
			</style>
		</div>`;

	}
}