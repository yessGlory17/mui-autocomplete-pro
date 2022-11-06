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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { useStateMachine } from "../hooks";
var AutocompletePro = function (_a) {
    var _b;
    var states = _a.states, onChange = _a.onChange, params = __rest(_a, ["states", "onChange"]);
    var _c = useStateMachine(states), data = _c.data, nextState = _c.nextState, change = _c.change, reset = _c.reset, state = _c.state, updateSelected = _c.updateSelected;
    var _d = useState(""), fullValue = _d[0], setValue = _d[1];
    useEffect(function () {
        if (fullValue === '') {
            reset();
        }
    }, [fullValue]);
    var options = function () {
        if (typeof data === 'function') {
            return data();
        }
        return data;
    };
    return (_jsx(Autocomplete, __assign({ id: "free-solo-demo", freeSolo: true, disableClearable: true, value: fullValue, onInputChange: function (event, value) {
            //changeCondition(value);
            //nextState();
            onChange === null || onChange === void 0 ? void 0 : onChange("".concat(fullValue, " ").concat(value));
        }, onChange: function (event, value) {
            setValue("".concat(fullValue, " ").concat(value));
            onChange === null || onChange === void 0 ? void 0 : onChange("".concat(fullValue, " ").concat(value));
            updateSelected(value);
            if (state.onSelectedCondition) {
                change === null || change === void 0 ? void 0 : change(value);
            }
            else {
                nextState();
            }
        }, options: (_b = options().map(function (item) { return item.value; })) !== null && _b !== void 0 ? _b : [], renderInput: function (params) { return _jsx(TextField, __assign({}, params)); } }, params)));
};
export default AutocompletePro;
