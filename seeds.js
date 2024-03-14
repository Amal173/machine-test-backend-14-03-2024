const mongoose = require('mongoose');
const question = require('./models/questions')
mongoose.connect('mongodb+srv://amalkrstackup:amalkrstackup@projectcluster0.g0x7i3h.mongodb.net/machine-test-14-03-2024?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected");
}).catch((err)=>{
console.log(err);
})

const questions=[
    {
        no:1,
        question:" Which type of JavaScript language is ___?",
        options:["Object-Oriented","Object-Based","Assembly-language","High-level"],
        rightAnswer:"Object-Oriented"
    },
    {
        no:2,
        question:" Which one of the following also known as Conditional Expression?",
        options:["Alternative to if-else","Switch statement","If-then-else statement","immediate if"],
        rightAnswer:"immediate if"
    },
    {
        no:3,
        question:"In JavaScript, what is a block of statement?",
        options:["Conditional block","block that combines a number of statements into a single compound statement","both conditional block and a single statement","block that contains a single statement"],
        rightAnswer:"block that combines a number of statements into a single compound statement"
    },
    {
        no:4,
        question:"  When interpreter encounters an empty statements, what it will do?",
        options:["Shows a warning","Prompts to complete the statement","Throws an error","Ignores the statements"],
        rightAnswer:"Ignores the statements"
    },
    {
        no:5,
        question:"The function and  var are known as",
        options:["Keywords","Data types","Declaration statements","Prototypes"],
        rightAnswer:"Declaration statements"
    },
    {
        no:6,
        question:"Which one of the following is the correct way for calling the JavaScript code?",
        options:["Preprocessor","Triggering Event","RMI","Function/Method"],
        rightAnswer:"Function/Method"
    },
    {
        no:7,
        question:"Which of the following variables takes precedence over the others if the names are the same?",
        options:["Global variable","The local element","The two of the above","None of the above"],
        rightAnswer:"The local element"
    },
    {
        no:8,
        question:"Which of the following type of a variable is volatile?",
        options:["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],
        rightAnswer:"Mutable variable"
    },
    {
        no:9,
        question:" Which of the following option is used as hexadecimal literal beginning?",
        options:["00","0x","0X","Both 0x and 0X"],
        rightAnswer:"Both 0x and 0X"
    },
    {
        no:10,
        question:"In the JavaScript, which one of the following is not considered as an error:",
        options:["Syntax error","Missing of semicolons","Division by zero","Missing of Bracket"],
        rightAnswer:"Division by zero"
    }
]

const seedDb=async()=>{
    await question.deleteMany({});
    await question.insertMany(questions)
}

seedDb().then(()=>{
    mongoose.connection.close();
})