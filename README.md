# Starting Project Portifolio

 ### First importing bootstrap.
 - Added to index.html => 
    <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

    <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

    <script>var Alert = ReactBootstrap.Alert;</script>

# In navBarTop.js...
- looks like bootsStrap had got some changes, expanding NavBar..
- <Navbar bg="light" expand="lg navbar-expand-md ">  <- here.. the " navbar-expand-md  " will fix when it should be horizontal or vertical for the toggle!

## DEPLOYMENT
- LINK DEPLOYMENT:  https://portifolio-abreu-hoff.herokuapp.com/

- For deployment I used heroku, but the heroku stack 22, wans't working , so I had to use this comand " heroku create --remote heroku-20 Name-Project " and then the building finally worked.