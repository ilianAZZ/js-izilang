# js-izilang
Dynamically change a website lang without reloading

## Created by 
Ilian Azz, https://ilianazz.com/

## Usage
### You can find a full example in the index.html file
Just put the "ild" attribute in the tag that you want to change the language.
The value must be the value in the LANGS file. For example : 
< h1 ild=welcome> </ h1>
With this index.js lang file : 

const LANGS = {"fr": {"welcome" : "Bienvenue"}, "en" : {"welcome" : "Welcome"}}

## Auto diagnostic
The text content in the html file can be empty, an initialiastion will be done when loading the page.

Moreover, a diagnostic permit to know if translations are missing in the js lang file. Just call the funciton after importing the Js script.  
