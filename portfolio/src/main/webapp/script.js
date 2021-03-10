// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;


}
function quotes(){
    const fun_facts =['ATLA: if I try, I fail. If I dont try, I am never going to get it', 'I am so sad wanda vison ends this week!', 
       'The office: "I am running away from my responsibilities. And it feels good.” – Michael Scott', 'I am scared of butterflies',
        'Half my family lives in Mexico!', 'My dream is to live in Seattle', 'My favorite food is breakfast food',
        'I am vegetarian 🌱 ', 'My tiktok page went viral!'];
    
    const fact = fun_facts[Math.floor(Math.random() * fun_facts.length)];

    const quotesContainer = document.getElementById('fact-container');
    quotesContainer.innerText = fact;

}
var elements = document.getElementsByClassName("column");
var i;
for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
}

