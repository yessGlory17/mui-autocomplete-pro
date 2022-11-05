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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
var AutocompletePro = function () {
    return (_jsx(_Fragment, { children: _jsx(Autocomplete, { id: "free-solo-demo", freeSolo: true, options: [1, 2, 3, 4, 5].map(function (n) { return n.toString(); }), renderInput: function (params) { return _jsx(TextField, __assign({}, params)); } }) }));
};
export default AutocompletePro;
