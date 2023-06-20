# projetelective

## Commands

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
OR
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Colors

```

/* CSS HEX */
--buff: #db995aff;
--liver: #654236ff;
--vanilla: #d6d4a0ff;
--cocoa-brown: #da7635ff;
--flame: #e24e1bff;

/* CSS HSL */
--buff: hsla(29, 64%, 61%, 1);
--liver: hsla(15, 30%, 30%, 1);
--vanilla: hsla(58, 40%, 73%, 1);
--cocoa-brown: hsla(24, 69%, 53%, 1);
--flame: hsla(15, 79%, 50%, 1);

/* SCSS HEX */
$buff: #db995aff;
$liver: #654236ff;
$vanilla: #d6d4a0ff;
$cocoa-brown: #da7635ff;
$flame: #e24e1bff;

/* SCSS HSL */
$buff: hsla(29, 64%, 61%, 1);
$liver: hsla(15, 30%, 30%, 1);
$vanilla: hsla(58, 40%, 73%, 1);
$cocoa-brown: hsla(24, 69%, 53%, 1);
$flame: hsla(15, 79%, 50%, 1);

/* SCSS RGB */
$buff: rgba(219, 153, 90, 1);
$liver: rgba(101, 66, 54, 1);
$vanilla: rgba(214, 212, 160, 1);
$cocoa-brown: rgba(218, 118, 53, 1);
$flame: rgba(226, 78, 27, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-right: linear-gradient(90deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-bottom: linear-gradient(180deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-left: linear-gradient(270deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-top-right: linear-gradient(45deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-bottom-right: linear-gradient(135deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-top-left: linear-gradient(225deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-bottom-left: linear-gradient(315deg, #db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);
$gradient-radial: radial-gradient(#db995aff, #654236ff, #d6d4a0ff, #da7635ff, #e24e1bff);

```

## Files in src
- **assets**
> Media files of the project
- **components**
> Components created for the pages
  - *MassText*
  > Component used to display multiples lines of text following vuetify's typorephy rules: https://v2.vuetifyjs.com/en/styles/text-and-typography/#typography
  - *UserButton*
  > Component used to redirect to the login page when logged out and display navigation options to the client when logged in
- **router**
    - *index*
    > Manage the navigation between the pages
- **store**
    - *index*
    > Manage the data store used accross the application
- **types**
> Custom Types used in multiple pages
- **utils**
> Utility function and classes used accros the application
- **views**
> Components corresponding to pages of the application
  - **footer**
    - *AboutUsView*
    > About Us page Component
    - *ContactUsView*
    > Contact Us page Component
    - *Join Delivery*
    > Join Delivery page
- *App*
> Entry Component of the page
- *main*
> Entry Point of the application's javascript