// <T> - geerics type, который мы можель использовать в аргументе

function logTime<T>(val: T): T {
  console.log(new Date());
  return val;
}

logTime<string>('string');