System.register(["@angular/core", "../../slideCommon/slideCommon", "../../../editor/editor", "../../../editorTab/editorTab", "../../../../services/constants"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, EsSix5_2;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slideCommon_1_1) {
                slideCommon_1 = slideCommon_1_1;
            },
            function (editor_1_1) {
                editor_1 = editor_1_1;
            },
            function (editorTab_1_1) {
                editorTab_1 = editorTab_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            EsSix5_2 = (function (_super) {
                __extends(EsSix5_2, _super);
                function EsSix5_2(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return EsSix5_2;
            }(slideCommon_1.SlideCommon));
            EsSix5_2 = __decorate([
                core_1.Component({
                    selector: 'EsSix5_2',
                    templateUrl: 'src/components/slides/ecosystem/esSix5_2/esSix5_2.html',
                    styleUrls: ['src/components/slides/ecosystem/esSix5_2/esSix5_2.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], EsSix5_2);
            exports_1("EsSix5_2", EsSix5_2);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9lY29zeXN0ZW0vZXNTaXg1XzIvZXNTaXg1XzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUE4Qiw0QkFBVztnQkFDeEMsa0JBQVksR0FBZSxFQUFzQyxTQUFpQjtvQkFDakYsa0JBQU0sR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNGLGVBQUM7WUFBRCxDQUpBLEFBSUMsQ0FKNkIseUJBQVcsR0FJeEM7WUFKRDtnQkFOQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBQyxVQUFVO29CQUNuQixXQUFXLEVBQUMsd0RBQXdEO29CQUNwRSxTQUFTLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQztvQkFDcEUsVUFBVSxFQUFFLENBQUMsZUFBTSxFQUFFLHFCQUFTLENBQUM7aUJBQy9CLENBQUM7Z0JBRTZCLFdBQUEsYUFBTSxDQUFDLHNDQUEwQixDQUFDLENBQUE7aURBQS9DLGlCQUFVO3dCQUczQjtrQ0FKWSxRQUFRO1FBSXBCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVzL2Vjb3N5c3RlbS9lc1NpeDVfMi9lc1NpeDVfMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NsaWRlQ29tbW9ufSBmcm9tICcuLi8uLi9zbGlkZUNvbW1vbi9zbGlkZUNvbW1vbic7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yL2VkaXRvcic7XG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yVGFiL2VkaXRvclRhYic7XG5cbmltcG9ydCB7SE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidFc1NpeDVfMicsXG5cdHRlbXBsYXRlVXJsOidzcmMvY29tcG9uZW50cy9zbGlkZXMvZWNvc3lzdGVtL2VzU2l4NV8yL2VzU2l4NV8yLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL2Vjb3N5c3RlbS9lc1NpeDVfMi9lc1NpeDVfMi5jc3MnXSxcblx0ZGlyZWN0aXZlczogW0VkaXRvciwgRWRpdG9yVGFiXVxufSlcbmV4cG9ydCBjbGFzcyBFc1NpeDVfMiBleHRlbmRzIFNsaWRlQ29tbW9ue1xuXHRjb25zdHJ1Y3RvcihlbHQ6IEVsZW1lbnRSZWYsIEBJbmplY3QoSE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1MpIGhvc3RDbGFzczogc3RyaW5nKSB7XG5cdFx0c3VwZXIoZWx0LCBob3N0Q2xhc3MpO1xuXHR9XG59Il19