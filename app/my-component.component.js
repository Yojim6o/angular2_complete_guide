System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Max';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : ''\">{{name}}</span> and this is my very first Angular 2 component.\n        <span [class.is-awesome]=\"inputElement.value === 'yes'\">It's so awesome.</span>\n        <br>\n        <br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br><br>\n        <button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' is entered</button>\n    ",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDZkQVNUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3FCQUN6QyxDQUFDOzt3Q0FBQTtnQkFHRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICBIaSwgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJ1wiPnt7bmFtZX19PC9zcGFuPiBhbmQgdGhpcyBpcyBteSB2ZXJ5IGZpcnN0IEFuZ3VsYXIgMiBjb21wb25lbnQuXG4gICAgICAgIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcydcIj5JdCdzIHNvIGF3ZXNvbWUuPC9zcGFuPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgSXMgaXQgYXdlc29tZT9cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8YnI+PGJyPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJpbnB1dEVsZW1lbnQudmFsdWUgIT09ICd5ZXMnXCI+T25seSBlbmFibGVkIGlmICd5ZXMnIGlzIGVudGVyZWQ8L2J1dHRvbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IHtcbiAgICBuYW1lID0gJ01heCc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
