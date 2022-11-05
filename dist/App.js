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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from './logo.svg';
import './App.css';
function App() {
    return (_jsx("div", __assign({ className: "App" }, { children: _jsxs("header", __assign({ className: "App-header" }, { children: [_jsx("img", { src: logo, className: "App-logo", alt: "logo" }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to reload."] }), _jsx("a", __assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" }))] })) })));
}
export default App;
