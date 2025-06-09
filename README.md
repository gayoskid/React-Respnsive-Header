# Task Flow SaaS Website Documentation

## Idea & Planning

I started by brainstorming project ideas using ChatGPT. After refining the concept, I decided to build a **SaaS Task Management Website**.

- **Project Description:** Generated with the help of ChatGPT.
- **Initial UI Design:** Created using [usegalileo.ai](https://www.usegalileo.ai/).
- **UI Redesign:** Refined and customized using [Penpot](https://design.penpot.app/).
- **Font Source:** [Google Fonts](https://fonts.google.com/) or another specified source.

---

## Project Development

### Project Setup

**Stack:** React + Tailwind CSS (using Vite)

#### Installation & Configuration

1. **Create Project with Vite:**

   ```bash
   npm create vite@latest
   ```

2. **Setup:**

   - Enter project name
   - Choose React as the framework
   - Navigate into the project folder
   - Run:

     ```bash
     npm install
     npm run dev
     ```

3. **Install Tailwind CSS:**

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

4. **Clean Default Boilerplate:**

   - Clear `App.jsx`
   - Delete `App.css`
   - Delete `assets/` folder
   - Delete Vite favicon in `public/`
   - Clear `index.css`

5. **Configure Tailwind:**

   - Add Tailwind import to `index.css`:

     ```css
     @import "tailwindcss/base";
     @import "tailwindcss/components";
     @import "tailwindcss/utilities";
     ```

   - In `vite.config.js`:

     ```js
     import tailwindcss from "@tailwindcss/vite";

     export default {
       plugins: [tailwindcss()],
     };
     ```

---

## Header Component

### Features

- Responsive Navigation Menu
- Dark/Light Mode Toggle
- Hamburger Menu for Mobile
- Conditional User Login Button or Profile Image

### Dark Mode Toggle Implementation

1. **Theme Toggle Button**

   - Includes icons (`MdOutlineDarkMode` and `CiLight`) wrapped in a rounded `div`.

2. **Toggle Theme State**

   ```js
   const [darkMode, setDarkMode] = useState(() => {
     const savedTheme = localStorage.getItem("theme");
     if (savedTheme) {
       return savedTheme === "dark";
     } else {
       return window.matchMedia("(prefers-color-scheme: dark)").matches;
     }
   });
   ```

3. **Toggle Function**

   ```js
   const toggleDarkTheme = () => {
     setDarkMode(!darkMode);
   };
   ```

4. **useEffect Hook for Applying Theme**

   ```js
   useEffect(() => {
     if (darkMode) {
       document.documentElement.classList.add("dark");
       localStorage.setItem("theme", "dark");
     } else {
       document.documentElement.classList.remove("dark");
       localStorage.setItem("theme", "light");
     }
   }, [darkMode]);
   ```

5. **Tailwind Custom Variant**

   - Update Tailwind config or global CSS (if needed):

     ```css
     @custom-variant dark (&:where(.dark, .dark *));
     ```

### Responsive Header Menu

- Desktop: Navigation links and "Get Started" or user avatar.
- Mobile:

  - Hamburger menu icon toggles mobile drawer.
  - Side panel slides in with navigation links and login/logout buttons.

---

## State Management

- `loggedIn`: Boolean to toggle UI between login and profile image
- `darkMode`: Boolean to control dark/light theme
- `toggleMenu`: Boolean to toggle mobile menu visibility

## Additional Suggestions

- Replace `localStorage` usage with a custom hook (e.g., `useLocalStorage`) for cleaner code reuse
- Improve accessibility:

  - Add `aria` attributes to menu buttons
  - Keyboard navigation support

- Add animation with Tailwind or `framer-motion` for smoother UI transitions

---

## Future Improvements

- Add page routing using `react-router-dom`
- Build out the remaining sections: Hero, Features, Testimonials, Pricing, Footer
- Add authentication with Firebase or Auth0
- Connect to a backend API for managing user tasks

---

## Conclusion

This documentation covers the setup and development of the TaskFlow SaaS management site. The project was planned, designed, and implemented using modern tools like Vite, Tailwind CSS, and React. Further sections will expand the functionality and complete the full SaaS experience.
