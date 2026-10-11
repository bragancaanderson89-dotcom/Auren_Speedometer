/* Local instrument bundles share one NUI and one telemetry owner. */
(() => {
 'use strict';const definitions=new Map(),loaded=new Map(),game=typeof GetParentResourceName==='function';let revision=0,current=[];
 const resource='Auren_Speedometer';
 const defaults=[
  {id:'aton',name:'ATON',resource,width:472,height:296,accent:'#ff1328',text:'#e4eef9',scripts:['speedometers/aton/web/reference-digits.js','speedometers/aton/web/design.js','speedometers/aton/web/renderer.js'],styles:['speedometers/aton/web/hud.css','speedometers/aton/web/model.css']},
  {id:'felon',name:'FELON',resource,width:324,height:324,accent:'#ed008b',text:'#e4eef9',scripts:['speedometers/felon/web/felon.js','speedometers/felon/web/register.js'],styles:['speedometers/felon/web/felon.css']},
  {id:'truck',name:'Caminhão',resource,width:600,height:285,accent:'#e32132',text:'#f0f1ed',scripts:['speedometers/truck/web/layout-default.js','speedometers/truck/web/renderer.js'],styles:['speedometers/truck/web/model.css']}
 ];
 function asset(model,file){if(game)return `https://cfx-nui-${model.resource}/${file}`;const base=document.body.classList.contains('studio')?new URL('.',location.href):new URL('../',location.href);return new URL(file,base).href;}
 function append(tag,url){return new Promise((resolve,reject)=>{const el=document.createElement(tag);if(tag==='script')el.src=url;else{el.rel='stylesheet';el.href=url;}el.onload=resolve;el.onerror=()=>reject(Error('Não foi possível carregar '+url));document.head.append(el);});}
 async function load(model){if(!loaded.has(model.id))loaded.set(model.id,(async()=>{await Promise.all((model.styles||[]).map(file=>append('link',asset(model,file))));for(const file of model.scripts)await append('script',asset(model,file));const renderer=definitions.get(model.id);if(!renderer)throw Error('Modelo sem registro: '+model.id);return{...model,...renderer};})().catch(e=>{loaded.delete(model.id);throw e;}));return{...await loaded.get(model.id),...model,create:definitions.get(model.id).create};}
 async function setCatalog(models){const version=++revision,out=[];for(const m of models||[]){if(!m||!/^[-\w]{1,48}$/.test(m.id)||!/^[-\w]{1,80}$/.test(m.resource)||!Array.isArray(m.scripts))continue;try{out.push(await load(m));}catch(error){window.dispatchEvent(new CustomEvent('velo:load-error',{detail:error.message}));console.error(error.message);}}if(version!==revision)return current;current=out;window.dispatchEvent(new CustomEvent('velo:catalog',{detail:out}));return out;}
 window.VeloModels={register(definition){if(definition&&typeof definition.create==='function')definitions.set(definition.id,definition);},setCatalog,get catalog(){return current;}};
 window.VeloBoot={ready:setCatalog(game?[]:defaults)};
 window.addEventListener('message',e=>{if(e.data?.source==='Auren_Speedometer'&&e.data.action==='catalog')setCatalog(e.data.models);});
})();
