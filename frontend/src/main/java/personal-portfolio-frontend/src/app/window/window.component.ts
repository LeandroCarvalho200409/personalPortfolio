import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { DragDropModule } from "@angular/cdk/drag-drop"

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [
        CommonModule,
        DragDropModule
    ],
    templateUrl: './window.component.html',
    styleUrl: './window.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent { 

    @Output() closeEvent = new EventEmitter()

    triggerCloseFunction(): void {
        this.closeEvent.emit("close")
    }
}
