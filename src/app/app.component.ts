import { CanvasComponent } from './components/canvas/canvas.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { Component } from '@angular/core';

@Component({
	imports: [ActionListComponent, InspectorComponent, CanvasComponent],
	selector: 'app-root',
	template: `<div class="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen bg-zinc-700 min-w-[880px]">
		<div class=" row-span-2 max-w-min bg-zinc-700 border-r-2 border-zinc-800">
			<app-action-list></app-action-list>
		</div>
		<div class="border-b-2 border-zinc-800 flex items-center justify-center max-h-[500px]">
			<app-canvas></app-canvas>
		</div>
		<div class="flex justify-start align-top p-8">
			<app-inspector></app-inspector>
		</div>
	</div>`,
	styles: [``],
	standalone: true,
})
export class AppComponent {}
