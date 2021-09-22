const items = ["item1", "item2", "item3"];

const person = {
    name: "bob",
}
// first syntax
/* module.exports.items = items;
module.exports.person = person; */

//second syntax

module.exports = { items, person };
