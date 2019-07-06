(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Oswald\" />\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Connect4';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _router_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/app-routing.module */ "./src/router/app-routing.module.ts");
/* harmony import */ var _views_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/game/game.component */ "./src/views/game/game.component.ts");
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/game-board/game-board.component */ "./src/components/game-board/game-board.component.ts");
/* harmony import */ var _modules_store_store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/store/store.module */ "./src/modules/store/store.module.ts");
/* harmony import */ var _components_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/information-panel/information-panel.component */ "./src/components/information-panel/information-panel.component.ts");
/* harmony import */ var _components_result_screen_result_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/result-screen/result-screen.component */ "./src/components/result-screen/result-screen.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/nav-bar/nav-bar.component */ "./src/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/home/home.component */ "./src/views/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _views_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"],
                _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_5__["GameBoardComponent"],
                _components_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_7__["InformationPanelComponent"],
                _components_result_screen_result_screen_component__WEBPACK_IMPORTED_MODULE_8__["ResultScreenComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _router_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_modules_store_store_module__WEBPACK_IMPORTED_MODULE_6__["StoreModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/game-board/game-board.component.css":
/*!************************************************************!*\
  !*** ./src/components/game-board/game-board.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".connect-four-board {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-top: 180px;\r\n  }\r\n  \r\n  .connect-four-row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .connect-four-column:hover {\r\n    background-color: #fafafa;\r\n  }\r\n  \r\n  .connect-four-cell {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 80px;\r\n    width: 80px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-size: 42px;\r\n  }\r\n  \r\n  .empty-piece {\r\n    opacity: 0.3;\r\n  }\r\n"

/***/ }),

/***/ "./src/components/game-board/game-board.component.html":
/*!*************************************************************!*\
  !*** ./src/components/game-board/game-board.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"root\">\r\n  <div>\r\n     <div class=\"connect-four-board\">\r\n        <div *ngFor=\"let row of getRows()\" class=\"connect-four-row\">\r\n          <div *ngFor=\"let cell of row; let i = index\">\r\n            <div *ngIf=\"cell == 0\" class=\"connect-four-cell\" (click)=\"move(i)\"><span role=\"img\" aria-label=\"empty-piece\" class=\"piece empty-piece\">⚪</span></div>\r\n            <div *ngIf=\"cell == 1\" class=\"connect-four-cell\" (click)=\"move(i)\"><span role=\"img\" aria-label=\"red-piece\" class=\"piece red-piece\">🔴</span></div>\r\n            <div *ngIf=\"cell == -1\" class=\"connect-four-cell\" (click)=\"move(i)\"><span role=\"img\" aria-label=\"black-piece\" class=\"piece black-piece\">⚫</span></div>\r\n          </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/components/game-board/game-board.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/game-board/game-board.component.ts ***!
  \***********************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/store/store.module */ "./src/modules/store/store.module.ts");
/* harmony import */ var _models_players_human__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/players/human */ "./src/models/players/human.ts");
/* harmony import */ var _models_players_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/players/ai */ "./src/models/players/ai.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent(store) {
        this.store = store;
    }
    GameBoardComponent.prototype.getRows = function () {
        if (this.store._board == undefined)
            return [];
        return this.store._board.board;
    };
    GameBoardComponent.prototype.move = function (column) {
        return __awaiter(this, void 0, void 0, function () {
            var playedMove;
            var _this = this;
            return __generator(this, function (_a) {
                playedMove = null;
                if (this.store._board._currentPlayer instanceof _models_players_human__WEBPACK_IMPORTED_MODULE_2__["Human"]) {
                    playedMove = this.store._board._currentPlayer.doMove(this.store._board, column);
                    if (playedMove) {
                        this.store._invalidMove = null;
                        if (this.store._board._currentPlayer instanceof _models_players_human__WEBPACK_IMPORTED_MODULE_2__["Human"]) {
                            this.store._timer.reset();
                            return [2 /*return*/];
                        }
                        setTimeout(function () {
                            playedMove = _this.aiMove();
                        }, 50);
                    }
                    else
                        this.store._invalidMove = "Invalid move!";
                }
                return [2 /*return*/];
            });
        });
    };
    GameBoardComponent.prototype.firstAiMove = function () {
        var playedMove = null;
        if (this.store._board._currentPlayer instanceof _models_players_ai__WEBPACK_IMPORTED_MODULE_3__["AI"] && this.store._board.lastMove == -1) {
            playedMove = this.aiMove();
        }
    };
    GameBoardComponent.prototype.aiMove = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.store._board._currentPlayer.doMove(_this.store._board));
        }).then(function () { return _this.store._timer.reset(); });
    };
    GameBoardComponent.prototype.timerCountDown = function () {
        var _this = this;
        var interval = setInterval(function () {
            if (_this.store._timer == null) {
                clearInterval(interval);
                return;
            }
            _this.store._timer.tick();
            if (_this.store._timer.timeString == 0) {
                _this.store._board.randomMove();
                _this.store._timer.reset();
                setTimeout(function () {
                    if (_this.store._board._currentPlayer instanceof _models_players_ai__WEBPACK_IMPORTED_MODULE_3__["AI"])
                        _this.aiMove();
                }, 100);
            }
        }, 1000);
    };
    GameBoardComponent.prototype.ngOnInit = function () {
        this.timerCountDown();
        this.firstAiMove();
    };
    GameBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-board',
            template: __webpack_require__(/*! ./game-board.component.html */ "./src/components/game-board/game-board.component.html"),
            styles: [__webpack_require__(/*! ./game-board.component.css */ "./src/components/game-board/game-board.component.css")]
        }),
        __metadata("design:paramtypes", [_modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__["StoreModule"]])
    ], GameBoardComponent);
    return GameBoardComponent;
}());



