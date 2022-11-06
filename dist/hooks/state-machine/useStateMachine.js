import { useContext, useEffect, useState } from "react";
import { AutocompleteProContext } from "../../context";
var useStateMachine = function (_a) {
    var init = _a.init, states = _a.states;
    var _b = useState(states[init !== null && init !== void 0 ? init : 0]), currentState = _b[0], setState = _b[1]; //init state
    var _c = useState(null), previous = _c[0], setPrevious = _c[1];
    var _d = useState(null), selectedValue = _d[0], setSelectedValue = _d[1];
    var autocompleteContext = useContext(AutocompleteProContext);
    useEffect(function () {
        console.log("Current State: ", currentState);
        console.log("Previous State: ", previous);
    }, [currentState, setState, previous, setPrevious]);
    useEffect(function () {
        autocompleteContext === null || autocompleteContext === void 0 ? void 0 : autocompleteContext.updateProviderState(currentState);
    }, [currentState, setState]);
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
        if (previous && (currentState === null || currentState === void 0 ? void 0 : currentState.onSelectedCondition)) {
            setState(findState((_a = currentState === null || currentState === void 0 ? void 0 : currentState.onSelectedCondition) === null || _a === void 0 ? void 0 : _a.call(currentState, previous, selectedValue)));
        }
        else {
            nextState();
        }
    };
    var reset = function () {
        setState(states[0]);
        setPrevious(null);
    };
    var data = function () {
        if (typeof currentState.value === 'function') {
            return currentState.value(previous, selectedValue);
        }
        return currentState.value;
    };
    return {
        nextState: nextState,
        data: data,
        change: change,
        state: currentState,
        reset: reset,
        updateSelected: setSelectedValue
    };
};
export default useStateMachine;
