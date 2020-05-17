//BY: Ben Clauser Ringia
//Movie Comparison App w/ autocomplete widget

//DEBOUNCE
const debounce = (func,delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null,args);
        },delay); // keeps track of how many arguments every 1sec
    };
};