/***/ }),

/***/ "./src/components/information-panel/information-panel.component.css":
/*!**************************************************************************!*\
  !*** ./src/components/information-panel/information-panel.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    font-size: 32px;\r\n  }\r\n\r\n.red {\r\ncolor: #cc1111;\r\n}\r\n  "

/***/ }),

/***/ "./src/components/information-panel/information-panel.component.html":
/*!***************************************************************************!*\
  !*** ./src/components/information-panel/information-panel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gameEnded() == false\">\r\n  <div *ngIf=\"currentPlayer() == 1\" class=\"status\"><h1>Current Player: <span class=\"red\">Red</span></h1></div>\r\n  <div *ngIf=\"currentPlayer() == -1\" class=\"status\"><h1>Current Player: Black</h1></div>\r\n  <h3 *ngIf=\"isHuman()\" class=\"status\">{{timerTime()}}</h3>\r\n  <h3 *ngIf=\"store._invalidMove != null\" class=\"status red\">{{store._invalidMove}}</h3>\r\n  <!-- <div *ngIf=\"!isHuman()\" class=\"loader\">\r\n    <img src=\"/assets/spinner.svg\">\r\n    <p>Loading movies</p>\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/components/information-panel/information-panel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/components/information-panel/information-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: InformationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPanelComponent", function() { return InformationPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/store/store.module */ "./src/modules/store/store.module.ts");
/* harmony import */ var _models_timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/timer/timer */ "./src/models/timer/timer.ts");
/* harmony import */ var _models_players_human__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/players/human */ "./src/models/players/human.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationPanelComponent = /** @class */ (function () {
    function InformationPanelComponent(store) {
        this.store = store;
    }
    InformationPanelComponent.prototype.currentPlayer = function () {
        return this.store._board._currentPlayer._number;
    };
    InformationPanelComponent.prototype.gameEnded = function () {
        if (this.store._board.winner != null)
            return true;
        return false;
    };
    InformationPanelComponent.prototype.startTimer = function () {
        var seconds = 10;
        this.store._timer = new _models_timer_timer__WEBPACK_IMPORTED_MODULE_2__["Timer"](seconds);
    };
    InformationPanelComponent.prototype.timerTime = function () {
        if (this.store._timer == null)
            return "";
        return this.store._timer.timeString;
    };
    InformationPanelComponent.prototype.isHuman = function () {
        if (this.store._board.currentPlayer instanceof _models_players_human__WEBPACK_IMPORTED_MODULE_3__["Human"])
            return true;
        return false;
    };
    InformationPanelComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    InformationPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-information-panel',
            template: __webpack_require__(/*! ./information-panel.component.html */ "./src/components/information-panel/information-panel.component.html"),
            styles: [__webpack_require__(/*! ./information-panel.component.css */ "./src/components/information-panel/information-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__["StoreModule"]])
    ], InformationPanelComponent);
    return InformationPanelComponent;
}());



/***/ }),

