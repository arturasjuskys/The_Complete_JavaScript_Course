'use strict';

/*===============================================================================================================================================
                Section 15: Mapty App: OOP, Geolocation, External Libraries, and More!
223. Section Intro
224. Section Roadmap
225. Project Overview
226. How to Plan a Web Project
227. Using the Geolocation API
228. Displaying a Map Using Leaflet Library
229. Displaying a Map Marker
230. Rendering Workout Input Form
231. Project Architecture
232. Refactoring for Project Archictecture
233. Managing Workout Data: Creating Classes
234. Creating a New WOrkout
235. Rendering Workouts
236. Move to Marker On Click
237. Working with Local Storage
238. Final Considerations
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
226. How to Plan a Web Project`);
/*==============================================================*/

/*

1. User Stories
    Description of the application's functionality from user's 'perspective'. All user stories put together describe the entire application.
2. Features
3. Flowchart
    WHAT we will build
4. Architecture
    HOW we will build it

*/

/*

1. User Stories:
    Description of the application's functionality form user's perspective

    Common Format:
        As a [ type of user ], I want [ an action ] so that [ a benefit ]
             [     Who?     ]         [   What?   ]         [    Why?   ]

        1. As a user, I want to "log my running with location, distance, time, place and steps/minte", so I can keep a log of all my running.
        2. As a user, I want to "log my cycling workouts with location, distance, time, speed and elevation gain", so I can keep a log of all my cycling.
        3. As a user, I want to "see all my workouts at a glance", so I can esaily track my progress over time.
        4. As a user, I want to "alse see my workouts on a map", so I can easily check where I workout the most.
        5. As a user, I want to "see all my workouts when I leave the app and come back later", so I can keep using the app over time.

*/

/*

2. Features
    * Map where user clicks to add new workout (bset way to get location coordinates)
    * Geolocation to display map at current location (more user friendly)
    * Form to input distance, time, pace, steps/minute
    * Form to input distance, time, speed, elevation gain
    * Display all workouts in a list
    * Display all workouts on the map
    * Store workouts data in the browser using 'local storage API'
    * On page load, read the saved data from local storage and display it

*/

/*

3. Flowchart
    Features
        1. Geolocation to display map at current location
        2. Map where user clicks to add new workout
        3. Form to input distance, time, pace, steps/minute
        4. Form to input distance, time, speed, elevation gain
        5. Dsiplay workouts in the list
        6. Display all workouts on the map
        7. Store workouts data in the browser
        8. On page load, read the saved data and display it
        9. Move map to workout location on click

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
227. Using the Geolocation API`);
/*==============================================================*/

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { longitude } = position.coords;
            const { latitude } = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        },
        function () {
            alert('Could not get your location');
        }
    );

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
238. Final Considerations`);
/*==============================================================*/

/*

10 Additional Feature Ideas: Challenges
    * Ability to edit a workout
    * Ability to delete a workout
    * Ability to delete all workouts
    * Ability to sort worouts by a certain field (e.g. distance)
    * Re-build Running and Cycling objects coming from local storage
    * More realistic error and confirmation mesage
    * Ability to position the map to show all worouts [ very hard ]
    * Ability to draw lines and shapes instead of just points [ very hard ]
    * Goecode location from coordinates ("Run in Faro, Portugal") [ only after asynchronous JavaScript section ]
    * Display waether data for workout time and place [ only after asynchronous JavaScript section ]

*/
