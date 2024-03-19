import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"

@Component({
	selector: "app-root",
	standalone: true,
	// imports: [RouterOutlet],
	imports: [CommonModule, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "first-tutorial"
}
