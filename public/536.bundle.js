(self.webpackChunkpokeapi_redux=self.webpackChunkpokeapi_redux||[]).push([[536],{6536:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(9226),l=a(6423);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var n,r,l=[],o=!0,i=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=(0,r.v9)((function(e){return e.users.user})),t=(0,r.v9)((function(e){return e.users.loading})),a=o((0,n.useState)(e.displayName),2),i=a[0],c=a[1],s=o((0,n.useState)(!1),2),m=s[0],u=s[1],d=o((0,n.useState)(!1),2),p=d[0],f=d[1],b=(0,r.I0)();return n.createElement("div",{className:"mt-5 text-center"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body"},n.createElement("img",{src:e.photoURL,alt:"",width:"100px",className:"img-fluid"}),n.createElement("h4",{className:"card-title mt-2"},e.displayName),n.createElement("h5",{className:"card-text"},e.email),n.createElement("button",{className:"btn btn-primary mt-3",onClick:function(){return u(!0)}},"Editar nombre"),p&&n.createElement("div",{className:"alert alert-warning mt-3"},"Solo archivos PNG, JPG o JPEG"),n.createElement("div",{className:"custom-file"},n.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01",style:{display:"none"},onChange:function(e){return function(e){console.log(e.target.files[0]);var t=e.target.files[0];if(void 0!==t)return"image/png"!==t.type&&"image/jpg"!==t.type&&"image/jpeg"!==t.type?(f(!0),void console.log("no subio imagen")):(b((0,l.FT)(t)),console.log("foto ok"),void f(!1));console.log("no se subio imagen")}(e)},disabled:t}),n.createElement("label",{className:t?"btn btn-dark mt-4 mb-5 disabled":"btn btn-dark mt-4 mb-5",htmlFor:"inputGroupFile01"},"Actualizar Imagen"))),t&&n.createElement("div",{className:"card-body"},n.createElement("div",{className:"d-flex justify-content-center mt-3"},n.createElement("div",{className:"spinner-border text-danger",role:"status"},n.createElement("span",{className:"sr-only"},"Loading...")))),m&&n.createElement("div",{className:"card-body"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-md-5"},n.createElement("div",{className:"input-group mb-3"},n.createElement("input",{type:"text",className:"form-control",value:i,onChange:function(e){return c(e.target.value)}}),n.createElement("div",{className:"input-group-append"},n.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){i.trim()?(b((0,l.uE)(i)),u(!1)):console.log("nombre vacio")}},"Actualizar"))))))))}}}]);
//# sourceMappingURL=536.bundle.js.map