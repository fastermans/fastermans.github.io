function AddShape(dom, color="green", text="Text" , x="40", y="70", fsize="48", fcolor="black"){
  dom.setAttribute("height","120");
  dom.setAttribute("width","200");
  dom.setAttribute("fill",color);
  dom.style.padding="16px";
  dom.style.transform = "rotate(0deg) scale(1)";
  dom.style.transitionDuration = "0.15s";

  dom.addEventListener("click", ()=>{
    if(dom.style.transform == "rotate(5deg) scale(1.1)"){
      dom.style.transform = "rotate(0deg) scale(1)";
    }else if(dom.style.transform == "rotate(0deg) scale(1)"){
      dom.style.transform = "rotate(5deg) scale(1.1)";
    }
  });

  let pathDom = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathDom.setAttribute("d","M   0    60 L   40   0 L   160   0 L   200  60 L   160   120 L   40   120 Z");
  let textDom = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textDom.setAttribute("x",x);
  textDom.setAttribute("y",y);
  textDom.setAttribute("font-size",fsize);
  textDom.setAttribute("fill",fcolor);
  textDom.innerHTML=text;

  dom.appendChild(pathDom);
  dom.appendChild(textDom);
}

let modsDiv = document.getElementById('modsDiv');



let mods_black = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
AddShape(mods_black, "grey", "black");
let mods_white = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
AddShape(mods_white);
let mods_gray = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
AddShape(mods_gray);
let mods_black1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
AddShape(mods_black1, "grey", "black");
let mods_white1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
AddShape(mods_white1);
let mods_gray1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
AddShape(mods_gray1);

modsDiv.appendChild(mods_black);
modsDiv.appendChild(mods_white);
modsDiv.appendChild(mods_gray);
modsDiv.appendChild(mods_black1);
modsDiv.appendChild(document.createElement("br"));
modsDiv.appendChild(mods_white1);
modsDiv.appendChild(document.createElement("br"));
modsDiv.appendChild(mods_gray1);
