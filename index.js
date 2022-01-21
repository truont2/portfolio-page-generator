const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name'
        },

        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location'
        },

        {
            type: 'input',
            message: 'What do you want for a contact heading?',
            name: 'contact'
        },

        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github'
        },

        {
            type: 'input',
            message: 'what is your linkedin link',
            name: 'Linklink'
        },

        {
            type: 'input',
            message: 'What is your Linkedin username?',
            name: 'linkName'
        }
    ]) .then(response => {
        const obj = JSON.stringify(response,null,4);
        // for(key in response) {
        //     fs.appendFile(`${response.name}.txt`, `${response[`${key}`]}\n`, (error) => {
        //         if(error) {
        //             throw error;
        
        //         }
        //     });
        // } 

        const htmlTxt = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <style>
                header {
                    background: lightslategray;
                }
            </style>
        
            <header>
                <h1>Hi! My name is ${response.name}</h1>
                <p>I am from ${response.location}</p>
                <h2>${response.contact}<button id="contactBtn">Contact me</button></h2>
            </header>
            
        
            <main>
                <ul>
                    <li>Github Username: ${response.github}</li>
                    <li>LinkedIn link: <a href="${response.Linklink}"></a></li>
                </ul>
            </main>
        
            <!-- <script>
                const contactBtn = document.querySelector("#contactBtn");
                
                contactBtn.addEventListener("click", function() {
                    wwindow.location = "${response.Linklink}";
                });
        
            </script> -->
        </body>
        </html>`;
        
        fs.writeFile(`${response.name}.html`, htmlTxt, (error) => {
                    if(error) {
                        throw error;
                    }
                });
    })