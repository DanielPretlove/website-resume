"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var aos_1 = require("aos");
require("aos/dist/aos.css");
function App() {
    aos_1["default"].init();
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { "data-aos": "flip-down", "data-aos-duration": "1750" },
            react_1["default"].createElement("h2", null, "fuck"))));
}
exports["default"] = App;
