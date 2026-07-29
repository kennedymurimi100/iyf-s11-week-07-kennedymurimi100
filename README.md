# iyf-s11-week-07-kennedymurimi100
# Week 7: State Management, Code Organization & Testing

## Author
- **Name:** Kennedy Murimi
- **GitHub:** [@kennedymurimi100](https://github.com/kennedymurimi100)
- **Date:** August 01, 2026

## Project Description
This week's work covers JavaScript state management patterns and moving from a single messy script into a properly organized, tested, and linted codebase. The centerpiece is a Shopping Cart app built with a centralized state module, localStorage persistence, and a simulated API layer, alongside standalone exercises on the Observer pattern, clean code practices, and debugging.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES Modules)
- Node.js
- Node's built-in `node:test` module (unit testing)
- ESLint
- Prettier
- npm

## Features
- **Shopping Cart** — add/remove items, adjust quantities, live total and item count, "Clear Cart" action
- **Persistence** — cart state survives a page refresh via `localStorage`
- **Simulated API layer** (`js/api.js`) — product data loaded asynchronously rather than hardcoded
- **Modular code structure** — state, storage, UI rendering, API calls, and utilities each live in their own file under `js/`
- **Pure, unit-tested functions** — cart total/count calculations extracted into `js/utils.js` and covered by automated tests
- **Linting & formatting** — ESLint (`eslint:recommended`) and Prettier configured and passing with zero warnings
- **Standalone practice exercises** — Observer pattern (`app.js`), meaningful naming (`js/naming-exercise.js`), avoiding magic numbers (`js/practise.js`), console debugging methods (`js/console-demo.js`), and a bug-fix exercise (`js/debug-exercise.js`)

## How to Run

**Shopping Cart app:**
1. Clone this repository
2. Open `index.html` in your browser

**Tests, linting, and formatting:**
1. Clone this repository
2. Run `npm install`
3. Run `npm test` to run the unit tests
4. Run `npm run lint` to check code quality
5. Run `npm run format` to auto-format code with Prettier

**Standalone exercise scripts** (run with Node):
```
node js/console-demo.js
node js/naming-exercise.js
node js/debug-exercise.js
node js/practise.js
```

## Lessons Learned
- How centralizing state through a single `setState`-style function (instead of scattering direct mutations) makes an app's data flow much easier to reason about and persist.
- The Observer pattern (`subscribe`/`setState`/notify listeners) as a lightweight alternative to a full state management library.
- Why reassigning an exported `let` binding (e.g. `cart = cart.filter(...)`) behaves differently from mutating it in place, and why in-place mutation (`cart.length = 0; cart.push(...)`) is the safer default in ES modules.
- Extracting pure functions (no side effects, no shared state) out of application logic makes them trivial to unit test in isolation.
- How ESLint and Prettier catch different classes of problems — ESLint for code-quality issues like unused variables, Prettier purely for consistent formatting.

## Challenges Faced
- Initially mixed unrelated exercises into the same files (e.g. a leftover contact form sitting inside what was meant to be the cart's `index.html`) — resolved by clearly separating each exercise into its own file/folder.
- Had a subtle bug where cart-clearing/removal logic reassigned the exported `cart` array instead of mutating it, which could have caused other modules to read stale data — fixed by mutating in place and adding a regression test (`test/cart.test.mjs`) to guard against it happening again.
- Forgot to route `getCartTotal`/`getCartCount` through the newly extracted pure functions in `utils.js` when setting up Task 14.5, which ESLint's `no-unused-vars` warning caught immediately — a good example of linting catching an incomplete refactor.

## Screenshots (optional)

## Live Demo (if deployed)

