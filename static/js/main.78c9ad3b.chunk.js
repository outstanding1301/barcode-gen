(this["webpackJsonporder-parser"]=this["webpackJsonporder-parser"]||[]).push([[0],{18:function(e,n){},31:function(e,n,t){e.exports=t(84)},36:function(e,n,t){},43:function(e,n){},44:function(e,n){},83:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(26),c=t.n(r),l=(t(36),t(13)),s=t.n(l),i=t(27),u=t(30),d=t(15),m=t(14),f=t.n(m),p=t(28),v=t.n(p),g=t(29),h=t.n(g);t(83);var w=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(0),l=Object(d.a)(c,2),m=l[0],p=(l[1],function(e){r((function(n){return[].concat(Object(u.a)(n),[e])}))}),g=function(){var e=Object(i.a)(s.a.mark((function e(){var n,t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),e.next=3,h()(document.getElementsByClassName("A4")[0],{allowTaint:!0,useCORS:!0,letterRendering:1,scrollX:0,scrollY:0,scale:2});case 3:n=e.sent,t=n.toDataURL("image/jpeg"),(a=document.createElement("a")).href=t,a.download="orderlist.jpg",document.body.appendChild(a),a.click();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"App",onDragEnter:function(e){console.log("\ud30c\uc77c \uac10\uc9c0"),e.preventDefault()},onDragLeave:function(e){console.log("\ud30c\uc77c \uc774\ud0c8 \uac10\uc9c0"),e.preventDefault()},onDragOver:function(e){console.log("\uc774\uac74\ubb50\uc9c0"),e.preventDefault()},onDrop:function(e){console.log("\ud30c\uc77c \uc785\ub825 \uac10\uc9c0");for(var n=e.dataTransfer.files,t=0;t<n.length;t++){console.log("\ud30c\uc77c \uc77d\uc74c");var a=n[t];console.log("".concat(a.type)),console.log("\ud30c\uc77c \uc885\ub958 \ud1b5\uacfc");var o=new FileReader;o.onload=function(e){var n=e.target.result,t=f.a.read(n,{type:"binary"}),a=t.SheetNames[0],o=t.Sheets[a],r=f.a.utils.sheet_to_json(o,{header:1});console.log(r);for(var c=21;c<r.length;c+=2)if("\ud569\uacc4"!=r[c][0]){var l=r[c][2];l.includes(")")&&(l=l.split(")")[1]);for(var s=r[c+1][2],i=r[c][5],u={name:l,barcode:s,qty:i},d=0;d<i;d++)p(u)}},o.readAsBinaryString(a)}window.scrollTo(0,0),e.preventDefault()}},o.a.createElement("div",{className:"topBar"},o.a.createElement("button",{className:"download",onClick:g},"\ub2e4\uc6b4\ub85c\ub4dc")),o.a.createElement("div",{className:"A4"},t.map((function(e,n){if(!(40*m>n&&40*(m+1)<=n))return o.a.createElement("div",{className:"order"},o.a.createElement("p",{className:"itemName"},e.name),o.a.createElement(v.a,{background:"#00000000",value:e.barcode}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.78c9ad3b.chunk.js.map