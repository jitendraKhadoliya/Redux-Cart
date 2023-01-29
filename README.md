# Getting Started with Create React App

inside this project i am going to learn deep redux wokflow

I created component, pages, store, dir

used react router dom for making one web page

main work flow => 


    /////    created cartSlice    /////

  gave name
  gave initialState empty array
  created reducers for add and remove data
    for add i am pushing data to the initialState 
    for removeing I am returning an new array and using filter method to remove item by usind their ID

    
    //// created store  /////
        configured it

   /// showing data at nevbar///
   using useSelector hook i showed the data

    
    //// first I am fetching the data inside the home component ///

    
    /// created productSlice for fetch data inside the store ///
   
    here I creating status object that i frezzed it or can say made read only purpose though i can use it in another component and show on screen status

    i created it gave name , initialState{data , status} ,created reducers
    here first i created it meanually 
    second for error handling i used redux toolkit 

    mainually => 
        i was setting products inside the data that i located at initalState
        and with that i created setStatus method through we can change status accordingly

        exported it

     created THUNK function  =>
        THUNK => in simple language thunk is basically the piece of code that does some delayed work
        thunks are already configured inside the redux toolkit

    though thunk i was fetching the data and seting the data inside the reducer using dispatch 
    and changing the status using dispatch and providing it to setStatus


    usinf redux toolkit =>
    it same as creating thunk and here i importing createAsyncThunk from redux toolkit and in parameter i giving and name  and creating another ayanc function  
    and fething the data 

    now for error handling created extraReducers
    that is basically the arrow function and same as promise i processed further
    .addcase(where thunk fuction name.pending , there is same state and action )
    .addcase for fullfilled
    .addcase for rejected


gave provider in index.js and gave store location inside it

now i can use and learned it lot form there 








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
