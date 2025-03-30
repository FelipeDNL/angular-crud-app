export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>C.R.U.D Angular</title>
  <base href="/angular-crud-app/browser/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@font-face{font-family:OldStandard-Regular;src:url("./media/OldStandard-Regular-4IN46PDL.ttf") format("truetype")}body{font-family:OldStandard-Regular,serif;color:#333;background-color:#faebd72f;display:flex;justify-content:center}
</style><link rel="stylesheet" href="styles-GEHPKYSX.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-GEHPKYSX.css"></noscript><style ng-app-id="ng">.container[_ngcontent-ng-c2184613010]{width:1200px;height:900px;text-align:center;display:flex;flex-direction:column;justify-content:space-around}.container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]{height:200px}.container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   .app-header-info[_ngcontent-ng-c2184613010]{display:flex;flex-direction:row;justify-content:space-between;padding:0 15px}.container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   .link-1[_ngcontent-ng-c2184613010], .container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   .link-2[_ngcontent-ng-c2184613010], .container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   .link-3[_ngcontent-ng-c2184613010]{color:#000;text-decoration:none}.container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   .app-header-title[_ngcontent-ng-c2184613010]{margin:0;font-size:50px;padding:20px;border-top:1px solid #000000}.container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   .app-header-sub[_ngcontent-ng-c2184613010]{border-bottom:3px solid #000000;border-top:3px solid #000000;padding:15px;display:flex;flex-direction:row;justify-content:space-evenly}.container[_ngcontent-ng-c2184613010]   header[_ngcontent-ng-c2184613010]   main[_ngcontent-ng-c2184613010]{padding-left:7px;padding-right:7px}@media (max-width: 1200px){.container[_ngcontent-ng-c2184613010]{width:auto;height:auto;justify-content:center;font-size:small}main[_ngcontent-ng-c2184613010], header[_ngcontent-ng-c2184613010]{width:auto;height:auto}.app-header-sub[_ngcontent-ng-c2184613010]{font-size:15px;padding:10px}}</style><style ng-app-id="ng">.editar-livro-form[_ngcontent-ng-c963574605]{display:flex;flex-direction:column;font-size:larger}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["submit","input","compositionstart","compositionend","click"],["blur"]);</script>
  <app-root ng-version="19.2.3" _nghost-ng-c2184613010 ngh="1" ng-server-context="ssg"><div _ngcontent-ng-c2184613010 class="container"><header _ngcontent-ng-c2184613010><div _ngcontent-ng-c2184613010 class="app-header-info"><a _ngcontent-ng-c2184613010 href="https://felipednl.github.io" target="_blank" class="link-1">Site Pessoal</a><a _ngcontent-ng-c2184613010 href="https://github.com/FelipeDNL" target="_blank" class="link-2">Github</a><a _ngcontent-ng-c2184613010 href="https://linkedin.com/in/FelipeDNL" target="_blank" class="link-3">LinkedIn</a></div><h1 _ngcontent-ng-c2184613010 class="app-header-title">C.R.U.D Angular</h1><div _ngcontent-ng-c2184613010 class="app-header-sub"><div _ngcontent-ng-c2184613010> ★★★★★ </div> 30 de março de 2025 <div _ngcontent-ng-c2184613010> ★★★★★ </div></div></header><main _ngcontent-ng-c2184613010><router-outlet _ngcontent-ng-c2184613010></router-outlet><app-editar-livro _nghost-ng-c963574605 ngh="0"><h1 _ngcontent-ng-c963574605>Editar Livro</h1><div _ngcontent-ng-c963574605 class="editar-livro-form"><form _ngcontent-ng-c963574605 novalidate class="ng-untouched ng-pristine ng-valid" jsaction="submit:;"><div _ngcontent-ng-c963574605><label _ngcontent-ng-c963574605 for="titulo">Título: </label><input _ngcontent-ng-c963574605 id="titulo" name="titulo" required class="ng-untouched ng-pristine ng-valid" value="Angular" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c963574605><label _ngcontent-ng-c963574605 for="autor">Autor: </label><input _ngcontent-ng-c963574605 id="autor" name="autor" required class="ng-untouched ng-pristine ng-valid" value="John Doe" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c963574605><label _ngcontent-ng-c963574605 for="editora">Editora: </label><input _ngcontent-ng-c963574605 id="editora" name="editora" required class="ng-untouched ng-pristine ng-valid" value="Editora A" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c963574605><label _ngcontent-ng-c963574605 for="ano">Ano: </label><input _ngcontent-ng-c963574605 id="ano" type="number" name="ano" required class="ng-untouched ng-pristine ng-valid" value="2020" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><button _ngcontent-ng-c963574605 type="submit">Salvar</button></form></div><button _ngcontent-ng-c963574605 type="button" jsaction="click:;">Cancelar</button></app-editar-livro><!----></main><footer _ngcontent-ng-c2184613010><p _ngcontent-ng-c2184613010>© 2025 Felipe D.</p></footer></div></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-MA4LM33E.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"18":[{"i":"c963574605","r":1}]}}]}</script></body></html>`;