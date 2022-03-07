const main = document.querySelector("main");

const joke1 = "What should you call a person who has the same distinctive personality? You're the 'Goofy' one!";
const joke2 = "What creature lives on top of your hair and can be tiny on all directions? Mickey Louse!";
const joke3 = "When you see someone in the farm, what can you say? I have to pay one Bill to a Farmer!";

const template_string = "<template><h1>My Jokes</h1><p>Here is a joke: </p></template>";

main.innerHTML = template_string;

var temp = document.getElementsByTagName("template")[0];
temp = document.getElementsByTagName("template")[0];
item = temp.content.querySelector("h1");
a = document.importNode(item, true);
document.body.appendChild(a);

item = temp.content.querySelector("p");
a = document.importNode(item, true);
a.textContent += joke1;
document.body.appendChild(a);

a = document.importNode(item, true);
a.textContent += joke2;
document.body.appendChild(a);

a = document.importNode(item, true);
a.textContent += joke3;
document.body.appendChild(a);

new_p = document.createElement("p");
new_p.textContent = "That's all Folks!";
document.body.appendChild(new_p);
