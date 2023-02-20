import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-canvas',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div
			class="grid grid-cols-5 gap-8 p-8 justify-items-center items-center min-w-[600px] max-w-[620px]"
		>
			<div
				dropzone="true"
				(dragover)="preventDefault($event)"
				(drop)="drop($event, key)"
				class="w-[100px] h-[100px] bg-slate-300 rounded-xl overflow-hidden flex justify-center items-center border-gray-500 border-4"
				*ngFor="let key of keys"
			>
				{{ key.title }}
			</div>
		</div>
	`,
	styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent {
	keys: any[] = [
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
		{ title: '' },
	];

	drop(event: DragEvent, key: any) {
		key.title = event.dataTransfer?.getData('text');
	}

	preventDefault(event: Event) {
		event.preventDefault();
	}
}
