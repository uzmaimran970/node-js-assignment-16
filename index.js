"use strict";
16.; // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["kainat", "Maham", "Marium", "ayesha"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Miss` + " " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t`);
}
let new_guest = "Rubab";
let absent_guest = "kainat";
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Miss` + " " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`);
}
console.log(`Dear Miss ${absent_guest} is not comming to my birthday party`);
console.log(`good news!we are organizing big dinner table so we are inviting 3 more guests`);
guest_list.unshift('kiran');
guest_list.splice(2, 0, 'farhana');
guest_list.push('shumaila');
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Miss` + " " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`);
}
