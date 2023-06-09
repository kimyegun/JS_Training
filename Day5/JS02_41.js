if (true) {
    var functionScopeValue = 'global'; 
    let blockScopeValue = 'local';
}
console.log(functionScopeValue); //global
console.log(blockScopeValue); //ReferenceError