(this["webpackJsonpevro-food"]=this["webpackJsonpevro-food"]||[]).push([[16],{254:function(e,t,s){e.exports={list:"styles_list__2N7XS",item:"styles_item__3cVVj",icon:"styles_icon__3OlqV"}},255:function(e,t,s){e.exports={footer:"styles_footer__1mCPR",container:"styles_container__228Nm",list:"styles_list__1JNml",item:"styles_item__1AayQ",title:"styles_title__3QbXd",wripper:"styles_wripper__2TNt7",link:"styles_link__12fQh",icon:"styles_icon__2TAtr",subtitle:"styles_subtitle__1BeEy",text:"styles_text__2lrkh",visa:"styles_visa__SXsRa",itemNone:"styles_itemNone__2EILr",copyright:"styles_copyright___zziA"}},257:function(e,t,s){"use strict";s(0);var c=s(19),a=s(136),n=s(254),i=s.n(n),l=s(44),r=s(261),o=s(6),j=function(){return Object(o.jsxs)("ul",{className:i.a.list,children:[Object(o.jsx)("li",{className:i.a.item,children:Object(o.jsx)(l.a,{icon:r.c,className:i.a.icon})}),Object(o.jsx)("li",{className:i.a.item,children:Object(o.jsx)(l.a,{icon:r.a,className:i.a.icon})}),Object(o.jsx)("li",{className:i.a.item,children:Object(o.jsx)(l.a,{icon:r.d,className:i.a.icon})}),Object(o.jsx)("li",{className:i.a.item,children:Object(o.jsx)(l.a,{icon:r.e,className:i.a.icon})})]})},_=s(33),u=s.p+"static/media/visamaster.feadcd88.png",m=s(255),b=s.n(m),d=s(45),O=s(262);t.a=function(){var e=Object(c.g)();return Object(o.jsx)("footer",{className:b.a.footer,children:Object(o.jsx)("div",{className:b.a.container,children:Object(o.jsxs)("ul",{className:b.a.list,children:[Object(o.jsxs)("li",{className:b.a.item,children:[Object(o.jsx)("h4",{className:b.a.title,children:"\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(o.jsx)("div",{className:b.a.wripper,children:Object(o.jsxs)("h3",{className:b.a.link,onClick:function(){return e.push(_.a.contacts)},children:[Object(o.jsx)(l.a,{className:b.a.icon,icon:d.i,color:"#ffffff",size:"2x"}),a.a]})}),Object(o.jsx)("div",{className:b.a.wripper,children:Object(o.jsxs)("a",{className:b.a.link,href:"tel:".concat(a.d),children:[Object(o.jsx)(l.a,{className:b.a.icon,icon:d.j,color:"#ffffff",size:"2x"}),a.d]})}),Object(o.jsx)("div",{className:b.a.wripper,children:Object(o.jsxs)("a",{className:b.a.link,href:"mailto:".concat(a.b),children:[Object(o.jsx)(l.a,{className:b.a.icon,icon:O.a,color:"#ffffff",size:"2x"}),a.b]})})]}),Object(o.jsxs)("li",{className:"".concat(b.a.item," ").concat(b.a.itemNone),children:[Object(o.jsx)("h4",{className:b.a.title,children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"}),Object(o.jsx)("p",{className:b.a.text,onClick:function(){return e.push(_.a.products)},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0422\u043e\u0432\u0430\u0440\u044b"}),Object(o.jsx)("p",{className:b.a.text,onClick:function(){return e.push(_.a.products)},children:"\u0422\u043e\u0432\u0430\u0440\u044b"}),Object(o.jsx)("p",{className:b.a.text,onClick:function(){return e.push(_.a.contacts)},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(o.jsxs)("li",{className:b.a.item,children:[Object(o.jsx)("h4",{className:b.a.title,children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"}),Object(o.jsx)(j,{}),Object(o.jsx)("img",{className:b.a.visa,src:u,alt:"visa"})]})]})})})}},279:function(e,t,s){"use strict";var c=s(2),a=s(0),n=s(63),i=s(62),l=s(19),r=s(280),o=s.n(r),j=s(105),_=s(6),u=Object(i.a)((function(e){var t=e.product,s=Object(n.a)().ProductsStore,i=t.id,r=t.category,u=t.name,m=t.price,b=t.image,d=t.hot,O=(t.description,t.aboutProduct,t.qantity),h=Object(l.g)(),x=Object(a.useState)(O),f=Object(c.a)(x,2),p=f[0],N=f[1],y=function(e){var t=e.target.dataset;"decrement"===t.name&&p>1&&N((function(e){return e-1})),"increment"===t.name&&N((function(e){return e+1}))};return Object(_.jsxs)("li",{className:o.a.item,children:[d?Object(_.jsxs)("p",{className:o.a.hot,children:[" - ",d," %"]}):null,Object(_.jsx)("img",{className:o.a.img,src:b,alt:"productImg",onClick:function(){}}),Object(_.jsxs)("div",{className:o.a.wripper,children:[Object(_.jsx)("h2",{className:o.a.title,onClick:function(){return h.push("/products/".concat(r,"/").concat(i))},children:u}),Object(_.jsxs)("p",{className:o.a.price,children:[m,"\u0433\u0440\u043d",Object(_.jsxs)("span",{className:o.a.sale,children:[" ",1.2*m,"\u0433\u0440\u043d"]})]}),Object(_.jsxs)("div",{className:o.a.btnContainer,children:[Object(_.jsx)("button",{className:o.a.btn,type:"button","data-name":"decrement",onClick:function(e){return y(e)},children:"-"}),Object(_.jsx)("button",{className:o.a.value,children:p}),Object(_.jsx)("button",{className:o.a.btn,type:"button","data-name":"increment",onClick:function(e){return y(e)},children:"+"})]}),Object(_.jsx)("div",{className:o.a.iconContainer,onClick:function(){return function(e){s.remuveFromCart(e.id)}(t)},children:Object(_.jsx)("svg",{className:o.a.iconBin,children:Object(_.jsx)("use",{href:j.a+"#icon-bin"})})})]})]})}));t.a=u},280:function(e,t,s){e.exports={item:"styles_item__2pYgS",hot:"styles_hot__2Khu0",img:"styles_img__10ZFP",title:"styles_title__UnuNm",text:"styles_text__2KYlj",wripper:"styles_wripper__3DWwq",price:"styles_price__3JnTz",sale:"styles_sale__3E40p",btnContainer:"styles_btnContainer__3qNzq",btn:"styles_btn__12wt3",value:"styles_value__2mpYO",iconContainer:"styles_iconContainer__3gntE",iconBin:"styles_iconBin__2zkDb"}},339:function(e,t,s){e.exports={container:"styles_container__1zIf_",title:"styles_title__3XeDR",list:"styles_list__2yFVk",totalContainer:"styles_totalContainer__1BIq6",totalPrice:"styles_totalPrice__1054Y",orderButton:"styles_orderButton__1D608",remuveButton:"styles_remuveButton__2EL4B",titleEmpty:"styles_titleEmpty__MgsIx"}},340:function(e,t,s){e.exports={cartPage:"styles_cartPage__3UuoL",container:"styles_container__u0cje"}},403:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(63),n=s(62),i=s(1),l=s(2),r=s(19),o=s(33),j=s(279),_=s(339),u=s.n(_),m=s(54),b=s(6),d=Object(n.a)((function(){var e=Object(a.a)().ProductsStore,t=e.cart,s=e.products,n=Object(r.g)(),_=Object(c.useState)(0),d=Object(l.a)(_,2),O=d[0],h=d[1],x=function(){var e=[];return Array.from(new Set(t)).forEach((function(c){var a=s.find((function(e){return e.id===c}));a&&e.push(Object(i.a)(Object(i.a)({},a),{},{qantity:t.filter((function(e){return e===a.id})).length}))})),e},f=Object(c.useState)(x()),p=Object(l.a)(f,2),N=p[0],y=p[1];Object(c.useEffect)((function(){y(x())}),[t,s]),Object(c.useEffect)((function(){v()}),[N]);var v=function(){var t=null===N||void 0===N?void 0:N.reduce((function(e,t){return e+=Number((null===t||void 0===t?void 0:t.price)*t.qantity)}),0);h(t),e.setTotalPrice(t)};return Object(b.jsx)("div",{className:u.a.container,children:N.length?Object(b.jsxs)("div",{className:u.a.cart,children:[Object(b.jsx)("h2",{className:u.a.title,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(b.jsx)("ul",{className:u.a.list,children:N.map((function(e){return Object(b.jsx)(j.a,{product:e},e.id)}))}),Object(b.jsxs)("div",{className:u.a.totalContainer,children:[Object(b.jsxs)("h2",{className:u.a.totalPrice,children:[O," \u0433\u0440\u043d"]}),Object(b.jsx)("button",{type:"button",onClick:function(){return n.push(o.a.order)},className:u.a.orderButton,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:u.a.titleEmpty,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!"}),Object(b.jsx)(m.a,{description:!1})]})})})),O=s(257),h=s(340),x=s.n(h),f=Object(n.a)((function(){return Object(b.jsxs)("div",{className:x.a.cartPage,children:[Object(b.jsx)("div",{className:x.a.container,children:Object(b.jsx)(d,{})}),Object(b.jsx)(O.a,{})]})}));t.default=f}}]);
//# sourceMappingURL=16.dee86d9c.chunk.js.map