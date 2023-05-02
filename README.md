# Elo7 - Job Page

The following project was developed as proposed by the [Elo7 Programming Challenge](https://gist.github.com/elo7-developer/33a0844a9ac6953dd3e5). The project consists of a landing page that queries information via API and displays open positions. The project can be viewed in production at this [link](https://elo7-page.onrender.com/ 'https://elo7-page.onrender.com/').

## Technologies Used and Justifications

|       Scope       | Used       |
| :---------------: | ---------- |
|      Language     | Javascript |
|       Style       | SASS       |
|     Requesting     | Fetch      |
| _Framework (opt)_ | React      |

The framework chosen for the project was React.js, as it allows for quick application delivery, high performance, and the creation of reusable components. Additionally, it enables better code organization and scalability.
SASS was used for styling because it offers a range of additional functionalities than CSS and allows for better organization and maintenance of the code.
The request was made through fetch, because it is native and was proposed in the challenge.

## Running the Application

### Requirements

- Node.js 16.16.0

### `yarn install`

In the application directory, run the above command to install dependencies.

### `yarn dev`

And the above command to run the application at URL http://127.0.0.1:5173/

## Some Applied Improvements

A footer was developed for the layout, and some texts referring to Elo7 were added :). Render was used for auto-deploy, so changes are reflected in the production link.

## Proposed Improvements

<ol>
<li> I suggest adding unique IDs to the API-fetched information to be used as keys.
<li> Another suggestion would be to add the category of the positions queried in the API.
