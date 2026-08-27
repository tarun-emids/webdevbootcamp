// for loops

for(let i = 0; i<5; i++){
    console.log(i)
}

for(let i = 5; i <10; i++){
    console.log(i);
}

// for each loops

fruits = ["Apple","Banana","Orange", "Mango","Pear"]
fruits.forEach((fruit, index) => {
    console.log(`${index}:${fruit}`)
});

// while loops
let count = 0
while(count < 5 ){
    console.log(count)
    count++
}

// do while loops

let x = 0;
do{
    console.log(x)
    x++;
}while(x<5)

// break & continue

for (let i = 0; i < 5; i ++) {
    if (i === 2) break; //to terminate
    console.log(i);
}

for (let i = 0; i < 5; i ++) {
    if (i === 2) continue; //to skip
    console.log(i);
}
