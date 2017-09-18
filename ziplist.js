const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(list1, list2) {
  const list3 = [];
  for (let x = 0; x < list1.length; x++) {
    list3.push(list1[x], list2[x]);
  }
  return list3;
}
console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(test1, test2));
