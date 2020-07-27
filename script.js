let Lawrence = {
    name: 'Lawrence Adams',
    age: 39,
    birthday: 'October 13th',
    detroitGC: true,
    lifeEvents: [
        'I was born on St. Croix in the US Virgin Islands',
        'I started my first company when I was 18, Red Root Productions',
        'I started my second company when I was 23, Alta Surgical',
        'I started my third company when I was 33, Somatic Solutions'
    ],
};

if (Lawrence.detroitGC) {
    console.log(`My name is ${Lawrence.name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${Lawrence.age} years old and my birthday is ${Lawrence.birthday}`);
} else {
    console.log(`My name is ${Lawrence.name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${Lawrence.age} years old and my birthday is ${Lawrence.birthday}`);
};

for (i = 0; i < Lawrence.lifeEvents.length; i++) {
    console.log(Lawrence.lifeEvents[i]);
};

let counter = 0;
let randomNumber = 0;

while (randomNumber !== 5) {
    randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} does not equal 5`);
    } else {
        counter++
        console.log(`${randomNumber} === 5. it took ${counter} iterations to randomly generate the number 5`);
    }
}

let hours = prompt('please type the number of hours your worked');
let wage = prompt('please type the number for your hourly wage without the dollar sign');
let totalPaycheck;

if (hours > 40) {
    totalPaycheck =  (40 * wage) + ((hours - 40) * (wage*1.5));
    console.log(`Wow! your worked ${hours} hours that means you get a bonus. At ${wage}$ an hour it looks like you will receive ${totalPaycheck}`)
} else {
    totalPaycheck = hours * wage;
    console.log(`Since you are lazy and only worked ${hours} hours, you will get a regular paycheck in the amount of ${totalPaycheck}`);
};

let numberOfWeeks = 1000000/totalPaycheck;
let rounded = Math.ceil(numberOfWeeks);
console.log(rounded);
