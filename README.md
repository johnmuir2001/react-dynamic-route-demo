# React Router DOM - Dynamic Routes

This repo demonstrates how to use dynamic routes and how you could get data of a selected item based on an ID that the API gives you

## Installing

This project needs styled-components and react-router-dom
```
npm install react-router-dom styled-components
```
If you are cloning the repo be sure to run this command to install all dependencies needed for this app.
```
npm install
```

## Info

This app uses dynamic routes by using the useParams method from react-router-dom. This lets you create a route with an unknown value e.g. an id in like in the App.js file for the product route.

You can then get whatever id is in the path from the Product component using the useParams method and make another API call using that ID