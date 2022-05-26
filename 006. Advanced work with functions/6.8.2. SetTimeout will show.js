let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс => Will finish cycle, than will alert (log to console), i == 100000000
for(let j = 0; j < 100000000; j++) {
  i++;
}