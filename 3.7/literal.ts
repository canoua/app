// в таком исполнении пользы нет
let c: 'test' = 'test'; 

// покажем другой пример
type actionType = 'up' | 'down';

function performAction(action: actionType): -1 | 2 {
  switch (action) {
    case 'down':
      return -1;
    case "up": 
      return 2;
  }
}