/***/ "./src/components/nav-bar/nav-bar.component.css":
/*!******************************************************!*\
  !*** ./src/components/nav-bar/nav-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300');\r\n.container, .menu, .nav {\r\n  position: absolute;\r\n}\r\n.container {\r\n  margin: auto;\r\n  top: 10%;\r\n  left: 50%;\r\n  margin-left: -20px;\r\n}\r\n#toggle {\r\n  display: none;\r\n}\r\n.menu {\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 56px;\r\n    top: 10%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-size: 62px;\r\n    font-family:'Josefin Sans', sans-serif;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n.menu::before,\r\n.menu::after {\r\n  position: absolute;\r\n  -webkit-transition: 0.4s ease;\r\n  transition: 0.4s ease;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n.menu:before {\r\n  content: \"M \\00a0 \\00a0 \\00a0 \\00a0 \\00a0U\";\r\n  top: -60px;\r\n  left: -100%;\r\n  width: 215px;\r\n}\r\n.menu:after {\r\n  content: \"N\";\r\n  top: 50px;\r\n  left: 96%;\r\n}\r\n.menu:hover::before,\r\n.menu:hover::after {\r\n  top: -4.3px;\r\n  opacity: 1;\r\n  -webkit-transition: 0.2s ease, opacity 0.17s 0.03s ease-in;\r\n  transition: 0.2s ease, opacity 0.17s 0.03s ease-in;\r\n}\r\n.bar {\r\n  width: 80%;\r\n  height: 3px;\r\n  background: black;\r\n  margin: 0 auto 18px;\r\n  -webkit-transition: -webkit-transform 0.4s ease;\r\n  transition: -webkit-transform 0.4s ease;\r\n  transition: transform 0.4s ease;\r\n  transition: transform 0.4s ease, -webkit-transform 0.4s ease;\r\n}\r\n.nav {\r\n  -webkit-transform: translateY(-10%);\r\n          transform: translateY(-10%);\r\n  opacity: 0;\r\n  top: 13px;\r\n  left: -50px;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n  background: white;\r\n  width: 150px;\r\n  border-radius: 5px;\r\n  -webkit-transform: translateY(0%);\r\n          transform: translateY(0%);\r\n  box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.nav a {\r\n  text-align: center;\r\n  display: block;\r\n  margin: 20px 0;\r\n  color: black;\r\n  text-decoration: none;\r\n  font-family: 'Roboto', sans-serif;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n}\r\n#toggle:checked ~ .nav {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(10%);\r\n          transform: translateY(10%);\r\n}\r\n#toggle:checked ~ .menu {\r\n  box-shadow: 0 0 0 0 transparent;\r\n}\r\n"

/***/ }),

/***/ "./src/components/nav-bar/nav-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/components/nav-bar/nav-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <input type=\"checkbox\" id=\"toggle\" />\r\n    <label class=\"menu\" for=\"toggle\">\r\n      <div class=\"bar\"></div>\r\n      <div class=\"bar\"></div>\r\n      <div class=\"bar\"></div>\r\n    </label>\r\n  <nav class=\"nav\">\r\n      <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n  </nav>\r\n  </div>"

/***/ }),

