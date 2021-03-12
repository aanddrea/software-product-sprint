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
/** Creates a map and adds it to the page. */
function createMap() {
    console.log("map here");
    //Hashtable<String, double> my_dict = new Hashtable<String, double>();
    //my goal is to show places i have been, add differnt coordinates to the map when you click a button, have
    // to make this in a button 
    //my gool is dictionaty the key is city name, the value is a touple of [lat, long]
    //1. picks a random place from dictionaty 
    //2. get its coordinates from city name
    //3. change here center: vaules of uluru
    
    //double lat[] = {41.881832, 34.052235, 48.864716};
    //double long[] = {-87.623177, 34.052235, 48.864716};

    //double[] lat = new double[3]; {41.881832, 34.052235, 48.864716 };
    // addind a poiter to chicago :)

    const uluru = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById('map'),
      {center: uluru,
       zoom: 16});
       // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
  });

}

