(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),b=r,m=f["".concat(i,".").concat(b)]||f[b]||u[b]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(105));const o={id:"fonts",title:"Changing Fonts",sidebar_label:"Changing Fonts"},i={unversionedId:"fonts",id:"fonts",isDocsHomePage:!1,title:"Changing Fonts",description:"By default, I use 2 Fonts namely: Rubik & Playfair Display from the Google Fonts Library. You can find the Linking to the Font Files in the head tag of all the .html files.",source:"@site/docs\\fonts.md",slug:"/fonts",permalink:"/mysixpak/docs/fonts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fonts.md",version:"current",sidebar_label:"Changing Fonts",sidebar:"someSidebar",previous:{title:"Color Schemes",permalink:"/mysixpak/docs/color"},next:{title:"Animate on scroll library",permalink:"/mysixpak/docs/scroll"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, I use 2 Fonts namely: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://fonts.google.com/specimen/Rubik?query=Rubik"}),"Rubik")," & ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://fonts.google.com/specimen/Playfair+Display?query=Playfair+Display"}),"Playfair Display")," from the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.google.com/fonts"}),"Google Fonts Library"),". You can find the Linking to the Font Files in the ",Object(a.b)("inlineCode",{parentName:"p"},"head")," tag of all the ",Object(a.b)("inlineCode",{parentName:"p"},".html")," files."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<link href="//fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap" rel="stylesheet"/>\n<link href="//fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet"/>\n')),Object(a.b)("p",null,"after that You simply need to change the ",Object(a.b)("inlineCode",{parentName:"p"},"font-family")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"css/fonts.css")," file."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"font-family: 'Rubik', sans-serif;\nfont-family: 'Playfair Display', serif;\n")))}s.isMDXComponent=!0}}]);