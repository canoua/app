// в таком исполнении пользы нет
let c: 'test' = 'test'; 

// покажем другой пример

type actionType = 'up' | 'down';

// ошибка
function performeAction(action: actionType): 1 | 2 {
  switch(action) {
    case 'down':
      return 1;
      console.log('up');
  }
  // return 1;
}
