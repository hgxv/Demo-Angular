import { Component } from "@angular/core";

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})

export class CounterComponent {
    count: number = 0;
    className: string = "bright";
    danger: string = "danger";

    increment() {
        this.count++;
        if (this.count >= 10) {
            this.className = "dark";
        }
        if (this.count == 20) {
            console.log("here")
            this.count = 0;
        }
    }
    decrement() {
        this.count--;
        if (this.count <= 10) {
        this.className = "bright";
        }
    }    
}

