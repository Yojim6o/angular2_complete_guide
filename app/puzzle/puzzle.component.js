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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            <h2>Game Setup</h2>\n            Enter your name please:\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n        [ngClass]=\"{\n            puzzle: true,\n            solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value ==\n            switch3Number && switch3.value == switch4Number && switch4.value\n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n        >\n            <h2>\n                The Puzzle |\n                {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value ==\n            switch3Number && switch3.value == switch4Number && switch4.value ? 'SOLVED' : 'NOT SOLVED'}}\n            </h2>\n            <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number ||\n            switch3.value != switch3Number || switch4.value != switch4Number\">\n            Congratulations {{name.value}}, you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUNBO2dCQUFBO2dCQWVBLENBQUM7Z0JBVEcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsdzlDQWlDVDtxQkFDSixDQUFDOzttQ0FBQTtnQkFpQkYsc0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgcHV6emxlOiB0cnVlLFxuICAgICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIHN3aXRjaDMudmFsdWUgPT1cbiAgICAgICAgICAgIHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyICYmIHN3aXRjaDQudmFsdWVcbiAgICAgICAgfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIFRoZSBQdXp6bGUgfFxuICAgICAgICAgICAgICAgIHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09XG4gICAgICAgICAgICBzd2l0Y2gzTnVtYmVyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoNE51bWJlciAmJiBzd2l0Y2g0LnZhbHVlID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCd9fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPk9rLCB3ZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7bmFtZS52YWx1ZX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIFN3aXRjaDE6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaDI6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaDM6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaDQ6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8XG4gICAgICAgICAgICBzd2l0Y2gzLnZhbHVlICE9IHN3aXRjaDNOdW1iZXIgfHwgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0TnVtYmVyXCI+XG4gICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
