import{r as n,b as ne,u as te,j as a,g as re,h as ae}from"./index-DMwg7sQA.js";import{W as oe,O as se,h as ce,x as ie,m as ue,n as le,u as de,y as me,L as q,z as ve,B as fe,G as pe}from"./three-taO7SZWr.js";import{a as ge}from"./animate-DED6aHY9.js";const xe="_carousel_156nm_2",_e="_content_156nm_6",he="_imageWrapper_156nm_12",Ie="_canvasWrapper_156nm_24",ye="_canvas_156nm_24",be="_placeholder_156nm_37",we="_button_156nm_52",Se="_nav_156nm_108",Fe="_navButton_156nm_115",Re="_bodyBackgroundShift_156nm_1",Ce="_bodyGridShift_156nm_1",Pe="_skillFloat_156nm_1",ke="_matrixRain_156nm_1",d={carousel:xe,content:_e,imageWrapper:he,canvasWrapper:Ie,canvas:ye,placeholder:be,button:we,nav:Se,navButton:Fe,bodyBackgroundShift:Re,bodyGridShift:Ce,skillFloat:Pe,matrixRain:ke},je=`varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform float dispFactor;
uniform float direction;
uniform bool reduceMotion;

void main() {
  if (reduceMotion) {
    // Simple crossfade
    vec4 _currentImage = texture2D(currentImage, vUv);
    vec4 _nextImage = texture2D(nextImage, vUv);
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  } else {
    // Liquid distortion effect
    vec2 uv = vUv;
    vec4 _currentImage;
    vec4 _nextImage;
    float intensity = 0.6;

    vec4 orig1 = texture2D(currentImage, uv);
    vec4 orig2 = texture2D(nextImage, uv);

    vec2 distortedPosition = vec2(
      uv.x + direction * (dispFactor * (orig2.r * intensity)),
      uv.y + direction * (dispFactor * (orig2 * intensity))
    );

    vec2 distortedPosition2 = vec2(
      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),
      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))
    );

    _currentImage = texture2D(currentImage, distortedPosition);
    _nextImage = texture2D(nextImage, distortedPosition2);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  }
}
`,Ee=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function $(i,u,m,I){if(u!==null)return u;const y=m.length,b=(i-1+y)%y,R=(i+1)%y;return I>0?R:b}const Ne=({width:i,height:u,images:m,placeholder:I,...y})=>{const[b,R]=n.useState(!1),[o,X]=n.useState(0),[w,O]=n.useState(!1),[V,K]=n.useState(!0),[c,J]=n.useState(),[C,H]=n.useState(),P=n.useRef(),j=n.useRef(),D=n.useRef(),p=n.useRef(),g=n.useRef(),S=n.useRef(),s=n.useRef(),x=n.useRef(!1),F=n.useRef(),E=n.useRef(),A=n.useRef(),B=ne(),N=te(P,!0),W=n.useRef(),z=n.useRef(),Q=`Slide ${o+1} of ${m.length}. ${m[o].alt}`;n.useEffect(()=>(b&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""}),[b]),n.useEffect(()=>{const e=[i/-2,i/2,u/2,u/-2,1,1e3];return s.current=new oe({canvas:P.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),S.current=new se(...e),g.current=new ce,s.current.setPixelRatio(2),s.current.setClearColor(1118481,1),s.current.setSize(i,u),s.current.domElement.style.width="100%",s.current.domElement.style.height="auto",g.current.background=new ie(1118481),S.current.position.z=1,()=>{x.current=!1,ue(g.current),le(s.current)}},[u,i]),n.useEffect(()=>{let e=!0;return N&&!w&&(async()=>{const r=s.current.capabilities.getMaxAnisotropy(),v=m.map(async f=>{const M=f.srcSet?await ae(f):f.src,h=await de.loadAsync(M);return await s.current.initTexture(h),h.colorSpace=me,h.minFilter=q,h.magFilter=q,h.anisotropy=r,h.generateMipmaps=!1,h}),_=await Promise.all(v);e&&(p.current=new ve({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:_[0]},nextImage:{type:"t",value:_[1]},reduceMotion:{type:"b",value:B}},vertexShader:Ee,fragmentShader:je,transparent:!1,opacity:1}),D.current=new fe(i,u,1),j.current=new pe(D.current,p.current),j.current.position.set(0,0,0),g.current.add(j.current),O(!0),J(_),requestAnimationFrame(()=>{s.current.render(g.current,S.current)}))})(),()=>{e=!1}},[u,m,N,w,B,i]);const T=n.useCallback(({index:e,direction:t=1})=>{if(!c)return;X(e);const{uniforms:r}=p.current;r.nextImage.value=c[e],r.direction.value=t;const v=()=>{r.currentImage.value=c[e],r.dispFactor.value=0,x.current=!1};r.dispFactor.value!==1&&(x.current=!0,ge(r.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:_=>{r.dispFactor.value=_},onComplete:v}))},[c]),l=n.useCallback(({direction:e,index:t=null,...r})=>{if(!w)return;if(x.current){cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>l({direction:e,index:t,...r}));return}const v=$(o,t,c,e);T({index:v,direction:e,...r})},[T,o,w,c]),Y=n.useCallback(e=>{if(e===o)return;const t=e>o?1:-1;l({direction:t,index:e})},[o,l]);n.useEffect(()=>{const e=()=>{const t=P.current.getBoundingClientRect();H(t)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),n.useEffect(()=>{let e;const t=()=>{e=requestAnimationFrame(t),x.current&&s.current.render(g.current,S.current)};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e)}},[]),n.useEffect(()=>{if(I){const e=()=>{K(!1)},t=W.current;return t.addEventListener("transitionend",e),()=>{t&&t.removeEventListener("transitionend",e)}}},[I]);const U=n.useCallback(e=>{if(x.current||!p.current||!c)return;E.current=e;const t=Math.abs(e),r=C.width;F.current=e>0?-1:1;const v=1-(t-r)/r*-1,_=$(o,null,m,F.current),f=p.current.uniforms,M=Math.min(Math.max(v,0),1);f.currentImage.value=c[o],f.nextImage.value=c[_],f.direction.value=F.current,f.dispFactor.value=M,requestAnimationFrame(()=>{s.current.render(g.current,S.current)})},[C,o,m,c]),G=n.useCallback(()=>{if(!p.current)return;const e=p.current.uniforms,t=(1-e.dispFactor.value)*1e3,r=Math.abs(E.current),v=C.width*.2;E.current=0,!x.current&&(r===0||!r||(r>v?l({duration:t,direction:F.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,l({direction:F.current*-1,index:o}))))},[C,o,l]),k=n.useCallback(e=>{U(e.clientX-z.current)},[U]),L=n.useCallback(()=>{R(!1),G(),document.removeEventListener("pointerup",L),document.removeEventListener("pointermove",k)},[k,G]),Z=n.useCallback(e=>{z.current=e.clientX,R(!0),document.addEventListener("pointermove",k),document.addEventListener("pointerup",L)},[k,L]),ee=e=>{switch(e.key){case"ArrowRight":l({direction:1});break;case"ArrowLeft":l({direction:-1});break}};return a.jsxs("div",{className:d.carousel,onKeyDown:ee,...y,children:[a.jsxs("div",{className:d.content,children:[a.jsxs("div",{className:d.imageWrapper,"data-dragging":b,onPointerDown:Z,style:re({aspectRatio:`${i} / ${u}`}),children:[a.jsx("div",{"aria-atomic":!0,className:d.canvasWrapper,"aria-live":"polite","aria-label":Q,role:"img",children:a.jsx("canvas",{"aria-hidden":!0,className:d.canvas,ref:P})}),V&&I&&a.jsx("img",{"aria-hidden":!0,className:d.placeholder,"data-loaded":w&&!!c,src:I,ref:W,alt:"",role:"presentation"})]}),a.jsx("button",{className:d.button,"data-prev":!0,"aria-label":"Previous slide",onClick:()=>l({direction:-1}),children:a.jsx(Le,{})}),a.jsx("button",{className:d.button,"data-next":!0,"aria-label":"Next slide",onClick:()=>l({direction:1}),children:a.jsx(Me,{})})]}),a.jsx("div",{className:d.nav,children:m.map((e,t)=>a.jsx("button",{className:d.navButton,onClick:()=>Y(t),"aria-label":`Jump to slide ${t+1}`,"aria-pressed":t===o},e.alt))})]})};function Le(){return a.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a.jsx("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})})}function Me(){return a.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a.jsx("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"})})}export{Ne as Carousel};
