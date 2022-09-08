"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{32342:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(67294),r=a(34334),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},87303:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(83117),r=a(67294),o=a(34334),i=a(5730),s=a(20636),l=a(76602),c=a(63735),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,i=e.lazy,m=e.block,p=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.U)(),k=x.tabGroupChoices,O=x.setTabGroupChoices,N=(0,r.useState)(w),S=N[0],T=N[1],C=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=k[v];null!=P&&P!==S&&y.some((function(e){return e.value===P}))&&T(P)}var E=function(e){var t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==S&&(D(t),T(n),null!=v&&O(v,String(n)))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=C.indexOf(e.currentTarget)+1;a=null!=(n=C[r])?n:C[0];break;case"ArrowLeft":var o,i=C.indexOf(e.currentTarget)-1;a=null!=(o=C[i])?o:C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return C.push(e)},onKeyDown:R,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,i.default)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},44836:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(87303),s=a(32342),l=["components"],c={sidebar_position:1,title:"Overview"},u=void 0,d={unversionedId:"Overview",id:"Overview",title:"Overview",description:"VRS is a file format optimized to record and playback streams of sensor data, such as images, audio, and other discrete sensors (IMU, temperature, etc.), that are stored in per-device streams of time-stamped records.",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/vrs/docs/Overview",draft:!1,editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/Overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",next:{title:"Organization",permalink:"/vrs/docs/Organization"}},m={},p=[{value:"Appropriate Use Cases",id:"appropriate-use-cases",level:2},{value:"Data Types and Data Conventions",id:"data-types-and-data-conventions",level:2},{value:"Features Overview",id:"features-overview",level:2}],f={toc:p};function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"VRS is a file format optimized to record and playback streams of sensor data, such as images, audio, and other discrete sensors (IMU, temperature, etc.), that are stored in per-device streams of time-stamped records."),(0,o.mdx)("p",null,"VRS was first created to record images and sensor data produced by early prototypes of the ",(0,o.mdx)("a",{parentName:"p",href:"https://store.facebook.com/quest/products/quest-2"},"Meta Quest device"),", to develop the device\u2019s positional tracking system known as ",(0,o.mdx)("a",{parentName:"p",href:"https://ai.facebook.com/blog/powered-by-ai-oculus-insight/"},"Oculus Insight"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://store.facebook.com/help/quest/articles/headsets-and-accessories/controllers-and-hand-tracking/hand-tracking-quest-2/"},"Meta Quest 2's hand tracking"),", and more to come."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://about.facebook.com/realitylabs/projectaria/"},"Project Aria")," records its data as VRS files."),(0,o.mdx)("h2",{id:"appropriate-use-cases"},"Appropriate Use Cases"),(0,o.mdx)("p",null,"VRS is designed to record similar looking bundles of data produced repeatedly over a period of time, in time-stamped records."),(0,o.mdx)(i.default,{mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"good_cases",label:"Good Use Cases",default:!0,mdxType:"TabItem"},"VRS is very well suited to record and playback:",(0,o.mdx)("li",null,"Data produced by the cameras and sensors of a Meta Quest device, including IMUs."),(0,o.mdx)("li",null,"Data produced by the cameras and sensors of Project Aria Glasses, including positional tracking cameras, eye tracking cameras, barometer sensors, GPS and BT beacons, multi-channel audio."),(0,o.mdx)("li",null,"Data produced in burst of activity, such as keyboard or mouse input data."),(0,o.mdx)("li",null,"TCP/IP or USB packets.")),(0,o.mdx)(s.default,{value:"bad_cases",label:"Poor Use Cases",mdxType:"TabItem"},"Even if VRS could be used to store pretty much any data, VRS is a poor choice to record anything without temporal information or data format regularity, such as:",(0,o.mdx)("li",null,"Text documents."),(0,o.mdx)("li",null,"Web pages."),(0,o.mdx)("li",null,"Point cloud data."),(0,o.mdx)("li",null,"3D models."),(0,o.mdx)("li",null,"Single images with annotations, unless you bundle many images and annotations in a single VRS file."))),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"While VRS is very effective at streaming very large amounts of data to disk, potentially to and from cloud storage, with real-time lossless compression, creating files potentially very large (typical VRS files range from 5 to 80 GB, but 1.5 TB VRS files exist), editing VRS files is not nearly as convenient, as the entire container typically needs to be rewritten.")),(0,o.mdx)("h2",{id:"data-types-and-data-conventions"},"Data Types and Data Conventions"),(0,o.mdx)("p",null,"VRS provides standardized methods to store images, audio, and discrete sensors data in compact and format evolution resilient records, so you can save data without having to worry too much about evolving requirements. But while VRS standardizes how to save common data types, VRS does not prescribe how to address specific use cases. Data format conventions are desirable, to enable teams working on identical or similar use cases to exchange data. However, such data format conventions are out of the scope of VRS."),(0,o.mdx)("h2",{id:"features-overview"},"Features Overview"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"VRS files contain multiple streams of time-sorted records generated by a set of sensors (camera, IMU, thermometer, GPS, etc), typically one set of sensors per stream."),(0,o.mdx)("li",{parentName:"ul"},"The file and each stream contain an independent set of tags, which are string name/value pairs that describe them."),(0,o.mdx)("li",{parentName:"ul"},"Streams may contain ",(0,o.mdx)("inlineCode",{parentName:"li"},"Configuration"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"State")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"Data")," records, each with a timestamp in a common time domain for the whole file. Typically, streams contain one ",(0,o.mdx)("inlineCode",{parentName:"li"},"Configuration")," record and one ",(0,o.mdx)("inlineCode",{parentName:"li"},"State")," record, followed by one to millions of ",(0,o.mdx)("inlineCode",{parentName:"li"},"Data")," records."),(0,o.mdx)("li",{parentName:"ul"},"Records are structured as a succession of typed content blocks. Typically, content blocks are metadata, image, audio, and custom content blocks."),(0,o.mdx)("li",{parentName:"ul"},"Metadata content blocks contain raw sensor data described once per stream, making the file format very efficient. The marginal cost of adding 1 byte of data to each metadata content block in a stream is 1 byte per record (or less when lossless compression happens)."),(0,o.mdx)("li",{parentName:"ul"},"Records can be losslessly compressed using lz4 or zstd, which can be fast enough to compress while recording on device."),(0,o.mdx)("li",{parentName:"ul"},"Multiple threads can create records concurrently for the same file, without CPU contention."),(0,o.mdx)("li",{parentName:"ul"},"VRS supports huge file sizes (tested with multi-terabyte use cases)."),(0,o.mdx)("li",{parentName:"ul"},"VRS supports chunked files: auto-chunking on creation and automated chunk detection for playback."),(0,o.mdx)("li",{parentName:"ul"},"Playback is optimized for timestamp order, which is key for network streaming."),(0,o.mdx)("li",{parentName:"ul"},"Random-access playback is supported."),(0,o.mdx)("li",{parentName:"ul"},"Custom ",(0,o.mdx)("inlineCode",{parentName:"li"},"FileHandler")," implementations can add support for cloud storage streaming.")))}v.isMDXComponent=!0},3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return v},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){return function(t){var a=d(t.components);return n.createElement(e,o({},t,{components:a}))}},d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);