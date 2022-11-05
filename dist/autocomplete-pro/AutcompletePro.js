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
import { jsx as _jsx } from "react/jsx-runtime";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useStateMachine } from "../hooks";
var AutocompletePro = function (_a) {
    var states = _a.states, change = _a.change;
    var _b = useStateMachine(states), data = _b.data, nextState = _b.nextState;
    var _c = useState(""), fullValue = _c[0], setValue = _c[1];
    return (_jsx(Autocomplete, { id: "free-solo-demo", freeSolo: true, disableClearable: true, value: fullValue, onInputChange: function (event, value) {
            //changeCondition(value);
            nextState();
        }, onChange: function (event, value) {
            setValue("".concat(fullValue, " ").concat(value));
            change === null || change === void 0 ? void 0 : change(value);
        }, options: data ? data.map(function (item) { return item.value; }) : [], renderInput: function (params) { return _jsx(TextField, __assign({}, params)); } }));
};
export default AutocompletePro;
