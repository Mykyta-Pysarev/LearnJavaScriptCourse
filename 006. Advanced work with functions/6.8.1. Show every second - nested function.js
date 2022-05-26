function printNumbers(from, to){
    let timerId = setTimeout(tick = () => {
        console.log(from++);
        if(from <= to){
            timerId = setTimeout(tick, 1000);
        }
    }, 1000 );
    
         
}

printNumbers (1, 10);