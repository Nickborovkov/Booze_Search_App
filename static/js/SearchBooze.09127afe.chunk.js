(this.webpackJsonpBooze_Search=this.webpackJsonpBooze_Search||[]).push([[3],{235:function(e,t,n){"use strict";t.a=n.p+"static/media/imagePlaceholder.3d378c83.jpg"},409:function(e,t,n){"use strict";n.r(t);var i=n(13),c=n(0),r=n(88),a=n(89),s=n(411),o=n(389),l=n(413),d=n(390),j=n(213),b=n(30),u=n(235),m=n(2),h=function(e){var t=e.item;return Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,xl:3,sx:{margin:"10px"},children:Object(m.jsx)(b.b,{to:"/cocktails/cocktail/".concat(t.idDrink),style:{textDecoration:"none"},children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(l.a,{component:"img",height:"400",image:t.strDrinkThumb||u.a,alt:"drinkImage"}),Object(m.jsx)(d.a,{children:Object(m.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"div",children:t.strDrink})})]})})})},x=n(165),O=n(412),g=n(387),f=n(407),p=n(210),y=n(388),v=function(e){var t=e.searchType,n=e.items,i=e.redirectIngredient,c=e.setItems,r=y.a().shape({items:y.b().required("Field can't be empty").max(150,"Max length is 150 symbols").matches(/^[a-zA-Z0-9_., -]*$/,"Only english letters and digits")});return Object(m.jsx)(g.a,{initialValues:{items:i||n},validateOnBlur:!0,onSubmit:function(e){c(e.items)},validationSchema:r,children:function(e){var n=e.values,i=e.errors,c=e.handleChange,r=e.handleBlur,a=e.handleSubmit,o=e.isValid,l=e.dirty;return Object(m.jsx)("form",{children:Object(m.jsxs)(s.a,{container:!0,justifyContent:"center",sx:{width:"80%",margin:"50px auto"},children:[Object(m.jsx)(s.a,{item:!0,xs:12,md:10,children:Object(m.jsx)(f.a,{error:!!i.items,label:i.items||"Search for cocktails",variant:"outlined",name:"items",value:n.items,onChange:c,onClick:function(e){return e.target.value=""},fullWidth:!0,size:"small",color:"input",onBlur:r,helperText:"byIngredient"===t?"Requires full ingredient name":""})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:2,children:Object(m.jsx)(x.a,{children:Object(m.jsx)(p.a,{disabled:!o&&!l,variant:"contained",color:"button",onClick:a,type:"submit",fullWidth:!0,size:"large",sx:{display:"block"},children:"Search"})})})]})})}})};t.default=function(e){var t=e.searchType,n=Object(r.b)(),o=Object(r.c)((function(e){return e.booze.boozeList})),l=Object(r.c)((function(e){return e.booze.redirectIngredient})),d=Object(r.c)((function(e){return e.common.isLoading})),b=Object(r.c)((function(e){return e.common.error})),u=Object(c.useState)("rum"),g=Object(i.a)(u,2),f=g[0],p=g[1];return Object(c.useEffect)((function(){"byName"===t?n(Object(a.c)(f)):"byIngredient"===t&&n(Object(a.b)(f)),window.scrollTo(-300,0)}),[n,f,t]),Object(c.useEffect)((function(){l&&n(Object(a.b)(l))}),[n,l]),Object(m.jsxs)(x.a,{children:[Object(m.jsxs)(j.a,{variant:"h3",align:"center",mt:3,sx:{color:"#333333"},children:["byName"===t&&"Search Cocktails By Name","byIngredient"===t&&"Search Cocktails By Ingredient"]}),Object(m.jsx)(v,{searchType:t,items:f,redirectIngredient:l,setItems:p}),b&&Object(m.jsx)(x.a,{mt:4,mb:4,children:Object(m.jsx)(j.a,{variant:"h3",align:"center",sx:{color:"#e53935"},children:b})}),d&&!b&&Object(m.jsx)(s.a,{container:!0,spacing:2,justifyContent:"center",sx:{width:"80%",margin:"50px auto"},children:[1,2,3,4].map((function(e){return Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,xl:3,children:Object(m.jsx)(O.a,{variant:"rectangular",height:400,animation:"wave"})},e)}))}),!d&&o&&!b&&Object(m.jsx)(s.a,{container:!0,spacing:0,justifyContent:"center",sx:{width:"80%",margin:"50px auto"},children:o.map((function(e){return Object(m.jsx)(h,{item:e},e.idDrink)}))})]})}}}]);
//# sourceMappingURL=SearchBooze.09127afe.chunk.js.map