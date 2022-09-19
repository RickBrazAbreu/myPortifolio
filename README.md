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
_____________________________________________________________________________________
# In navBarTop.js...
- looks like bootsStrap had got some changes, expanding NavBar..
- <Navbar bg="light" expand="lg navbar-expand-md ">  <- here.. the " navbar-expand-md  " will fix when it should be horizontal or vertical for the toggle!



# IN NavBar toggle icon
- The code below is how I changed the color of the toggle icon: 
- here ->>>  stroke=%27rgba%28255, 255, 255, 1%29%2    <<<-
 ## basicaly ->>>  rgba%28  code of color rgba  %29%  <<<-

.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 1%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
  }

_____________________________________________________________________________________



## DEPLOYMENT
- LINK DEPLOYMENT:  https://portifolio-abreu-hoff.herokuapp.com/


### Link tutorial used to help deploy
- LInk: https://www.youtube.com/watch?v=tA4Fl1dZgjc

### UpDate the Project
- Now to upload new changes just "git push origin main"

- For deployment I used heroku, but the heroku stack 22, wans't working , so I had to use this comand " heroku create --remote heroku-20 Name-Project " and then the building finally worked.