/***/ "./src/components/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/components/result-screen/result-screen.component.css":
/*!******************************************************************!*\
  !*** ./src/components/result-screen/result-screen.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color:#00A591; /* Green */\r\n  border: none;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 10px;\r\n  width: 125px;\r\n}\r\nbutton:hover {\r\n  opacity: 0.5;\r\n}\r\n.modal {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.modal-body {\r\n  width: 200px;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  padding: 15px;\r\n}\r\n.modal-content {\r\n  padding: 15px;\r\n  font-size: x-large;\r\n}\r\n.modal-footer {\r\n  overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/components/result-screen/result-screen.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/result-screen/result-screen.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gameWinner() != null\">\r\n  <div class=\"modal\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"modal-content\">\r\n        <h1>{{gameWinner()}}</h1>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"goHome()\">\r\n          <p>Home</p>\r\n        </button>\r\n        <button (click)=\"resetGame()\">\r\n          <p>Restart</p>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/components/result-screen/result-screen.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/result-screen/result-screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultScreenComponent", function() { return ResultScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/store/store.module */ "./src/modules/store/store.module.ts");
/* harmony import */ var _models_players_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/players/ai */ "./src/models/players/ai.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultScreenComponent = /** @class */ (function () {
    function ResultScreenComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    ResultScreenComponent.prototype.gameWinner = function () {
        if (this.store._board.winner != null && this.store._board.winner != 0)
            return this.store._board.winner._name + " has won the game";
        else if (this.store._board.winner != null && this.store._board.winner == 0)
            return "It's a draw";
        else
            return null;
    };
    ResultScreenComponent.prototype.goHome = function () {
        this.router.navigate(['home']);
    };
    ResultScreenComponent.prototype.resetGame = function () {
        var _this = this;
        this.store._board.reset();
        this.store._timer.reset();
        if (this.store._board._currentPlayer._number != 1)
            this.store._board._currentPlayer = this.store._board.nextPlayer();
        if (this.store._board._currentPlayer instanceof _models_players_ai__WEBPACK_IMPORTED_MODULE_2__["AI"]) {
            return new Promise(function (resolve) {
                resolve(_this.store._board._currentPlayer.doMove(_this.store._board));
            });
        }
    };
    ResultScreenComponent.prototype.ngOnInit = function () { };
    ResultScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-result-screen",
            template: __webpack_require__(/*! ./result-screen.component.html */ "./src/components/result-screen/result-screen.component.html"),
            styles: [__webpack_require__(/*! ./result-screen.component.css */ "./src/components/result-screen/result-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__["StoreModule"]])
    ], ResultScreenComponent);
    return ResultScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/board/board.ts":
/*!***********************************!*\
  !*** ./src/models/board/board.ts ***!
  \***********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(playerOne, playerTwo) {
        this._rows = 6;
        this._columns = 7;
        this._empty = 0;
        this._red = 1;
        this._black = 2;
        this._players = [];
        this._winner = null;
        this._lastMove = -1;
        this.createNewGrid();
        this._players.push(playerOne, playerTwo);
        this.chooseRandomStartingPlayer();
    }
    Board.prototype.createNewGrid = function () {
        var _this = this;
        this._board = Array(this._rows)
            .fill(null)
            .map(function () { return Array(_this._columns).fill(_this._empty); });
    };
    Board.prototype.chooseRandomStartingPlayer = function () {
        var rand = Math.floor(Math.random() * 2);
        this._currentPlayer = this.players[rand];
    };
    Board.prototype.reset = function () {
        this.createNewGrid();
        this._winner = null;
        this.chooseRandomStartingPlayer();
    };
    Board.prototype.getAvailableMoves = function () {
        var movesArray = [];
        for (var c = 0; c < this._columns; c++) {
            if (this._board[0][c] == this._empty)
                movesArray.push(c);
        }
        return movesArray;
    };
    Board.prototype.randomMove = function () {
        var moves = this.getAvailableMoves();
        var rand = Math.floor(Math.random() * moves.length) + 1;
        this.playMove(moves[rand]);
    };
    Board.prototype.playMove = function (move) {
        if (!this.getAvailableMoves().includes(move))
            return false;
        if (this._winner != null)
            return false;
        for (var r = this._rows - 1; r >= 0; r--) {
            if (this._board[r][move] == this._empty) {
                this._board[r][move] = this._currentPlayer._number;
                this._currentPlayer = this.nextPlayer();
                var winner = this.getWinner();
                if (this.getAvailableMoves().length == 0)
                    this._winner = winner;
                if (winner != 0)
                    this._winner = winner;
                this._lastMove = move;
                return true;
            }
        }
    };
    Board.prototype.undoMove = function () {
        for (var r = this._rows - 1; r >= 0; r--) {
            if (this._board[r][this._lastMove] != this._empty)
                this._board[r][this._lastMove] = this._empty;
        }
        this._currentPlayer = this.nextPlayer();
    };
    Board.prototype.nextPlayer = function () {
        var _this = this;
        var nextPlayer = null;
        this._players.forEach(function (player) {
            if (player != _this._currentPlayer)
                nextPlayer = player;
        });
        return nextPlayer;
    };
    Board.prototype.getPlayerByNumber = function (value) {
        if (value == this._empty)
            return this._empty;
        var player = null;
        this._players.forEach(function (p) {
            if (p._number == value)
                player = p;
        });
        return player;
    };
    Board.prototype.getWinner = function () {
        for (var r = 0; r < this._rows; r++) {
            for (var c = 0; c < this._columns; c++) {
                var player = this.board[r][c];
                if (player == this._empty)
                    continue; // don't check empty slots
                if (c + 3 < this._columns &&
                    player == this.board[r][c + 1] && // look right
                    player == this.board[r][c + 2] &&
                    player == this.board[r][c + 3])
                    return this.foundWinner(player);
                if (r + 3 < this._rows) {
                    if (player == this.board[r + 1][c] && // look up
                        player == this.board[r + 2][c] &&
                        player == this.board[r + 3][c])
                        return this.foundWinner(player);
                    if (c + 3 < this._columns &&
                        player == this.board[r + 1][c + 1] && // look up & right
                        player == this.board[r + 2][c + 2] &&
                        player == this.board[r + 3][c + 3])
                        return this.foundWinner(player);
                    if (c - 3 >= 0 &&
                        player == this.board[r + 1][c - 1] && // look up & left
                        player == this.board[r + 2][c - 2] &&
                        player == this.board[r + 3][c - 3])
                        return this.foundWinner(player);
                }
            }
        }
        this._lastMove = -1;
        return this._empty;
    };
    Board.prototype.foundWinner = function (player) {
        this._lastMove = -1;
        return this.getPlayerByNumber(player);
    };
    Object.defineProperty(Board.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "board", {
        get: function () {
            return this._board;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "currentPlayer", {
        get: function () {
            return this._currentPlayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "lastMove", {
        get: function () {
            return this._lastMove;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "empty", {
        get: function () {
            return this._empty;
        },
        enumerable: true,
        configurable: true
    });
    return Board;
}());



/***/ }),

/***/ "./src/models/negamax/evaluate.ts":
/*!****************************************!*\
  !*** ./src/models/negamax/evaluate.ts ***!
  \****************************************/
