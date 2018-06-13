console.log('begin');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});

console.log('end');

/*
node版本：8.9.3
输出如下：
begin
end
nextTick
setTimeout
*/