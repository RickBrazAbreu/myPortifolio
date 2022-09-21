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

# SCROLL FUNCTION 

## Explaining the scroll function
- Basically I have a class >> display: 'block' << wich shows the element!
- In the html.. I check the scroll if it roll down 500px... it add that class to the button (it turn on the button) , if it scroll less than 500px , it remove the class (it turn off the button)!

## FIRST
- Doing the scroll on/off: I created a class in the 
"portifolio.css" file --->>> .show-btn{display: block;} <<--
## SECOND
- I had to addClass/removeClass and made sure to call the removeClass method on a set of jQuery elements..
- To be able to do that I went to "index.html" file and add the the  ->> script scr="...." <<- as the example below.

<!-- 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script>
          $(document).ready(function(){
              $(window).scroll(function(){
                // scroll-up button show/hide script
                if(this.scrollY > 100){
                    $("i").addClass("show-btn");
                }else{
                    $("i").removeClass("show-btn");
                }
              });
              
          });
    </script>
 -->




- addClass / removeClass in a js file, first you need to make sure to call the removeClass method on a set of jQuery elements
-

Here is one of the errors I got during developing time for this scroll for this project!
-To solve the "removeClass is not a function" error, make sure to call the removeClass method on a set of jQuery elements and place your JS script tag at the bottom of the body tag, after the DOM elements have been declared and jQuery is loaded.











_____________________________________________________________________________________


## DEPLOYMENT
- LINK DEPLOYMENT:  https://portifolio-abreu-hoff.herokuapp.com/


### Link tutorial used to help deploy
- LInk: https://www.youtube.com/watch?v=tA4Fl1dZgjc

### UpDate the Project
- Now to upload new changes just "git push origin main"

- For deployment I used heroku, but the heroku stack 22, wans't working , so I had to use this comand " heroku create --remote heroku-20 Name-Project " and then the building finally worked.


# Issues npm node version
- To fix this issue I had to specify the npm and node version. 
- I had to put like this 
    "engines": {
        "npm": "7.x",
        "node": "18.x"
    },
- I used the link below
- https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version