About the project

## Inspiration

Have you ever got EXHAUSTED from LeetCode? <br />
Have you ever felt extremely BORED when preparing for interviews? <br />
Have you ever desired to have a companion so you won’t be tortured by coding ALONE? <br />

According to our surveys sent to 45 coders, 76% of them find solving LeetCode problems boring when they are coding alone, and more than half of the coders have strongly wished to have a companion while coding. We ourselves, who are also coders tired of solo coding, especially during quarantine where everythings has to be remote, want to make a difference. Therefore, we created codely -  a multiplayer website for coders to compete with others and learn while having fun.

## What it does

In codely, users can compete with online matched coders. Coding problems and opponents are matched based on users’ rankings (bronze -> silver -> gold -> platinum -> diamond -> master). Or, users can sent invitation links to their friends to compete together. While competing, users could see the progress made by their opponent and interact with the other side via emojis & chat. After the problem is solved, we calculate the score of solution by runtime (50%), used time (30%), and memory distributuion (20%). The person with the higher score wins the match and climb the rank. 

## How we built it

Firstly, we brainstormed which React components are needed for codely.us, such as dashboard, compete page and result page. Then we split the work and assigned them to our teammates. Each of us was in charge of specific react components, and more experienced members took over the layout and logistics work. After each component is completed, the member requests pull request on our github repo, and the branch is merged after code review by at least 2 other teammates. Finally, we use Github page and Cloudflare to deploy our website.

## Challenges we ran into



## Accomplishments that we’re proud of



## What we learned



## What’s next for Codely

We are planning to add backend to fully implement our features using node.js. We will implement user registration, LeetCode scraper, multi-language complier, etc. 
----------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
