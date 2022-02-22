// // Welcome

// //Pick a number between 1-20

// let maximum = parseInt(prompt("Enter a number "));
// while (!maximum) {
//     user_input = parseInt(prompt("Enter a valid number! "));
//     break;
// }

// const target_number = Math.floor(Math.random() * maximum) + 1;
// console.log(target_number);

// let guess = parseInt(prompt("Enter your First Guess: "));
// let attempts = 1;
// while (guess !== target_number) {

//     attempts++;
//     if (guess < target_number) {
//         guess = parseInt(prompt("Too Low! Try Again"));
//     } else {
//         guess = parseInt(prompt("Too High! Try Again"));
//     }
//     if (guess === target_number) {
//         break;
//     }

// }

// alert("You've Got it!!!");
// if (attempts === 1) {
//     alert(`Congratulations!!! You got it in the first try`);
// } else {
//     alert(`It took you ${attempts} attempts lol.  `);

// }

// <---------------------------------------------------------------->

// For...of loop

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// for (let subreddit of subreddits) {
//     console.log(`www.reddit.com/r/${subreddit}`);
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let number of numbers) {
//     console.log(`${number} * ${number} is: ${number * number} `)
// }


// <------------------------------------------------------------------>
// console based


// Add something to the list
const user_list = ["Hello", "World"];

function addTolist() {


    user_list.push(prompt("Add to list"))

    for (let list of user_list) {
        console.log(`You have added: ${user_list}`);
    }


}

// Display List
let existingList;

function displayList() {
    console.log(`You have ${user_list.length} items in your to-do list: `)
    // for (existingList of user_list) {
    //     console.log(`${existingList}`);
    for (let i = 0; i < user_list.length; i++) {
        console.log(`${i + 1}: ${user_list[i]}`);
    }

}


// delete specific to-do
// let me guess: gotta user array indexing 0,1,2.....

function deleteToDo() {
    console.log(displayList());
    let delete_list = parseInt(prompt(`Which to-do would you like to delete?`));

    existingList.splice[delete_list, 1];
    console.log(displayList());

}

// main loop
let user_input; //= prompt("What would you like to do?").toLowerCase();
while (user_input !== 'quit') {
    user_input = prompt("What would you like to do?").toLowerCase();

    if (user_input === 'add') {
        addTolist();
    } else if (user_input === "list") {
        displayList();
    }
    else if (user_input === 'delete') {
        deleteToDo(); s
    }
}
console.log("Goodbye!");