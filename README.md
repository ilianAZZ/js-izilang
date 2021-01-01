# js-izilang
Dynamically change a website language without reloading with only a 10 lines function.

## Created by 
Ilian Azz, https://ilianazz.com/

## Usage
You can find a full example in the index.html file.

### Text translation 
Just put the "ild" attribute in the tag that you want to change the language.
The value must be a key in the LANGS file (of a certain lang). For example : 
```html
<h1 ild=welcome> </h1>
```
With this index.js lang file : 

```js
const LANGS = {"fr": {"welcome" : "Bienvenue"}, "en" : {"welcome" : "Welcome"}}
```

### Other translations
By specifying an "ilt" attribute, you can change all of the attributes : value or placeholder for example.
```html
<input type=text name=mail placeholder="" ild=mail ilt=placeholder>
```
With this index.js lang file : 

```js
const LANGS = {"fr": {"mail" : "Adresse mail"}, "en" : {"mail" : "Email address"}}
```
### Saving with cookies
Cookies permit to memorize the user preferences. By navigating in the page, texts will be automatically updated based on the user choice.

## Auto diagnostic
Moreover, a diagnostic permit to know if translations are missing in the js lang file. Just call the funciton after importing the Js script. A 5px red border will be set around missing translation elements. The missing translation languages will be shown in the HTML.

The text content in the html file can be empty, an initialiastion is done when loading the page.