/*! exports provided: Evaluate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evaluate", function() { return Evaluate; });
var Evaluate = /** @class */ (function () {
    function Evaluate() {
    }
    Evaluate.prototype.score = function (state, depth) {
        var score = 0;
        var rows = state.rows;
        var columns = state.columns;
        var player1 = 1;
        var player2 = -1;
        if (depth == 0) {
            console.log(state.board);
        }
        if (state.currentPlayer._number == 1) {
            player1 = 1;
            player2 = -1;
        }
        else if (state.currentPlayer._number == -1) {
            player1 = -1;
            player2 = 1;
        }
        // if(state.getWinner()._number == 1)
        //   score = score + 10;
        // if(state.getWinner()._number == -1){
        //   score = score - 10;
        //   if(depth == 1){
        //     let jugh = 1;
        //   }
        // }
        // return score/depth;
        var b = state.board;
        for (var r = 0; r < rows; r++) {
            // iterate rows, bottom to top
            for (var c = 0; c < columns; c++) {
                // iterate columns, left to right
                if (b[r][c] == 0)
                    continue;
                // don't check empty slots
                else if (b[r][c] == player1) {
                    // we are checking a computers tile
                    if (c == 3 && player1 == b[r][c]) {
                        //middle column pieces are worth more
                        score = score + 2;
                    }
                    if (c + 3 < columns &&
                        player1 == b[r][c + 1] && // look right
                        player1 == b[r][c + 2] &&
                        player1 == b[r][c + 3]) {
                        //player1 4 in a row horizontally
                        score = score + 10000;
                    }
                    if (c + 2 < columns &&
                        player1 == b[r][c + 1] && // look right
                        player1 == b[r][c + 2]) {
                        //player1 3 in a row horizontally
                        score = score + 5;
                    }
                    if (c + 1 < columns && player1 == b[r][c + 1]) {
                        //player1 2 in a row horizontally
                        score = score + 2;
                    }
                    if (r + 3 < rows &&
                        player1 == b[r + 1][c] && // look up
                        player1 == b[r + 2][c] &&
                        player1 == b[r + 3][c]) {
                        //player1 4 in a row vertically
                        score = score + 10000;
                    }
                    if (r + 2 < rows &&
                        player1 == b[r + 1][c] && // look up
                        player1 == b[r + 2][c]) {
                        //player1 3 in a row vertically
                        score = score + 5;
                    }
                    if (r + 1 < rows && player1 == b[r + 1][c]) {
                        //player1 2 in a row vertically
                        score = score + 2;
                    }
                    if (r + 3 < rows &&
                        c + 3 < columns &&
                        player1 == b[r + 1][c + 1] && // look up & right
                        player1 == b[r + 2][c + 2] &&
                        player1 == b[r + 3][c + 3]) {
                        //player1 4 in a row diagonally
                        score = score + 10000;
                    }
                    if (r + 2 < rows &&
                        c + 2 < columns &&
                        player1 == b[r + 1][c + 1] && // look up & right
                        player1 == b[r + 2][c + 2]) {
                        //player1 3 in a row diagonally
                        score = score + 5;
                    }
                    if (r + 1 < rows && c + 1 < columns && player1 == b[r + 1][c + 1]) {
                        //player1 2 in a row diagonally
                        score = score + 2;
                    }
                    if (r + 3 < rows &&
                        c - 3 >= 0 &&
                        player1 == b[r + 1][c - 1] && // look up & left
                        player1 == b[r + 2][c - 2] &&
                        player1 == b[r + 3][c - 3]) {
                        //player1 4 in a row diagonally
                        score = score + 10000;
                    }
                    if (r + 2 < rows &&
                        c - 2 >= 0 &&
                        player1 == b[r + 1][c - 1] && // look up & left
                        player1 == b[r + 2][c - 2]) {
                        //player1 3 in a row diagonally
                        score = score + 5;
                    }
                    if (r + 1 < rows && c - 1 >= 0 && player1 == b[r + 1][c - 1]) {
                        //player1 2 in a row diagonally
                        score = score + 2;
                    }
                }
                else if (b[r][c] == player2) {
                    // we are checking a players tile
                    if (c == 3 && player2 == b[r][c]) {
                        //middle column pieces are worth more
                        score = score - 2;
                    }
                    if (c + 3 < columns &&
                        player2 == b[r][c + 1] && // look right
                        player2 == b[r][c + 2] &&
                        player2 == b[r][c + 3]) {
                        //player2 4 in a row horizontally
                        score = score - 10000;
                    }
                    if (c + 2 < columns &&
                        player2 == b[r][c + 1] && // look right
                        player2 == b[r][c + 2]) {
                        //player2 3 in a row horizontally
                        score = score - 5;
                    }
                    if (c + 1 < columns && player2 == b[r][c + 1]) {
                        //player2 2 in a row horizontally
                        score = score - 2;
                    }
                    if (r + 3 < rows &&
                        player2 == b[r + 1][c] && // look up
                        player2 == b[r + 2][c] &&
                        player2 == b[r + 3][c]) {
                        //player2 4 in a row vertically
                        score = score - 10000;
                    }
                    if (r + 2 < rows &&
                        player2 == b[r + 1][c] && // look up
                        player2 == b[r + 2][c]) {
                        //player2 3 in a row vertically
                        score = score - 5;
                    }
                    if (r + 1 < rows && player2 == b[r + 1][c]) {
                        //player2 2 in a row vertically
                        score = score - 2;
                    }
                    if (r + 3 < rows &&
                        c + 3 < columns &&
                        player2 == b[r + 1][c + 1] && // look up & right
                        player2 == b[r + 2][c + 2] &&
                        player2 == b[r + 3][c + 3]) {
                        //player2 4 in a row diagonally
                        score = score - 10000;
                    }
                    if (r + 2 < rows &&
                        c + 2 < columns &&
                        player2 == b[r + 1][c + 1] && // look up & right
                        player2 == b[r + 2][c + 2]) {
                        //player2 3 in a row diagonally
                        score = score - 5;
                    }
                    if (r + 1 < rows && c + 1 < columns && player2 == b[r + 1][c + 1]) {
                        //player2 2 in a row diagonally
                        score = score - 2;
                    }
                    if (r + 3 < rows &&
                        c - 3 >= 0 &&
                        player2 == b[r + 1][c - 1] && // look up & left
                        player2 == b[r + 2][c - 2] &&
                        player2 == b[r + 3][c - 3]) {
                        //player2 4 in a row diagonally
                        score = score - 10000;
                    }
                    if (r + 2 < rows &&
                        c - 2 >= 0 &&
                        player2 == b[r + 1][c - 1] && // look up & left
                        player2 == b[r + 2][c - 2]) {
                        //player2 3 in a row diagonally
                        score = score - 5;
                    }
                    if (r + 1 < rows && c - 1 >= 0 && player2 == b[r + 1][c - 1]) {
                        //player2 2 in a row diagonally
                        score = score - 2;
                    }
                }
            }
        }
        return score / depth;
    };
    return Evaluate;
}());



