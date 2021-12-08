# F1 Mobiquity Challenge

This is a single page application that
presents a list that shows the F1 world champions starting from 2005 until now.

Clicking on an item shows the list of the winners for every race for the selected year.

All this information is loaded using an asynchronous API call. During the duration of the API call it shows a `loading...` text to greet the user.

It is using [Ergast Developer API](http://ergast.com/mrd/) for this purpose.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Architectural Info/Decisions

This app has been developed keeping in mind the readability and scalibility for future.
It is using `react-router` to route between different pages - Home Page and Selected Year Page which are contained in a folder `pages`.
This has been done to keep a level of separation between page level components and other re-usable components.
Frameworks like Next.JS and Gatsby use the similar structure.

A `components` folder has been added to contain all other re-usable components which (if needed later) can be further classified into atoms, molecules... etc 
as per atomic design principles.

An `api` folder contains all the logic for API calls which this app can make. This has been done in order to segregate the async logic and separation of concerns. It uses URLs from a constant file to reduce refactor need in future.
We are using `axios` to make fetch calls. This makes it easier to make the calls as well as configure them later when required.
A `caching` concept has also been introduced in the API call with the help of session storage of client's browser.
This will cache the responses of all the API calls being made by the user in their own browser which can later be used when the same API call is made. This kind of caching is safe to use in this case as the past racing data is unlikely to change.

It is using `react-testing-library` for unit tests along with `jest`. 

It is also using [sematic-ui](https://react.semantic-ui.com/) for the generic react coponents like Lists and Cards. This makes it easy to develop an app with some consistent UX.
On top of that it has also got a few CSS classes where required. These styles are stored in a single css file as of now for the sake of simplicity, which can later be divisioned into their own files as per the component classification.
