import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";


@Component({
    selector: 'app-get-in-touch',
    templateUrl: 'get-in-touch.component.html',
    styleUrl: 'get-in-touch.component.css',
    imports: [CommonModule],
    standalone: true
})
export class GetInTouchComponent {

    language = input<string>();

    modalOpen = false;

    public openModal() {
        this.modalOpen = true;
        console.log('modal opened')
    }

    public closeModal() {
        this.modalOpen = false;
    }

}