/***/ }),

/***/ "./src/models/negamax/negamax.ts":
/*!***************************************!*\
  !*** ./src/models/negamax/negamax.ts ***!
  \***************************************/
/*! exports provided: Negamax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Negamax", function() { return Negamax; });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate */ "./src/models/negamax/evaluate.ts");


var Negamax = /** @class */ (function () {
    function Negamax() {
        this._evaluate = new _evaluate__WEBPACK_IMPORTED_MODULE_1__["Evaluate"]();
    }
    Negamax.prototype.aiMove = function (board, player) {
        var baseAlpha = -Infinity, baseBeta = Infinity, maximumDepth = 6, initialDepth = 0, bestMove, evaluate = this._evaluate;
        var winningMove = this.getWinningMove(player._number, board);
        if (winningMove != -1)
            return winningMove;
        var blockingMove = this.getWinningMove(board.nextPlayer()._number, board);
        if (blockingMove != -1)
            return blockingMove;
        var nm = negamax(board, initialDepth, baseAlpha, baseBeta, 1);
        return bestMove;
        function negamax(gameState, depth, alpha, beta, color) {
            if (gameState.getAvailableMoves().length == 0 || depth >= maximumDepth) {
                var s = evaluate.score(gameState, depth) * color;
                return s;
            }
            var max = -Infinity;
            var values = [];
            var moves = [];
            var availableMoves = gameState.getAvailableMoves();
            var offset = gameState.columns - availableMoves.length;
            for (var i = 0; i < availableMoves.length; i++) {
                var newState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(gameState);
                newState.playMove(i + offset);
                values.push(-negamax(newState, depth + 1, -beta, -alpha, -color));
                moves.push(availableMoves[i]);
            }
            var index = indexOfMax(values);
            var a = values[index];
            if (a > max) {
                max = a;
                bestMove = moves[index];
            }
            if (a > alpha)
                alpha = a;
            if (alpha >= beta)
                return alpha;
            return max;
        }
        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }
            var max = arr[0];
            var maxIndex = 0;
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }
            return maxIndex;
        }
    };
    Negamax.prototype.getWinningMove = function (playerId, gameBoard) {
        var rows = gameBoard.rows;
        var columns = gameBoard.columns;
        var empty = gameBoard.empty;
        var board = gameBoard.board;
        for (var r = 0; r < rows; r++) {
            // iterate rows, bottom to top
            for (var c = 0; c < columns; c++) {
                // iterate columns, left to right
                var player = playerId;
                if (board[r][c] == empty) {
                    if (r != rows - 1) {
                        if (board[r + 1][c] == empty)
                            continue;
                    }
                    if (c + 3 < columns &&
                        player == board[r][c + 1] && // look right
                        player == board[r][c + 2] &&
                        player == board[r][c + 3])
                        return c;
                    if (c - 3 > 0 &&
                        player == board[r][c - 1] && // look left
                        player == board[r][c - 2] &&
                        player == board[r][c - 3])
                        return c;
                    if (r + 3 < rows) {
                        if (player == board[r + 1][c] && // look up
                            player == board[r + 2][c] &&
                            player == board[r + 3][c])
                            return c;
                        if (c + 3 < columns &&
                            player == board[r + 1][c + 1] && // look up & right
                            player == board[r + 2][c + 2] &&
                            player == board[r + 3][c + 3])
                            return c;
                        if (c - 3 >= 0 &&
                            player == board[r + 1][c - 1] && // look up & left
                            player == board[r + 2][c - 2] &&
                            player == board[r + 3][c - 3])
                            return c;
                    }
                }
            }
        }
        return -1;
    };
    return Negamax;
}());



