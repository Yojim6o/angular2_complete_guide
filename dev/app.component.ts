import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>This is a test</h1>
        <p>Now comes the second component</p>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}
