"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var toPascalCase_1 = require("../utils/toPascalCase");
module.exports = {
    name: 'make:react-component',
    description: 'Create a bootstrap backend project for node js',
    run: function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, success, error, info, parameters, template, filesystem, name, nameCamelCase, exportLine;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = toolbox.print, success = _a.success, error = _a.error, info = _a.info, parameters = toolbox.parameters, template = toolbox.template, filesystem = toolbox.filesystem;
                    name = parameters.first;
                    if (!name) {
                        error('You must type the name of the component');
                        return [2 /*return*/];
                    }
                    nameCamelCase = toPascalCase_1.default(name);
                    exportLine = "export { " + nameCamelCase + " } from './" + nameCamelCase + "/" + name + "' \n";
                    filesystem.append('src/components/index.js', exportLine);
                    info("Creating component " + name);
                    return [4 /*yield*/, template.generate({
                            template: 'js/react-js/component/component.css',
                            target: "src/components/" + name + "/" + name + ".css"
                        })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, template.generate({
                            template: 'js/react-js/component/component.js.ejs',
                            target: "src/components/" + name + "/" + name + ".js",
                            props: { name: name, value: toPascalCase_1.default(name) }
                        })];
                case 2:
                    _b.sent();
                    success("Generated " + name);
                    return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1yZWFjdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvbWFrZS1yZWFjdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzREFBZ0Q7QUFFaEQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsV0FBVyxFQUFFLGdEQUFnRDtJQUM3RCxHQUFHLEVBQUUsVUFBTyxPQUF1Qjs7Ozs7b0JBRS9CLEtBSUUsT0FBTyxNQUpzQixFQUF0QixPQUFPLGFBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsRUFDN0IsVUFBVSxHQUdSLE9BQU8sV0FIQyxFQUNWLFFBQVEsR0FFTixPQUFPLFNBRkQsRUFDUixVQUFVLEdBQ1IsT0FBTyxXQURDLENBQ0Q7b0JBRUwsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7b0JBRTdCLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ1QsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7d0JBQ2hELHNCQUFNO3FCQUNQO29CQUVLLGFBQWEsR0FBRyxzQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUVsQyxVQUFVLEdBQUcsY0FBWSxhQUFhLG1CQUFjLGFBQWEsU0FBSSxJQUFJLFNBQU0sQ0FBQTtvQkFFckYsVUFBVSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQTtvQkFFeEQsSUFBSSxDQUFDLHdCQUFzQixJQUFNLENBQUMsQ0FBQTtvQkFFbEMscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQzs0QkFDdEIsUUFBUSxFQUFFLHFDQUFxQzs0QkFDL0MsTUFBTSxFQUFFLG9CQUFrQixJQUFJLFNBQUksSUFBSSxTQUFNO3lCQUM3QyxDQUFDLEVBQUE7O29CQUhGLFNBR0UsQ0FBQTtvQkFFRixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUN0QixRQUFRLEVBQUUsd0NBQXdDOzRCQUNsRCxNQUFNLEVBQUUsb0JBQWtCLElBQUksU0FBSSxJQUFJLFFBQUs7NEJBQzNDLEtBQUssRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssRUFBRSxzQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO3lCQUMzQyxDQUFDLEVBQUE7O29CQUpGLFNBSUUsQ0FBQTtvQkFFRixPQUFPLENBQUMsZUFBYSxJQUFNLENBQUMsQ0FBQTs7OztTQUM3QjtDQUNGLENBQUEifQ==