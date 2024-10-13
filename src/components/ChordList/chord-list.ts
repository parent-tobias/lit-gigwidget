import { LitElement, css, html } from 'lit';
import { customElement, property, } from 'lit/decorators.js';

@customElement('chord-list')
export class ChordList extends LitElement {
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
		.chord {
			width: 30%;
		}
	`

	@property({
		type: String
	})
	instrument='Standard Ukulele';

	@property({type: Array})
	chords: string[] = [];

	render(){
		return html`<header><h3>${this.instrument}</h3></header>
		<div class='list'>
			${this.chords.map((chord)=>
				html`<chord-diagram chord=${chord} instrument='${this.instrument}'></chord-diagram>`
			)}
		</div>`;

	}
}