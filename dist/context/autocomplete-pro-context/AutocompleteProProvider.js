var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useState } from "react";
export var AutocompleteProContext = createContext(null);
export var AutocompleteProProvider = function (_a) {
    var children = _a.children;
    var _b = useState(null), currentState = _b[0], setCurrentState = _b[1];
    var updateProviderState = function (state) {
        setCurrentState(state);
    };
    return _jsxs(AutocompleteProContext.Provider, __assign({ value: { currentState: currentState, updateProviderState: updateProviderState } }, { children: [" ", children, " "] }));
};
export default AutocompleteProProvider;
