{/* <div id="parent">
<div id="child">
<h1>I am the heaing</h1>
// we write siblings in an array
<h1>I am the heaing@</h1>
</div>
</div> 
ReactElement(Object)=> Html(Browser understand)


*/}

// JSX makes it easy to create tags

const parent= React.createElement("div" ,{id:"parent"} , [React.createElement("div" ,{id:"child"},[React.createElement("h1",{},"I am the heading"),React.createElement("h1",{},"I am the heading2")])],React.createElement("div" ,{id:"child"},[React.createElement("h1",{},"I am the heading"),React.createElement("h1",{},"I am the heading2")]));


const heading=React.createElement("h1",{id:"heading"},"Hello world from react!")
const root =ReactDOM.createRoot(document.getElementById("root"));

//convert object to h1 tag and render 
root.root(parent);
//it will give an object . Its a react element.
console.log(parent);