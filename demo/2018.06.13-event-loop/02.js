console.log('begin');

Promise.resolve()
  .then(() => {
    console.log('resolve');
  });

setTimeout(() => {
  console.log('setTimeout');
}, 0);

console.log('end');

/*
node版本：8.9.3
输出如下：
begin
end
resolve
setTimeout
*/