function printNumbers(from, to){
    let timerId = setInterval(calcFrom, 1000 );
    function calcFrom (){
            console.log ( from++ );
            if(from > to) clearInterval(timerId);
    }
         
}

printNumbers (1, 10);