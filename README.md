JavaScript (JS)
JavaScript (JS) is a programming language used to make websites interactive and dynamic. It runs mainly in the web browser and allows web pages to respond to user actions.


Key Features of JavaScript
1.	Client-side language – Runs in the browser.
2.	Event-driven – Reacts to user actions (click, scroll, type).
3.	Dynamic typing – Variable types can change.
4.	Used for full-stack development with technologies like:
o	Node.js (backend)
o	React / Angular / Vue (frontend)


Client-Side Rendering
 ![clientside rendering](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYUcjIc2tvUJTkrHj597ZAQ8Kh4jfoRL7_A&s)
Simple Steps
1.	User opens a website
Browser sends request to server.
2.	Server sends basic HTML + JavaScript files
3.	Browser downloads JavaScript
4.	JavaScript runs in the browser
5.	JavaScript creates the webpage content
 
6.	User sees the website



Server-Side Rendering (SSR)
 ![Serverside Rendring](https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots_2022/Server-side-rendering-diagram.png)
Simple Steps
1.	User opens a website
Browser sends request to the server.
2.	Server builds the complete HTML page
3.	Server sends the ready webpage to the browser
4.	Browser shows the page immediately
5.	JavaScript loads later to make it interactive


Frontend Frameworks
Frontend frameworks are used to build the user interface (UI) of a website. Examples:
1.	React
2.	Angular
3.	Vue.js
4.	Next.js
 
Backend Frameworks
Backend frameworks are used to handle server logic, databases, and APIs. Examples:
1.	Node.js
2.	Express.js


Second Version of Backend:
1.	Django

2.	Flask

3.	FAST & REST APIs


<script> Tag
The <script> tag in HTML is used to add JavaScript code to a webpage.


Basic Syntax
<script> JavaScript code
</script> Example:
<script>
console.log("Hello world");
</script>


Variables in JavaScript
A variable is a container used to store data that can be used later in a program. Example:
let name = “vivek”;
 let age = 22;
 
Data Types in JavaScript:
A data type defines the type of value stored in a variable.


JavaScript data types are divided into two categories:
1.	Primitive Data Types
2.	Non-Primitive Data Types


1.	Primitive Data Types
Primitive types store single simple values. Types of primitive data types:
1.	Number
Used for numbers. let age = 22;
let price = 83.3;


2.	String
Used for text.
let name = "vivek";


3.	Boolean
Represents true or false. let isLoggedIn = true;

4.	Undefined
A variable declared but not assigned a value. let name;
Output:
undefined


5.	Null
Represents empty or no value.
 
let data = null;


6 Symbol
Used for unique identifiers. let id = Symbol("id");

2.	Non-Primitive Data Types
These store multiple values or complex data.
1.	Object
let student = { name: "vivek", age: 22
};


2.	Array
Used to store multiple values in a list. let numbers = [1,2,3,4,5,6,7……];

3.	Function
A block of reusable code.
function greet() { console.log("Hello world");
}