/***/ }),

/***/ "./src/models/players/ai.ts":
/*!**********************************!*\
  !*** ./src/models/players/ai.ts ***!
  \**********************************/
/*! exports provided: AI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI", function() { return AI; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/models/players/player.ts");
/* harmony import */ var _negamax_negamax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../negamax/negamax */ "./src/models/negamax/negamax.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var AI = /** @class */ (function (_super) {
    __extends(AI, _super);
    function AI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._negamax = new _negamax_negamax__WEBPACK_IMPORTED_MODULE_1__["Negamax"];
        return _this;
    }
    AI.prototype.doMove = function (board) {
        return (board.playMove(this._negamax.aiMove(board, this)));
    };
    return AI;
}(_player__WEBPACK_IMPORTED_MODULE_0__["Player"]));



/***/ }),

/***/ "./src/models/players/human.ts":
/*!*************************************!*\
  !*** ./src/models/players/human.ts ***!
  \*************************************/
/*! exports provided: Human */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Human", function() { return Human; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/models/players/player.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human.prototype.doMove = function (board, move) {
        return (board.playMove(move));
    };
    return Human;
}(_player__WEBPACK_IMPORTED_MODULE_0__["Player"]));



/***/ }),

/***/ "./src/models/players/player.ts":
/*!**************************************!*\
  !*** ./src/models/players/player.ts ***!
  \**************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(color) {
        this._color = color;
        this.setPlayerInfo();
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.setPlayerInfo = function () {
        if (this.color == "red") {
            this._name = "Player 1";
            this._number = 1;
        }
        else {
            this._name = "Player 2";
            this._number = -1;
        }
    };
    return Player;
}());



/***/ }),

/***/ "./src/models/timer/timer.ts":
/*!***********************************!*\
  !*** ./src/models/timer/timer.ts ***!
  \***********************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
var Timer = /** @class */ (function () {
    function Timer(time) {
        this._time = time + 1;
        this._timeLeft = time;
    }
    Timer.prototype.tick = function () {
        this._timeLeft -= 1;
        this._timeString = this._timeLeft.toString();
    };
    Timer.prototype.reset = function () {
        this._timeLeft = this._time;
    };
    Object.defineProperty(Timer.prototype, "timeString", {
        get: function () {
            return this._timeString;
        },
        enumerable: true,
        configurable: true
    });
    return Timer;
}());



/***/ }),

/***/ "./src/modules/store/store.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/store/store.module.ts ***!
  \*******************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StoreModule = /** @class */ (function () {
    function StoreModule() {
        this._board = null;
        this._invalidMove = null;
        this._timer = null;
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/router/app-routing.module.ts":
/*!******************************************!*\
  !*** ./src/router/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/game/game.component */ "./src/views/game/game.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/home/home.component */ "./src/views/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'game', component: _views_game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/views/game/game.component.css":
/*!*******************************************!*\
  !*** ./src/views/game/game.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".connect-four-board {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-top: 180px;\r\n  }\r\n  \r\n  .connect-four-row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .connect-four-column:hover {\r\n    background-color: #fafafa;\r\n  }\r\n  \r\n  .connect-four-cell {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 80px;\r\n    width: 80px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-size: 42px;\r\n  }\r\n  \r\n  .empty-piece {\r\n    opacity: 0.3;\r\n  }\r\n  \r\n  .status {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n      \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\r\n      \"Segoe UI Symbol\";\r\n    font-size: 32px;\r\n  }\r\n  \r\n  .player-red {\r\n    color: #cc1111;\r\n  }\r\n  "

/***/ }),

/***/ "./src/views/game/game.component.html":
/*!********************************************!*\
  !*** ./src/views/game/game.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-start-screen *ngIf=\"this.store._board == null\"></app-start-screen> -->\r\n<div *ngIf=\"this.store._board != null\">\r\n    <app-nav-bar></app-nav-bar>\r\n    <app-game-board></app-game-board>\r\n    <app-information-panel></app-information-panel>\r\n    <app-result-screen></app-result-screen>\r\n</div>"

/***/ }),

