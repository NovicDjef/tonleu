import{r as e,u as he,b as oe,c as J,j as X,d as ge,g as ye,i as xe,M as K,h as we}from"./index-C3yNUibo.js";import{W as De,g as ie,a as Ue,h as Se,J as $,k as Me,l as q,Y as Q,B as Re,Z as ee,G as O,O as be,_ as _e,z as te,r as ke,m as Te,n as Ce,u as re,s as Le,x as ne,V as G,K as Pe}from"./three-taO7SZWr.js";import{t as ze}from"./throttle-BgiUmwhn.js";import{a as Y}from"./animate-L6VOToJS.js";const Ae={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},Be={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},Ee="_model_fphsv_2",Ge="_canvas_fphsv_11",Fe="_bodyBackgroundShift_fphsv_1",je="_bodyGridShift_fphsv_1",We="_skillFloat_fphsv_1",Ie="_matrixRain_fphsv_1",ae={model:Ee,canvas:Ge,bodyBackgroundShift:Fe,bodyGridShift:je,skillFloat:We,matrixRain:Ie},se={Frame:"Frame",Logo:"Logo",Screen:"Screen"},ce={stiffness:40,damping:20,mass:1.4,restSpeed:.001},Ne=({models:C,show:D=!0,showDelay:L=0,cameraPosition:h={x:0,y:0,z:8},style:P,className:z,onLoad:F,alt:U,...A})=>{const[S,j]=e.useState(!1),m=e.useRef(),l=e.useRef(),o=e.useRef(),g=e.useRef(),r=e.useRef(),t=e.useRef(),v=e.useRef(),f=e.useRef(),p=e.useRef(),y=e.useRef(),c=e.useRef(),u=e.useRef(),n=e.useRef(),d=e.useRef(),x=e.useRef(),a=e.useRef(),B=e.useRef(),N=he(m,!1,{threshold:.2}),Z=oe(),M=J(0,ce),R=J(0,ce);e.useEffect(()=>{const{clientWidth:s,clientHeight:i}=m.current;t.current=new De({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(s,i),t.current.outputColorSpace=ie,o.current=new Ue(36,s/i,.1,100),o.current.position.set(h.x,h.y,h.z),r.current=new Se,g.current=new $,r.current.add(g.current);const w=new Me(16777215,1.2),_=new q(16777215,1.1),k=new q(16777215,.8);k.position.set(-6,2,2),_.position.set(.5,0,.866),x.current=[w,_,k],x.current.forEach(T=>r.current.add(T)),v.current=new $,r.current.add(v.current),v.current.position.set(0,0,-.8),v.current.rotateX(Math.PI/2);const E=512,I=8,V=8,ue=1.5,le=.8,ve=3;f.current=new Q(E,E),f.current.texture.generateMipmaps=!1,p.current=new Q(E,E),p.current.texture.generateMipmaps=!1;const H=new Re(I,V).rotateX(Math.PI/2),fe=new ee({map:f.current.texture,opacity:le,transparent:!0});d.current=new O(H,fe),d.current.scale.y=-1,v.current.add(d.current),a.current=new O(H),a.current.visible=!1,v.current.add(a.current);const de=new ee({color:16777215,opacity:0,transparent:!0});B.current=new O(H,de),B.current.rotateX(Math.PI),B.current.position.y-=1e-5,v.current.add(B.current),y.current=new be(-I/2,I/2,V/2,-V/2,0,ue),y.current.rotation.x=Math.PI/2,v.current.add(y.current),c.current=new _e,c.current.userData.darkness={value:ve},c.current.onBeforeCompile=T=>{T.uniforms.darkness=c.current.userData.darkness,T.fragmentShader=`
        uniform float darkness;
        ${T.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},c.current.depthTest=!1,c.current.depthWrite=!1,u.current=new te(Ae),u.current.depthTest=!1,n.current=new te(Be),n.current.depthTest=!1;const me=M.on("change",b),pe=R.on("change",b);return()=>{f.current.dispose(),p.current.dispose(),ke(x.current),Te(r.current),Ce(t.current),me(),pe()}},[]);const W=e.useCallback(s=>{a.current.visible=!0,a.current.material=u.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,u.current.uniforms.h.value=s*(1/256),t.current.setRenderTarget(p.current),t.current.render(a.current,y.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=p.current.texture,n.current.uniforms.v.value=s*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,y.current),a.current.visible=!1},[]),b=e.useCallback(()=>{const i=r.current.background;r.current.background=null,r.current.overrideMaterial=c.current,t.current.setRenderTarget(f.current),t.current.render(r.current,y.current),r.current.overrideMaterial=null,W(5),W(5*.4),t.current.setRenderTarget(null),r.current.background=i,g.current.rotation.x=M.get(),g.current.rotation.y=R.get(),t.current.render(r.current,o.current)},[W,M,R]);return e.useEffect(()=>{const s=ze(i=>{const{innerWidth:w,innerHeight:_}=window,k={x:(i.clientX-w/2)/w,y:(i.clientY-_/2)/_};R.set(k.x/2),M.set(k.y/2)},100);return N&&!Z&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[N,Z,M,R]),e.useEffect(()=>{const s=()=>{if(!m.current)return;const{clientWidth:i,clientHeight:w}=m.current;t.current.setSize(i,w),o.current.aspect=i/w,o.current.updateProjectionMatrix(),b()};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[b]),X.jsxs("div",{className:ge(ae.model,z),"data-loaded":S,style:ye({delay:xe(L)},P),ref:m,role:"img","aria-label":U,...A,children:[X.jsx("canvas",{className:ae.canvas,ref:l}),C.map((s,i)=>X.jsx(Ve,{renderer:t,modelGroup:g,show:D,showDelay:L,renderFrame:b,index:i,setLoaded:j,onLoad:F,model:s},JSON.stringify(s.position)))]})},Ve=({renderer:C,model:D,modelGroup:L,renderFrame:h,index:P,showDelay:z,setLoaded:F,onLoad:U,show:A})=>{const[S,j]=e.useState(),m=oe(),l=e.createRef();e.useEffect(()=>{const o=async(r,t)=>{r.colorSpace=ie,r.flipY=!1,r.anisotropy=C.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await C.current.initTexture(r),t.material.color=new ne(16777215),t.material.transparent=!0,t.material.map=r};j({start:async()=>{const{texture:r,position:t,url:v}=D;let f,p;const[y,c]=await Promise.all([await re.loadAsync(r.placeholder),await Le.loadAsync(v)]);L.current.add(c.scene),c.scene.traverse(async n=>{n.material&&(n.material.color=new ne(2039845)),n.name===se.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,o(y,l.current),f=async()=>{const d=await we(r),x=await re.loadAsync(d);await o(x,n),Y(1,0,{onUpdate:a=>{l.current.material.opacity=a,h()}})})});const u=new G(t.x,t.y,t.z);return m&&c.scene.position.set(...u.toArray()),D.animation===K.SpringUp&&(p=()=>{const n=new G(u.x,u.y-1,u.z);c.scene.position.set(...n.toArray()),Y(n.y,u.y,{type:"spring",delay:(300*P+z)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:d=>{c.scene.position.y=d,h()}})}),D.animation===K.LaptopOpen&&(p=()=>{const n=c.scene.children.find(a=>a.name===se.Frame),d=new G(Pe.degToRad(90),0,0),x=new G(0,0,0);return c.scene.position.set(...u.toArray()),n.rotation.set(...d.toArray()),Y(d.x,x.x,{type:"spring",delay:(300*P+z+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,h()}})}),{loadFullResTexture:f,playAnimation:p}}})},[]),e.useEffect(()=>{if(!S||!A)return;let o;const g=async()=>{const{loadFullResTexture:r,playAnimation:t}=await S.start();F(!0),U==null||U(),m||(o=t()),await r(),m&&h()};return e.startTransition(()=>{g()}),()=>{o==null||o.stop()}},[S,A])};export{Ne as Model};
