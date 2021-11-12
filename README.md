# GatsbyImage specificity issue with Tailwind aspect-ratio

GatsbyImage css classes are overriding Tailwind classes when deployed/built for prod. It works as expected in development.

## To reproduce:
- `npm install`
- `gatsby build`

Or visit this example:
- https://inspiring-hamilton-bd685d.netlify.app/

## To see it work normally in development
- `npm install`
- `gatsby develop`

## Screenshots

### Develop
![CleanShot 2021-11-12 at 11 55 25@2x](https://user-images.githubusercontent.com/740373/141527951-895d7b6d-6540-46dd-ab65-9464a12d801c.png)

### Build
![CleanShot 2021-11-12 at 11 53 43@2x](https://user-images.githubusercontent.com/740373/141527969-98b76be2-6986-43cf-8151-3f6984affef3.png)
