function f(a) {
    console.log(a)
  }

  function throttle (f, ms){

    let value;

    let delay = false;

    return function wrapper (arg){
        if(delay){
            value = arg;
            return;
        } 
        
        f.call (this, arg);

        delay = true;

        setTimeout(() => {
            delay = false;
            if (value) {
                wrapper.call (this, arg = value);
                value = 0;
            }            
        }, ms)
    }
  }
  
  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);
  
  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)
  f1000(4);
  f1000(5);
  
  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано