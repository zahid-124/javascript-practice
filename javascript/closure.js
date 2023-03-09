for(var i=0; i<5; i++){
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 0);
} // output: 5, 5, 5, 5, 5

const counter = (function(){
    let val = 0;
    const increase = function(){
        return val += 1;
    }
    return increase;
})();

console.log(counter()); // output: 1
console.log(counter()); // output: 2
console.log(counter()); // output: 3
console.log(counter()); // output: 4
console.log(counter()); // output: 5
