function fAlert (text) {
    console.log(text + '777');
}

function logF (func) {
    test.result = [];

    function test (arg) {
      
      test.result.push(arg);
      func.call(this, arg);
      
    }
    return test;

}

fAlert = logF(fAlert);
fAlert1 = logF(fAlert);
fAlert('Привет');
fAlert('Пока');``
fAlert('Увидимся');
fAlert('Прощай');

console.log(fAlert.result);
console.log(fAlert1.result);
