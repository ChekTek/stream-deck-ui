import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-inspector',
	standalone: true,
	imports: [CommonModule],
	template: ` <h2 class="text-xl font-extrabold text-gray-100 font">Property Inspector</h2>`,
	styleUrls: ['./inspector.component.css'],
})
export class InspectorComponent {}
