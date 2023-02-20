import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-action-list',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="px-6 py-2 bg-zinc-800 flex items-center justify-around">
			<img class="h-6 w-6 m-2" alt="list" src="../../assets/list.svg" />
			<input
				class="bg-zinc-700 px-2 rounded-md text-gray-100"
				placeholder="Search"
				(input)="filter($event)"
			/>
		</div>
		<ul class="bg-zinc-800">
			<li
				*ngFor="let action of actions"
				(dragstart)="setData($event)"
				draggable="true"
				class="text-center py-2 px-10 border-b-2 border-zinc-800 bg-zinc-700 text-zinc-100"
			>
				{{ action.name }}
			</li>
		</ul>
	`,
	styleUrls: ['./action-list.component.css'],
})
export class ActionListComponent {
	allActions = [
		{ name: 'Dog', isDragging: false },
		{ name: 'Cat', isDragging: false },
		{ name: 'Fish', isDragging: false },
		{ name: 'Lizard', isDragging: false },
		{ name: 'Snake', isDragging: false },
	];
	actions = this.allActions;

	setData(event: DragEvent) {
		const target = event.target as HTMLElement;
		event.dataTransfer?.setData('text', target.textContent ?? '');
	}

	filter(event: Event) {
		const target = event.target as any;
		const query = target.value;
		this.actions = this.allActions.filter((action) => {
			return action.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
	}
}
