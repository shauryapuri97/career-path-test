# Career Path Test

This is a sample application that allows users to take a career path test and submit their results.

### Time taken: 3 hours

https://github.com/shauryapuri97/career-path-test/assets/23358500/8181f0ce-67e7-4b7c-971b-6b2c12367fa8

## How to run

`npm install` -> `npm run dev`

## Features

1. User management for new / existing users: We achieved this using URL search params, we extract the `user` param from the URL and display the state of the application  accordingly.

<img width="1438" alt="Screenshot 2023-10-12 at 00 08 28" src="https://github.com/shauryapuri97/career-path-test/assets/23358500/09384015-9a8a-4e85-9f96-b971962819d5">

2. User can enter a new user / existing user.

<img width="1439" alt="Screenshot 2023-10-12 at 00 08 50" src="https://github.com/shauryapuri97/career-path-test/assets/23358500/ef801d40-791f-4711-8130-5da13fe86619">

3. Result page for users to see the results if they have already submitted the results

<img width="1439" alt="Screenshot 2023-10-12 at 00 13 52" src="https://github.com/shauryapuri97/career-path-test/assets/23358500/3651afc7-42e5-44ee-8b3e-4176298780f7">


## Limitations and improvements due to time limits
1. Improve styling by standardising and generalising the styles across the application.
2. Query for data in thunk and make use of promises to give informed feedback to the user on the state of the application.
3. Manage state in the slice (redux) to avoid `window.location.refresh` upon finishing the test for the app to get latest submission data for the user.
4. Create own Likert scale component which will be more customisable and flexible to standard application needs instead of using a third party component library that made it stuff and required a few workarounds.
