// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , 
// আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর 
// ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

const stuff = {
    name: {
        first: 'Raihan',
        second: 'Sharif'
    },
    isActive: true,
    salary: 50000,
    balance: 80000,
    assistant: {
        firstAssistant: 'Sanaul',
        secondAssistant: 'Shakib'
    },
    assistantSalary: [20000, 30000],
    colleagues: ['monir', 'Sohel', 'Kamrul', 'Nazmul'],
    expense : function (treat, tax, tips){
        this.balance = (this.balance  - treat - tax - tips)
        return this.balance
    }
}

/* const currentBalance = stuff.expense(5000, 3000, 2000);
console.log(stuff.name.first, stuff.name.second, "Current Balance is: ", currentBalance);  */

// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
// এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন 
// এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const stuffDetail = ` 
name: ${stuff.name.first} ${stuff.name.second} 
assistants: ${stuff.assistant.firstAssistant}, 
            ${stuff.assistant.secondAssistant}
bestColleagues: ${stuff.colleagues[1]}

}}
`
// console.log(stuffDetail);


// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

const number = () => {return 89}
// console.log(number()); 


//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const divideSeven = (num) => {return num / 7}
// console.log(divideSeven(21));

//৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে 
// যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
 const calculation = (num1, num2) => { return (num1 + num2) / 2}
//  console.log(calculation(5, 5));

//৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট 
//প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const multiCalculation = (num1, num2) => {
    const first = num1 + 7;
    const second = num2 + 7;
    return first + second
}
// console.log(multiCalculation(3, 3));
//৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা 
//array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numbers = [7, 14, 21, 28, 35]
const divideSevenTwo =  numbers.map(x => x / 7)
// console.log(divideSevenTwo);


// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

/* Map */

/* const number = [4, 8, 2, 6, 3]
// const output = number.map(number => number * 2);
const output = number.map(x => x * 2)
console.log(output);
// output: [ 8, 16, 4, 12, 6 ] 
// Ekhane output e e doubleIT formula use na kore just map ta ke doubleIt er jaigai replace kora hoiche.  Ei ta o uporer tar same ////karon ekhane uporer formula declare na kore direct formula ta ke add kora hoiche.
*/

/* forEach */
/* const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
products.forEach(x => console.log(x.name));
// map return dei kintu foreach kono return dei na. shudhu for loop  kore element ber kora jai
 */


/* filter & Find */

/* const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const blacks = products.filter(product => product.color == 'pink');
console.log(blacks);
Output: [
  { name: 'mobile phone', price: 15000, color: 'black' },
  { name: 'smart watch', price: 3000, color: 'black' }
]

Filter যত গুলা ইলিমেন্টকে পাবে সব একটা এরের মধ্যে দিবে। না পাইলে খালি এরে দিবে।
Find শুধু প্রথম এলেমেন্টকে একটা অবজেক্টে দিবে। না পাইলে undefined দিবে। 

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'pink' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
 
const pinkItem = products.find(product => product.color == 'black');
console.log(pinkItem);
 */

// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
const {firstAssistant, secondAssistant} = stuff.assistant;
// console.log(firstAssistant);
const balance = stuff.assistantSalary[1];
// console.log(balance);


// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 

// https://modest-goldberg-8d7b00.netlify.app/
// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে /{id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 
// https://modest-goldberg-8d7b00.netlify.app/

// ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

// https://modest-goldberg-8d7b00.netlify.app/