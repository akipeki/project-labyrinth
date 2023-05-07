Project Labyrinth

This week was pair programming. I worked with Andreas, and we made a Labyrinth with Redux. We did different styling to get the full benefit from the learning experience. The story was not so fantastic for me, so I created a wow effect by making these images. I'm happy with them and how odd the vibes they are giving.

The problem

We have talked A LOT with Andreas to make everything more understandable for each other. And at least my polite Swedish friend has told me that even he has learned a lot by doing this. ;-)

I feel tired but happy, and all this crosslinking between React files makes more sense now.

Despite the project, we have also discussed what ideal work would be for us, etc. –Good week.

View it live

https://road-labyrinth.netlify.app/

Description about the logic behind these files:

React application built using Redux for state management. The game consists of several components and is centered around navigating a labyrinth. Let's go through the important parts of the code, focusing on the flow of information and the interactions between components.

App.js: This is the entry point of your application. It sets up the Redux store, combining the reducers, and provides the store to the rest of the application using the Provider component. It also renders the Firstscreen component.

Firstscreen.js: This component decides whether to show the Startpage or the Gamepage based on whether the user has entered a name or not. It uses the userName value from the Redux store to make this decision.

Startpage.js: This component displays a form where the user can enter their name and start the game. When the form is submitted, it dispatches the setUserName and startGame actions to update the Redux store with the entered username and initiate the game.

Gamepage.js: This component is responsible for the main game logic. It gets the game's current state (description, moves, loading, name, history, and coordinates) from the Redux store. When the Loader component signals that the content is loaded, it shows the game's content, such as the description, moves, and buttons to navigate the labyrinth. It also handles restarting the game and moving to the next step.

Loader.js: This component is responsible for loading the background images and showing a "Loading.." text while the images are being loaded. It receives an onContentLoaded callback as a prop, which it calls when the content (image) has been loaded. The Loader component uses the

CoordsImageDisplay component to handle the actual image display and loading process.

CoordsImageDisplay.js: This component displays the background image based on the current coordinates of the labyrinth. It uses the onImageLoad and onContentLoaded callbacks to signal when the image has been loaded. It achieves this by having a hidden img element (the HiddenImage component) with an onLoad event handler that calls the provided callbacks.

The flow of information and interactions between the components can be summarized as follows:

App.js initializes the Redux store and renders the Firstscreen component.
Firstscreen decides whether to show the Startpage or the Gamepage.

If the Startpage is shown, the user enters their name and starts the game, which updates the Redux store and triggers a switch to the Gamepage.

The Gamepage handles the game logic, and uses the Loader component to load the background images.
The Loader component uses the CoordsImageDisplay component to handle the actual image display and loading process.

When the background image is loaded, the CoordsImageDisplay component calls the onImageLoad and onContentLoaded callbacks, which signal the Loader and Gamepage components that the content has been loaded.

The Loader component is working in conjunction with the CoordsImageDisplay component to load the images and show the "Loading.." text. It sets the state variables, such as imageLoaded and displayLoadingText, based on the loading status of the images. The Loader component also manages the event listeners for game restarts and handles the minimum display time for the loading text.
