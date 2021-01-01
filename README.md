# js-izilang
Dynamically change a website lang without reloading

## Created by 
Ilian Azz, https://ilianazz.com/

## Usage
Just put the "ild" attribute in the tag that you want to change the language.
The value must be the value in the LANGS file. For example : 
<h1 ild=welcome> </h1>
With this index.js lang file : 

const LANGS = {"fr": {"welcome" : "Bienvenue"}, "en" : {"welcome" : "Welcome"}}

### You can find a full example 