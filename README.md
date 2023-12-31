# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/manohySr/Front-end-mentor-part-2/assets/86122918/7b785f92-2472-4a18-b122-585145026507)
![image](https://github.com/manohySr/Front-end-mentor-part-2/assets/86122918/27886235-2ea6-43b8-b546-909ce01f9b1c)
![image](https://github.com/manohySr/Front-end-mentor-part-2/assets/86122918/a74e24a5-109a-471a-a6e1-fd105ebaa088)
![image](https://github.com/manohySr/Front-end-mentor-part-2/assets/86122918/a85b5e95-80e2-426b-a1ff-a19751c4c8ea)
![image](https://github.com/manohySr/Front-end-mentor-part-2/assets/86122918/3497c13a-f5e6-40bc-9148-d0dd7532a8ab)

### Links

- Solution URL: https://github.com/manohySr/Front-end-mentor-part-2
- Live Site URL: https://front-end-mentor-part-2.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- JS for email validation

### What I learned

Using Css grid for the responsiveness 🎉
Using regex for email validation 🎉

```html
<h1>Some HTML code I'm proud of</h1>
```

```js
// regex for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
button.addEventListener("click", (e) => {
  const emailValue = inputEmail.value;

  if (!emailRegex.test(emailValue)) {
    e.preventDefault();
    error_message.style.display = "block";
    inputEmail.className = "error-input";
  }
});
```

### Continued development

Working in responsive web dev

### Useful resources

- [Responsive image](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - This given me the inspiration for the responsive image.
- [text sapcing](https://www.w3schools.com/css/css_text_spacing.asp) - This helped me with the line-height property

## Author

- Frontend Mentor - [@manohySr](https://www.frontendmentor.io/profile/manohySr)
- Twitter - [@ManohySr](https://www.twitter.com/ManohySr)
