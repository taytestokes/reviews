# Reviews

Reviews is an application to allow businesses to manage the responses and opinions of their clientele.

## Motivation

In this day in age, the most valuable resource that one can collect is data. The motivation behind this application was make an easy and accessible way for
businesses to take advantage of the data that has been generated from the reviews of their clientele. This goal is accomplished through creating
a user interface that is easily consumable to the human eye through the use of data visualizations and clear data data exposure.

## Setup and Installation

1. Install Node
    
    Download node through their webpage

    ```
    https://nodejs.org/en/
    ```

    Using Homebrew

    ```
    brew install node
    ```

    Validate Node has been installed

    ```
    node -v
    ```

2. Install Git

    Download Git through their webpage

    ```
    https://git-scm.com/downloads
    ```

    Using Homebrew

    ```
    brew install git
    ```

    Validate Git has been installed

    ```
    git -v
    ```

3. Clone this repo to your local machine

    Using HTTP

    ```
    https://github.com/taytestokes/reviews.git
    ```

    Using SSH

    ```
    git@github.com:taytestokes/reviews.git
    ```

4. Install Dependencies

    Using NPM

    ```
    npm install
    ```

    Using Yarn

    ```
    yarn add
    ```

5. Run the application locally

    ```
    npm run start
    ```
    
## Testing

This application aims to gather testing coverage with the use of unit, integration, and end to end tests.

Run the test suite for unit and integration tests:

```
npm run test
```

Run the test suite for end to end tests

```
npm run cypress
```

## Technologies

- Create React App - Used to bootstrap the application to use React, Webpack, and Babel.
- TailwindCSS - Used to manage the styling for the application through the use of their utility classes.
- Axios - Used to handle making HTTP requests.
- Date-fns - Used to handle manipulating and formatting dates.
- D3 - Used for data visualization.
- Jest - Used for writing unit tests.
- React Testing Library - Used for writing integrations tests on the components.
- Cypress - Used for creating end to end tests.

## Contributing

Pull requests welcome!
