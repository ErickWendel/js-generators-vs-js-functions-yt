const database = ['๐', '๐ฅ', 'โ๐ป', '๐', '๐งต']
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
emoji:๐
emoji:๐ฅ
emoji:โ๐ป
emoji:๐
emoji:๐งต
*/

