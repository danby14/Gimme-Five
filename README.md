# Gimme Five

Users get help ranking their ideas and decisions by listing up to 5 of them, and then submiting that list to the community for voting, comments, and discussion. Should I wear red shoes or black? This book idea or that one?

*This repo is for the frontend code. Backend code can be found at https://github.com/danby14/Gimme-Five-backend*

## Features

- Make / Update list of up to five items (Add, Edit, Delete)
- Idea Generators to help user come up with list items
  - Random Wiki link from external wikimedia api
  - Random news headline from external newsApi
  - Random topic
  - Random word from a random word generating external api<br />
  - Random name from an external data generating api<br />
  - Random age group<br />
  - Random selection of Who, What, When, Where, Why or How<br />
  - Magic 8-ball with 20 possible sayings
- Social (Other users help decide which item on your list of ideas or options is best)
  - Voting (With graphical representation)
  - Comments (To provide more detailed feedback on list items)

## Tech
- Layout uses styled-components
- react-chartjs-2 for displaying voting results
- react-hook-form for various user inputs
- date-fns for timestamps and more

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