/***/ "./src/views/game/game.component.ts":
/*!******************************************!*\
  !*** ./src/views/game/game.component.ts ***!
  \******************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/store/store.module */ "./src/modules/store/store.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(store) {
        this.store = store;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/views/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/views/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__["StoreModule"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/views/home/home.component.css":
/*!*******************************************!*\
  !*** ./src/views/home/home.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-container {\r\n    max-width: 45rem;\r\n    margin: 0 auto;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.sub {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 300px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10%;\r\n}\r\n\r\n.auto-grid {\r\n    padding-top: 32px;\r\n    --auto-grid-min-size: 16rem;\r\n  }\r\n\r\n.auto-grid > * {\r\nmax-width: 400px;\r\n}\r\n\r\n.auto-grid > * + * {\r\nmargin-top: 1rem;\r\n}\r\n\r\n@supports(display: grid) {\r\n    .auto-grid {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));\r\n        grid-gap: 1rem;\r\n        -webkit-padding-start: 0;\r\n                padding-inline-start: 0;\r\n    }\r\n\r\n    .auto-grid > * {\r\n        max-width: unset;\r\n    }\r\n\r\n    .auto-grid > * + * {\r\n        margin-top: unset;\r\n    }\r\n}\r\n\r\n.grid-col img {\r\n    border-radius: 0;\r\n    width: 100%;\r\n    border-radius: 2px;\r\n    display: block;\r\n    height: 200px;\r\n}\r\n\r\nli:hover {\r\n    opacity: .5;\r\n}\r\n\r\n.grid-col {\r\n    border-color: rgba(0, 0, 0, 0.15);\r\n    margin: 0;\r\n    border-color: rgba(144, 144, 144, 0.25);\r\n    margin-bottom: 2rem;\r\n    background: #FFF;\r\n    cursor: pointer;\r\n}\r\n\r\n.grid-col .content {\r\n    padding: 3rem;\r\n    padding-top: 0;\r\n}\r\n\r\n.align-center {\r\n    text-align: center;\r\n}\r\n\r\n.grid-col p:after {\r\n    content: '';\r\n    position: absolute;\r\n    margin: auto;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 50%;\r\n    height: 1px;\r\n}\r\n\r\n.grid-col p {\r\n    text-transform: uppercase;\r\n    font-size: .85rem;\r\n    font-weight: 300;\r\n    margin: 0 0 .25rem 0;\r\n    padding: 0 0 .75rem 0;\r\n    letter-spacing: .25rem;\r\n    color: #999999;\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n    .grid-col h2 {\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nli:hover {\r\n    position: relative; \r\n    top: -5px;\r\n    opacity: 0.5;\r\n}"

/***/ }),

/***/ "./src/views/home/home.component.html":
/*!********************************************!*\
  !*** ./src/views/home/home.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-container\">\r\n    <div class=\"sub\">\r\n        <h1 class=\"title\">Choose your mode</h1>\r\n    <ul class=\"auto-grid\">\r\n        <li class=\"grid-col\" (click)=\"singleplayer()\">\r\n          <img src=\"../../assets/boss.svg\" alt=\"Avatar\" style=\"width:100%\" class=\"grid-col\">\r\n          <div class=\"content\">\r\n            <header class=\"align-center\">\r\n              <h2>Singleplayer</h2> \r\n              <p>Play against AI</p> \r\n            </header>\r\n          </div>\r\n        </li>\r\n        <li class=\"grid-col\" (click)=\"multiplayer()\">\r\n            <img src=\"../../assets/network.svg\" alt=\"Avatar\" style=\"width:100%\" class=\"grid-col\">\r\n            <div class=\"content\">\r\n              <header class=\"align-center\">\r\n                <h2>Multiplayer</h2> \r\n                <p>Play against a friend</p> \r\n              </header>\r\n            </div>\r\n          </li>\r\n      </ul>\r\n  </div>"

/***/ }),

/***/ "./src/views/home/home.component.ts":
/*!******************************************!*\
  !*** ./src/views/home/home.component.ts ***!
  \******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/store/store.module */ "./src/modules/store/store.module.ts");
/* harmony import */ var _models_board_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/board/board */ "./src/models/board/board.ts");
/* harmony import */ var _models_players_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/players/ai */ "./src/models/players/ai.ts");
/* harmony import */ var _models_players_human__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/players/human */ "./src/models/players/human.ts");
/* harmony import */ var _models_timer_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/timer/timer */ "./src/models/timer/timer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, store) {
        this.router = router;
        this.store = store;
        this.maxTime = 10;
    }
    HomeComponent.prototype.singleplayer = function () {
        this.store._board = new _models_board_board__WEBPACK_IMPORTED_MODULE_2__["Board"](new _models_players_ai__WEBPACK_IMPORTED_MODULE_3__["AI"]("red"), new _models_players_human__WEBPACK_IMPORTED_MODULE_4__["Human"]("black"));
        this.store._timer = new _models_timer_timer__WEBPACK_IMPORTED_MODULE_5__["Timer"](this.maxTime);
        this.goToGame();
    };
    HomeComponent.prototype.multiplayer = function () {
        this.store._board = new _models_board_board__WEBPACK_IMPORTED_MODULE_2__["Board"](new _models_players_human__WEBPACK_IMPORTED_MODULE_4__["Human"]("red"), new _models_players_human__WEBPACK_IMPORTED_MODULE_4__["Human"]("black"));
        this.store._timer = new _models_timer_timer__WEBPACK_IMPORTED_MODULE_5__["Timer"](this.maxTime);
        this.goToGame();
    };
    HomeComponent.prototype.goToGame = function () {
        this.router.navigate(['game']);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.store._board = null;
        this.store._timer = null;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/views/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _modules_store_store_module__WEBPACK_IMPORTED_MODULE_1__["StoreModule"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fadi\Documents\GitHub\Connect4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map