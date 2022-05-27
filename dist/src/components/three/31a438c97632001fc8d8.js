import"./style.css";import{Group,Scene,Mesh,FontLoader,TextGeometry,WebGLRenderer,PerspectiveCamera,Raycaster,MeshNormalMaterial,TorusGeometry,BoxGeometry,AudioLoader,AudioListener,AudioContext,Audio,Vector3,Vector2,Color}from"three";import{Blanka}from"./scripts/text/font";const canvas=document.querySelector("canvas.webgl"),scene=new Scene;scene.background=new Color(1184274);const group=new Group,objectsToTouch=[],objectsToRotate=[],raycaster=new Raycaster;let intersects=[];const didClick=[],material=new MeshNormalMaterial,fontLoader=new FontLoader;fontLoader.load("/blanka.json",(e=>{const t=new TextGeometry("WEB3",{font:e,size:1,height:.2,curveSegments:5,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelOffset:0,bevelSegments:5}),o=new TextGeometry("WEEK",{font:e,size:1,height:.2,curveSegments:5,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelOffset:0,bevelSegments:5});t.center(),o.center();const i=new Mesh(t,material),a=new Mesh(o,material);i.position.y=1.5,i.rotation.set(0,0,0),a.rotation.set(0,0,0),group.add(i,a);const n=new TorusGeometry(.3,.2,20,45);for(let e=0;e<100;e++){const e=new Mesh(n,material);e.position.x=60*(Math.random()-.5),e.position.y=60*(Math.random()-.5);let t=60*(Math.random()-.5);t>0?t+=5:t-=5,e.position.z=t,e.rotation.x=Math.random()*Math.PI,e.rotation.y=Math.random()*Math.PI;const o=3*Math.random();e.scale.set(o,o,o),objectsToRotate.push(e),group.add(e)}const s=new BoxGeometry(1,1,1);for(let e=0;e<100;e++){const e=new Mesh(s,material);e.position.x=60*(Math.random()-.5),e.position.y=60*(Math.random()-.5);let t=60*(Math.random()-.5);t>0?t+=5:t-=5,e.position.z=t,e.rotation.x=Math.random()*Math.PI,e.rotation.y=Math.random()*Math.PI;const o=3*Math.random();e.scale.set(o,o,o),objectsToRotate.push(e),group.add(e)}})),fontLoader.load("/blanka.json",(e=>{Blanka("5th June - 10th June",e,material,[0,-1.2,0],1,void 0,objectsToTouch,group),Blanka("  Explain\n Like     Im \n       five",e,material,[8,-4,-10],void 0,[.5,-.5,-2],objectsToTouch,group),Blanka("Hackathons",e,material,[-8,4,-10],void 0,[-.3,.3,-2],objectsToTouch,group,!0),Blanka("The\n     Pitch",e,material,[-8,-4,-10],void 0,[-.3,-.3,-2],objectsToTouch,group),Blanka("Kingpin",e,material,[8,4,-10],void 0,[.3,.3,-2],objectsToTouch,group,!0)}));const sizes={width:window.innerWidth,height:window.innerHeight},mouse=new Vector2;scene.add(group);const camera=new PerspectiveCamera(50,sizes.width/sizes.height,.1,100);camera.position.x=0,camera.position.y=0,camera.position.z=15,scene.add(camera);const listener=new AudioListener;camera.add(listener);const sound=new Audio(listener),audioLoader=new AudioLoader;audioLoader.load("/stay.ogg",(e=>{sound.setBuffer(e),sound.setLoop(!0),sound.setVolume(0)}));const renderer=new WebGLRenderer({canvas,antialias:!0});renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,sizes.width/sizes.height<.875?(camera.position.z=20,group.rotation.z=-Math.PI/2):(camera.position.z=12,group.rotation.z=0),camera.aspect=sizes.width/sizes.height,renderer.setSize(sizes.width,sizes.height),camera.updateProjectionMatrix(),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})),sizes.width/sizes.height<.875&&(camera.position.z=20,group.rotation.z=-Math.PI/2),window.addEventListener("mousemove",(e=>{mouse.x=e.clientX/sizes.width*2-1,mouse.y=-e.clientY/sizes.height*2+1}));let switchAudio=!1;window.addEventListener("click",(()=>{switchAudio||(sound.setVolume(1),sound.play(),switchAudio=!0,console.log("flipped")),AudioContext.getContext().resume(),intersects.forEach(((e,t)=>didClick[t]=didClick[t]||e.length)),console.log(didClick),didClick.reduce(((e,t)=>e+Math.min(t,1)))==didClick.length&&console.log("WOOOOOOOOOOO")}));let time=0;const tick=()=>{raycaster.setFromCamera(mouse,camera),intersects=objectsToTouch.map((e=>raycaster.intersectObject(e))),objectsToRotate.forEach(((e,t)=>{e.rotation.x+=t%5*.001,e.rotation.y+=t%5*.001})),time+=.01,group.rotation.z=0,group.rotation.z+=.4*Math.sin(time),group.rotation.x=.3*Math.cos(time),time>2*Math.PI&&(time=0),renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();