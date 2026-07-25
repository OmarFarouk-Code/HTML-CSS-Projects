# Frontend Mentor - QR code component solution
 
This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
 
## Table of contents
 
- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
## Overview
 
### Screenshot
 
![](./design/desktop-preview.jpg)
 
### Links
 
- Solution URL: [GitHub repo](https://github.com/OmarFarouk-Code/HTML-CSS-Projects)
- Live Site URL: [Live demo](https://qrcode-two-sage.vercel.app/)
## My process
 
### Built with
 
- Semantic HTML5 markup
- CSS custom properties
- Flexbox for vertical and horizontal centering
- Google Fonts (`Outfit`)
### What I learned
 
Through this challenge, I strengthened my understanding of foundational HTML and CSS concepts:
 
1. **Semantic HTML Structure**: Using `<article>`, `<h1>`, and `<p>` tags correctly to build a meaningful, accessible document skeleton.
2. **Responsive Image Sizing**: Sizing images within a container using percentages so they scale fluidly without overflowing:
```css
.QR-Code {
  border-radius: 12px;
  width: 100%;
  display: block;
}
```
 
3. **The CSS Box Model**: Utilizing `padding` inside a card container to create a clean, balanced frame around elements.
4. **Centering with Flexbox**: Learning how to dead-center a component on the page vertically and horizontally using viewport units:
```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
 
### Continued development
 
In future projects, I want to continue focusing on:
 
- Advanced Flexbox and CSS Grid layout techniques.
- Responsive design strategies for more complex, multi-element components.
- Best practices for web accessibility (a11y).
### Useful resources
 
- [MDN Web Docs - CSS Flexible Box Layout](https://developer.mozilla.org) - Great reference for understanding `justify-content` and `align-items`.
- [Google Fonts](https://fonts.google.com) - Used to import the Outfit font family via `@import`.
### AI Collaboration
 
- Tools Used: Gemini (acting as an AI Mentor)
- Usage: Used for step-by-step mentoring, conceptual guidance on CSS box model/Flexbox, debugging layout shifts, and organizing project files.
- Takeaway: Working with AI step-by-step helped reinforce the "why" behind CSS properties rather than just copying code.
## Author
 
