const database = ['🚀', '🔥', '✋🏻', '🎉', '🧵']
function * concat(data) {
  for(const item of data) {
    yield 'emoji:'.concat(item)
  }
}

function * read(data) {
   yield * concat(data)
  // or
  // for(const item of data) {
  //  yield * concat([item])
  //}
}

for(const data of read(database)) {
  console.table(data)
}
/*
emoji:🚀
emoji:🔥
emoji:✋🏻
emoji:🎉
emoji:🧵
*/

