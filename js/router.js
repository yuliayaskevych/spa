export default class Router{constructor(t){this.routes=t,this.rootElem=document.getElementById("app"),window.addEventListener("hashchange",this.hasChanged),window.location.hash?this.hasChanged():this.goToRoute(this.routes.find(t=>t.default).htmlName)}hasChanged=()=>{this.goToRoute(this.routes.find(t=>`#${t.name}`==window.location.hash).htmlName)};goToRoute(t){fetch(`views/${t}`).then(t=>t.text()).then(t=>this.rootElem.innerHTML=t).catch(t=>console.error(t))}}