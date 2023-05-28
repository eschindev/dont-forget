# NOTE-TAKER

## SITE

[Live Site](https://dont-forget-app.herokuapp.com/)

## Example

![pic](./public/images/Screenshot%202023-05-12%20at%202.40.42%20PM.png)

## Description

This project enables the user to easily add, edit and delete information about their friend's to keep track of important dates, events and family members. This will enable the user to be more organized and access this information wherever they are. They are also able to upload photos from us incorporating DropZone into our application. We also used Handlebars and Bootstrap to create our frontend to simplify the design process with their many custom methods that were extremely helpful.

## Technology Used and Credit

- [Express]('https://expressjs.com/')
- [NodeJS]('https://nodejs.org/en')
- [Heroku]('https://devcenter.heroku.com/')
- [Dropzone]('https://www.dropzone.dev/')
- [Handlebars]('https://handlebarsjs.com/')

## Installations

- NodeJS
- Express
- Heroku
- Bootstrap
- Dropzone
- MySql
- Handlebars

## Code Example

This is a snippet of code using DropZone. This enables the user to drag and drop a friend's photo into their profile.

```myDropzone.on("addedfile", (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      photo = event.target.result.split(",")[1];
      myDropzone.emit("complete", file);
    };
    reader.readAsDataURL(file);
    let dzPreviewElements = document.querySelectorAll(".dz-preview");
    console.log(dzPreviewElements);
    if (dzPreviewElements.length > 1) {
      dzPreviewElements[dzPreviewElements.length - 2].style.display = "none";
    }

```

## Learning Points

This was a great opportunity to work as team and learn from each other. We had great communication, supported each other and grew as developers. We are happy with our product and hope the users are as well!

## Developers

- Evan Schindler
- Victoria Tolliver
- Laurie Fish
