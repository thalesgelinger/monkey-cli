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
module.exports = {
    name: 'make:node-api',
    description: 'Create a bootstrap backend project for node js',
    run: function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, success, error, info, spin, first, system, template, filesystem, name, spinner;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = toolbox.print, success = _a.success, error = _a.error, info = _a.info, spin = _a.spin, first = toolbox.parameters.first, system = toolbox.system, template = toolbox.template, filesystem = toolbox.filesystem;
                    name = first;
                    if (!name) {
                        error('You must type the name of the project');
                        return [2 /*return*/];
                    }
                    info("Creating " + name + ":");
                    spinner = spin('Creating main files');
                    return [4 /*yield*/, template.generate({
                            template: 'js/node/template-node-api/src/index.js.ejs',
                            target: name + "/src/index.js"
                        })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, template.generate({
                            template: 'js/node/template-node-api/src/routes.js.ejs',
                            target: name + "/src/routes.js",
                            props: { name: name }
                        })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, template.generate({
                            template: 'js/node/template-node-api/.babelrc',
                            target: name + "/.babelrc"
                        })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, template.generate({
                            template: 'js/node/template-node-api/package.json.ejs',
                            target: name + "/package.json",
                            props: { name: name }
                        })];
                case 4:
                    _b.sent();
                    spinner.stop();
                    spinner.succeed('Created main files');
                    spinner = spin('Downloading node_modules');
                    return [4 /*yield*/, system.run("cd " + name + " && npm install")];
                case 5:
                    _b.sent();
                    spinner.stop();
                    spinner.succeed('Downloaded node_modules');
                    filesystem.append(name + "/.gitignore", 'node_modules');
                    success("Generated " + name);
                    return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1ub2RlLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tYWtlLW5vZGUtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUksRUFBRSxlQUFlO0lBQ3JCLFdBQVcsRUFBRSxnREFBZ0Q7SUFDN0QsR0FBRyxFQUFFLFVBQU8sT0FBdUI7Ozs7O29CQUUvQixLQUtFLE9BQU8sTUFMNEIsRUFBNUIsT0FBTyxhQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFBLEVBQ3JCLEtBQUssR0FJakIsT0FBTyxpQkFKVSxFQUNuQixNQUFNLEdBR0osT0FBTyxPQUhILEVBQ04sUUFBUSxHQUVOLE9BQU8sU0FGRCxFQUNSLFVBQVUsR0FDUixPQUFPLFdBREMsQ0FDRDtvQkFFTCxJQUFJLEdBQUcsS0FBSyxDQUFBO29CQUVsQixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNULEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO3dCQUM5QyxzQkFBTTtxQkFDUDtvQkFFRCxJQUFJLENBQUMsY0FBWSxJQUFJLE1BQUcsQ0FBQyxDQUFBO29CQUVyQixPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7b0JBQ3pDLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7NEJBQ3RCLFFBQVEsRUFBRSw0Q0FBNEM7NEJBQ3RELE1BQU0sRUFBSyxJQUFJLGtCQUFlO3lCQUMvQixDQUFDLEVBQUE7O29CQUhGLFNBR0UsQ0FBQTtvQkFFRixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUN0QixRQUFRLEVBQUUsNkNBQTZDOzRCQUN2RCxNQUFNLEVBQUssSUFBSSxtQkFBZ0I7NEJBQy9CLEtBQUssRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO3lCQUNoQixDQUFDLEVBQUE7O29CQUpGLFNBSUUsQ0FBQTtvQkFFRixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUN0QixRQUFRLEVBQUUsb0NBQW9DOzRCQUM5QyxNQUFNLEVBQUssSUFBSSxjQUFXO3lCQUMzQixDQUFDLEVBQUE7O29CQUhGLFNBR0UsQ0FBQTtvQkFFRixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUN0QixRQUFRLEVBQUUsNENBQTRDOzRCQUN0RCxNQUFNLEVBQUssSUFBSSxrQkFBZTs0QkFDOUIsS0FBSyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7eUJBQ2hCLENBQUMsRUFBQTs7b0JBSkYsU0FJRSxDQUFBO29CQUNGLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDZCxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUE7b0JBRXJDLE9BQU8sR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtvQkFDMUMscUJBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFNLElBQUksb0JBQWlCLENBQUMsRUFBQTs7b0JBQTdDLFNBQTZDLENBQUE7b0JBRTdDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDZCxPQUFPLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7b0JBRTFDLFVBQVUsQ0FBQyxNQUFNLENBQUksSUFBSSxnQkFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFBO29CQUV2RCxPQUFPLENBQUMsZUFBYSxJQUFNLENBQUMsQ0FBQTs7OztTQUM3QjtDQUNGLENBQUEifQ==