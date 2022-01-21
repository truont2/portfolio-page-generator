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
                    text-align: center;
                }
        
                li {
                    padding: 5px;
                    width: 100%;
                    border: 1px solid black;
                    box-shadow: 0 2px 2px grey;
                }
        
                #contactBtn {
                    padding: 10px; 
                    background: lightsteelblue;
                }
        
                ul {
                    list-style: none;
                }
                img {
                    width: 100%;
                    margin: 20px auto;
                }
        
                .hidden {
          opacity:0;
        }
        .console-container {
         
          font-family:Khula;
          font-size:4em;
          text-align:center;
          height:200px;
          width:600px;
          display:block;
          position:absolute;
          color:white;
          top:0;
          bottom:0;
          left:0;
          right:0;
          margin:auto;
        }
        .console-underscore {
           display:inline-block;
          position:relative;
          top:-0.14em;
          left:10px;
        }
        
            </style>
        
            <header>
                <h1>Hi! My name is ${response.name}</h1>
                <p>I am from ${response.location}</p>
                <h2>${response.contact} <button id="contactBtn">Contact me</button></h2>
            </header>
            
        
            <main>
                <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
                <ul>
                    <li>Github Username: ${response.github}</li>
                    <li>Github Link: <a href="https://github.com/${response.github}">Link</a></li>
                    <li>LinkedIn link: <a href="https://www.linkedin.com/in/${response.Linklink}/">${response.linkName}</a></li>
                </ul>
                <img src="./javascript-fullstack.730958a2.jpg" alt="full stack developer">
            </main>
        
            <script>
                const contactBtn = document.querySelector("#contactBtn");
                
                contactBtn.addEventListener("click", function() {
                    window.location = "${response.Linklink}";
                });
        
                consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);
        
        function consoleText(words, id, colors) {
          if (colors === undefined) colors = ['#fff'];
          var visible = true;
          var con = document.getElementById('console');
          var letterCount = 1;
          var x = 1;
          var waiting = false;
          var target = document.getElementById(id)
          target.setAttribute('style', 'color:' + colors[0])
          window.setInterval(function() {
        
            if (letterCount === 0 && waiting === false) {
              waiting = true;
              target.innerHTML = words[0].substring(0, letterCount)
              window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
              }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
              waiting = true;
              window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
              }, 1000)
            } else if (waiting === false) {
              target.innerHTML = words[0].substring(0, letterCount)
              letterCount += x;
            }
          }, 120)
          window.setInterval(function() {
            if (visible === true) {
              con.className = 'console-underscore hidden'
              visible = false;
        
            } else {
              con.className = 'console-underscore'
        
              visible = true;
            }
          }, 400)
        }
            </script>
        </body>
        </html>`;
        
        fs.writeFile(`${response.name}.html`, htmlTxt, (error) => {
                    if(error) {
                        throw error;
                    }
                });
    })