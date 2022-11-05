import { useState } from "react";
var defaultState = {
    type: "",
    value: [],
    callback: function () { },
    next: ""
};
var useStateMachine = function (_a) {
    var init = _a.init, states = _a.states;
    var _b = useState(states[init !== null && init !== void 0 ? init : 0]), currentState = _b[0], setState = _b[1]; //init state
    var _c = useState(defaultState), previous = _c[0], setPrevious = _c[1];
    // useEffect(() => {
    //   console.log(`Current State: `, currentState);
    //   console.log(`Previous State: `, previous);
    // }, [currentState, setState, previous, setPrevious]);
    var findState = function (next) {
        var result = {
            type: "",
            value: [],
            callback: function () { },
            next: ""
        };
        for (var i = 0; i < states.length; i++) {
            if (states[i].type === next) {
                result = states[i];
                break;
            }
        }
        return result;
    };
    var nextState = function () {
        for (var i = 0; i < states.length; i++) {
            if (states[i].type === (currentState === null || currentState === void 0 ? void 0 : currentState.type)) {
                setPrevious(states[i]);
                setState(findState(states[i].next));
                break;
            }
        }
    };
    var change = function (selectedValue) {
        var _a;
        if (previous && (currentState === null || currentState === void 0 ? void 0 : currentState.condition)) {
            setState(findState((_a = currentState === null || currentState === void 0 ? void 0 : currentState.condition) === null || _a === void 0 ? void 0 : _a.call(currentState, previous, selectedValue)));
        }
        else {
            nextState();
        }
    };
    return {
        nextState: nextState,
        data: currentState.value,
        change: change,
        state: currentState
    };
};
export default useStateMachine;
