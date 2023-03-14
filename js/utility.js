"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getValue = void 0;
const getInputValue = (elementID) => {
    const inputElement = (document.getElementById(elementID));
    return inputElement.value;
};
exports.getValue = getInputValue;
const logger = (message) => {
    console.log(message);
};
exports.logger = logger;
//# sourceMappingURL=utility.js.map