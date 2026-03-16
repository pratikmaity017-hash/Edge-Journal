import { auth, provider, db } from "./firebase.js";

import { signInWithPopup } from 
"https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { collection, addDoc, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

let trades = [];

document.getElementById("googleLogin").onclick = async () => {

await signInWithPopup(auth,provider);

document.getElementById("app").style.display="block";

loadTrades();

};

async function addTrade(){

let pair = document.getElementById("pair").value;
let entry = parseFloat(document.getElementById("entry").value);
let exit = parseFloat(document.getElementById("exit").value);

let profit = exit-entry;

await addDoc(collection(db,"trades"),{

pair,
entry,
exit,
profit,
date:Date.now()

});

loadTrades();

}

async function loadTrades(){

const snapshot = await getDocs(collection(db,"trades"));

trades=[];

snapshot.forEach(doc=>{
trades.push(doc.data());
});

renderTrades();
renderChart();

}

function renderTrades(){

let container = document.getElementById("trades");

container.innerHTML="";

trades.forEach(t=>{

container.innerHTML+=`

<div class="trade">

${t.pair}  
Entry: ${t.entry}  
Exit: ${t.exit}  
Profit: ${t.profit}

</div>

`;

});

}

function renderChart(){

let equity=0;

let data=[];

trades.forEach(t=>{
equity+=t.profit;
data.push(equity);
});

new Chart(document.getElementById("equityChart"),{

type:"line",

data:{

labels:data.map((_,i)=>i+1),

datasets:[{

label:"Equity Curve",

data:data

}]

}

});

}