"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack(size) {
        var _this = this;
        if (size === void 0) { size = 10; }
        this.haystack = [];
        this.size = 0;
        this.push = function (item) {
            if (_this.haystack.length < _this.size)
                _this.haystack.push(item);
            else
                return false;
        };
        this.pop = function () {
            if (_this.isEmpty())
                return false;
            else
                return _this.haystack.pop();
        };
        this.top = function () {
            if (_this.isEmpty())
                return false;
            else
                return _this.haystack[(_this.haystack.length - 1)];
        };
        this.isEmpty = function () {
            return _this.haystack.length === 0;
        };
        this.size = size;
    }
    return Stack;
}());
exports["default"] = Stack;
