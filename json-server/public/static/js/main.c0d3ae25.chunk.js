(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,t,s){},151:function(e,t,s){},152:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),r=s.n(c),a=s(16),o=s.n(a),i=(s(100),s(101),s(102),s(103),s(20)),l=s(21),d=s(23),j=s(22),h=s(153),m=s(154),b=s(155),u=s(156),O=s(157),x=s(158),f=s(11),p=function(){return Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(n.jsx)("p",{children:"Loading . . ."})]})},g="http://localhost:3001/";function N(e){var t=e.dish;return Object(n.jsx)(h.a,{children:Object(n.jsxs)(f.b,{to:"/menu/".concat(t.id),children:[Object(n.jsx)(m.a,{width:"100%",src:g+t.image,alt:t.name}),Object(n.jsx)(b.a,{children:Object(n.jsx)(u.a,{children:t.name})})]})})}var v=function(e){var t=e.dishes.dishes.map((function(e){return Object(n.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(n.jsx)(N,{dish:e})},e.id)}));return e.dishes.isLoading?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(p,{})})}):e.dishes.errMess?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h4",{children:e.dishes.errMess})})})}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)(x.a,{active:!0,children:"Menu"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Menu"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsx)("div",{className:"row",children:t})]})},y=s(24),w=s(159),M=s(160),k=s(161),L=s(162),E=s(163),C=s(164),F=s(165),S=s(166),D=s(180),T=s(167),A=s(168),I=s(169),R=s(170),q=s(171),P=s(172),_=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(y.a)(n)),n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),n.handleLogin=n.handleLogin.bind(Object(y.a)(n)),n}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{dark:!0,expand:"md",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(M.a,{onClick:this.toggleNav}),Object(n.jsx)(k.a,{className:"mr-auto",href:"/",children:Object(n.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(n.jsxs)(L.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(n.jsxs)(E.a,{navbar:!0,children:[Object(n.jsx)(C.a,{children:Object(n.jsxs)(f.c,{className:"nav-link",to:"/home",children:[Object(n.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(n.jsx)(C.a,{children:Object(n.jsxs)(f.c,{className:"nav-link",to:"/aboutus",children:[Object(n.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(n.jsx)(C.a,{children:Object(n.jsxs)(f.c,{className:"nav-link",to:"/menu",children:[Object(n.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(n.jsx)(C.a,{children:Object(n.jsxs)(f.c,{className:"nav-link",to:"/contactus",children:[Object(n.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(n.jsx)(E.a,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(F.a,{outline:!0,onClick:this.toggleModal,children:[Object(n.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(n.jsx)(S.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row row-header",children:Object(n.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(n.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(n.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience."})]})})})}),Object(n.jsxs)(D.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(n.jsx)(T.a,{toggle:this.toggleModal,children:"Login"}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(I.a,{onSubmit:this.handleLogin,children:[Object(n.jsxs)(R.a,{children:[Object(n.jsx)(q.a,{htmlFor:"username",children:"Username"}),Object(n.jsx)(P.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(n.jsxs)(R.a,{children:[Object(n.jsx)(q.a,{htmlFor:"password",children:"Password"}),Object(n.jsx)(P.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(n.jsx)(R.a,{check:!0,children:Object(n.jsxs)(q.a,{check:!0,children:[Object(n.jsx)(P.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(n.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(c.Component),H=s(173),B=s(174),Y=s(175),K=s(25);function U(e){var t=e.item,s=e.isLoading,c=e.errMess;return s?Object(n.jsx)(p,{}):c?Object(n.jsx)("h4",{children:c}):Object(n.jsx)(K.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(h.a,{children:[void 0!==t&&Object(n.jsx)(m.a,{src:g+t.image,alt:t.name}),Object(n.jsxs)(H.a,{children:[void 0!==t&&Object(n.jsx)(u.a,{children:t.name}),void 0!==t&&t.designation?Object(n.jsx)(B.a,{children:t.designation}):null,void 0!==t&&Object(n.jsx)(Y.a,{children:t.description})]})]})})}var G=function(e){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row align-items-start",children:[Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(U,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})}),Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(U,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(U,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})},W=s(176),J=s(177),z=s(10),Z=function(e){return e&&e.length},$=function(e){return function(t){return!t||t.length<=e}},Q=function(e){return function(t){return t&&t.length>=e}},V=function(e){return!isNaN(Number(e))},X=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ee=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n}return Object(l.a)(s,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)(x.a,{active:!0,children:"Contact Us"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Contact Us"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h3",{children:"Location Information"})}),Object(n.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["121, Clear Water Bay Road",Object(n.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(n.jsx)("br",{}),"HONG KONG",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope"}),": ",Object(n.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(n.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(n.jsx)("h5",{children:"Map of our Location"})}),Object(n.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(n.jsxs)("div",{className:"btn-group",role:"group",children:[Object(n.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(n.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(n.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(n.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h3",{children:"Send us your Feedback"})}),Object(n.jsx)("div",{className:"col-12 col-md-9",children:Object(n.jsxs)(z.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(n.jsxs)(J.a,{md:10,children:[Object(n.jsx)(z.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:Z,minLength:Q(3),maxLength:$(15)}}),Object(n.jsx)(z.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(n.jsxs)(J.a,{md:10,children:[Object(n.jsx)(z.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:Z,minLength:Q(3),maxLength:$(15)}}),Object(n.jsx)(z.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters. ",maxLength:"Must be 15 characters or less. "}})]})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(n.jsxs)(J.a,{md:10,children:[Object(n.jsx)(z.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:Z,minLength:Q(3),maxLength:$(15),isNumber:V}}),Object(n.jsx)(z.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 numbers. ",maxLength:"Must be 15 numbers or less. ",isNumber:"Must be a number. "}})]})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"email",md:2,children:"Email"}),Object(n.jsxs)(J.a,{md:10,children:[Object(n.jsx)(z.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Z,validEmail:X}}),Object(n.jsx)(z.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(J.a,{md:{size:6,offset:2},children:Object(n.jsx)("div",{className:"form-check",children:Object(n.jsxs)(q.a,{check:!0,children:[Object(n.jsx)(z.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(n.jsx)("strong",{children:"May we contact you?"})]})})}),Object(n.jsx)(J.a,{md:{size:3,offset:1},children:Object(n.jsxs)(z.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(n.jsx)("option",{children:"Tel."}),Object(n.jsx)("option",{children:"Email"})]})})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(n.jsx)(J.a,{md:10,children:Object(n.jsx)(z.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(n.jsx)(W.a,{className:"form-group",children:Object(n.jsx)(J.a,{md:{size:10,offset:2},children:Object(n.jsx)(F.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(r.a.Component),te=s(178),se=s(179);function ne(e){var t=e.leader;return Object(n.jsx)(K.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(te.a,{tag:"li",children:[Object(n.jsx)(te.a,{left:!0,middle:!0,children:Object(n.jsx)(te.a,{object:!0,src:g+t.image,alt:t.name})}),Object(n.jsxs)(te.a,{body:!0,className:"ml-5",children:[Object(n.jsx)(te.a,{heading:!0,children:t.name}),Object(n.jsx)("p",{children:t.designation}),Object(n.jsx)("p",{children:t.description})]})]})})}var ce=function(e){var t=e.leaders.map((function(e){return Object(n.jsx)(K.Fade,{in:!0,children:Object(n.jsx)(ne,{leader:e,className:"col-12 mt-5"},e.id)})}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)(x.a,{active:!0,children:"About Us"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"About Us"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsxs)("div",{className:"col-12 col-md-6",children:[Object(n.jsx)("h2",{children:"Our History"}),Object(n.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(n.jsxs)("p",{children:["The restaurant traces its humble beginnings to"," ",Object(n.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(n.jsx)("div",{className:"col-12 col-md-5",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(se.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(n.jsx)(H.a,{children:Object(n.jsxs)("dl",{className:"row p-1",children:[Object(n.jsx)("dt",{className:"col-6",children:"Started"}),Object(n.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(n.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(n.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(n.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(n.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(n.jsx)("dt",{className:"col-6",children:"Employees"}),Object(n.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(h.a,{children:Object(n.jsx)(H.a,{className:"bg-faded",children:Object(n.jsxs)("blockquote",{className:"blockquote",children:[Object(n.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(n.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(n.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h2",{children:"Corporate Leadership"})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(te.a,{list:!0,children:Object(n.jsx)(K.Stagger,{in:!0,children:t})})})]})]})};var re=function(e){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(n.jsx)("h5",{children:"Links"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/aboutus",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(n.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["121, Clear Water Bay Road",Object(n.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(n.jsx)("br",{}),"HONG KONG",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(n.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(n.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(n.jsx)("i",{className:"fa fa-google-plus"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(n.jsx)("i",{className:"fa fa-facebook"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(n.jsx)("i",{className:"fa fa-linkedin"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(n.jsx)("i",{className:"fa fa-twitter"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(n.jsx)("i",{className:"fa fa-youtube"})}),Object(n.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(n.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};function ae(e){var t=e.dish;return Object(n.jsx)("div",{className:"col-md-5 col-12 m-1",children:Object(n.jsx)(K.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(m.a,{top:!0,src:g+t.image,alt:t.name}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)(u.a,{children:t.name}),Object(n.jsx)(Y.a,{children:t.description})]})]},t.id)})})}var oe=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),n}return Object(l.a)(s,[{key:"toggleModal",value:function(){console.log("modal clicked"),this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"col-md-5 col-12 m-1",children:[Object(n.jsx)(K.Stagger,{in:!0,children:this.props.comments.map((function(e){return Object(n.jsx)(K.Fade,{in:!0,children:Object(n.jsxs)("li",{className:"comments text-left m-2 mb-5",style:{listStyleType:"none"},children:[Object(n.jsx)("p",{children:e.comment}),Object(n.jsxs)("author",{children:["-- ",e.author]}),",",Object(n.jsx)("date",{children:e.date})]})})}))}),Object(n.jsx)(E.a,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(F.a,{onClick:this.toggleModal,children:[Object(n.jsx)("span",{className:"fa fa-comment fa-lg"})," Submit Comment"]})})}),Object(n.jsx)(de,{isOpen:this.state.isModalOpen,dishId:this.props.dishId,toggle:this.toggleModal,postComment:this.props.postComment})]})}}]),s}(c.Component),ie=function(e){return e&&e.length},le=function(e){return function(t){return!t||t.length<=e}},de=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return Object(n.jsxs)(D.a,{isOpen:this.props.isOpen,toggle:this.props.toggleModal,children:[Object(n.jsx)(T.a,{toggle:this.props.toggleModal,children:"Submit Comment"}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(z.Form,{model:"feedback",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"rating",md:12,children:"Rating"}),Object(n.jsx)(J.a,{md:12,children:Object(n.jsxs)(z.Control.select,{model:".rating",name:"rating",className:"form-control",children:[Object(n.jsx)("option",{children:"1"}),Object(n.jsx)("option",{children:"2"}),Object(n.jsx)("option",{children:"3"}),Object(n.jsx)("option",{children:"4"}),Object(n.jsx)("option",{children:"5"})]})})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"author",md:12,children:"Your Name"}),Object(n.jsxs)(J.a,{md:12,children:[Object(n.jsx)(z.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:ie,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:le(15)}}),Object(n.jsx)(z.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters. ",maxLength:"Must be 15 characters or less. "}})]})]}),Object(n.jsxs)(W.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"comment",md:12,children:"Comment"}),Object(n.jsx)(J.a,{md:12,children:Object(n.jsx)(z.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})]}),Object(n.jsx)(W.a,{className:"form-group",children:Object(n.jsx)(J.a,{md:{size:3},children:Object(n.jsx)(F.a,{type:"submit",color:"primary",children:"Submit"})})})]})})]})}}]),s}(c.Component);var je=function(e){return e.isLoading?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(p,{})})}):e.errMess?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(n.jsx)(x.a,{active:!0,children:e.dish.name})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:e.dish.name}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(ae,{dish:e.dish}),Object(n.jsx)(oe,{comments:e.comments,dishId:e.dish.id,postComment:e.postComment})]})]}):void 0},he=s(12),me=s(27),be="ADD_COMMENT",ue="DISHES_LOADING",Oe="DISHES_FAILED",xe="ADD_DISHES",fe="ADD_COMMENTS",pe="COMMENTS_FAILED",ge="PROMOS_LOADING",Ne="ADD_PROMOS",ve="PROMOS_FAILED",ye="LEADERS_LOADING",we="ADD_LEADERS",Me="LEADERS_FAILED",ke="ADD_FEEDBACK",Le="FEEDBACK_FAILED",Ee=function(){return{type:ue}},Ce=function(e){return{type:Oe,payload:e}},Fe=function(e){return{type:xe,payload:e}},Se=function(e){return{type:pe,payload:e}},De=function(e){return{type:be,payload:e}},Te=function(){return{type:ge}},Ae=function(e){return{type:ve,payload:e}},Ie=function(e){return{type:Ne,payload:e}},Re=function(){return{type:ye}},qe=function(e){return{type:Me,payload:e}},Pe=function(e){return{type:we,payload:e}},_e=function(){return{type:"FEEDBACK_LOADING"}},He=function(e){return{type:Le,payload:e}},Be=function(e){return{type:ke,payload:e}},Ye=s(57),Ke=s(89),Ue=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders(),this.props.fetchFeedback()}},{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this,t=function(){return Object(n.jsx)(ce,{leaders:e.props.leaders.leaders})};return Object(n.jsxs)("div",{children:[Object(n.jsx)(_,{}),Object(n.jsx)("div",{children:Object(n.jsx)(Ye.a,{children:Object(n.jsx)(Ke.a,{classNames:"page",timeout:300,children:Object(n.jsxs)(he.d,{location:this.props.location,children:[Object(n.jsx)(he.b,{path:"/home",component:function(){return Object(n.jsx)(G,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.promotions.isLoading,leadersErrMess:e.props.promotions.errMess})}}),Object(n.jsx)(he.b,{exact:!0,path:"/aboutus",component:function(){return Object(n.jsx)(t,{leaders:e.props.leaders})}}),Object(n.jsx)(he.b,{exact:!0,path:"/menu",component:function(){return Object(n.jsx)(v,{dishes:e.props.dishes})}}),Object(n.jsx)(he.b,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(n.jsx)(je,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(n.jsx)(he.b,{exact:!0,path:"/contactus",component:function(){return Object(n.jsx)(ee,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback,feedback:e.props.feedback.feedback})}}),Object(n.jsx)(he.a,{to:"/home"})]})},this.props.location.key)})}),Object(n.jsx)(re,{})]})}}]),s}(c.Component),Ge=Object(he.g)(Object(me.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders,feedback:e.feedback}}),(function(e){return{postComment:function(t,s,n,c){return e(function(e,t,s,n){return function(c){var r={dishId:e,rating:t,author:s,comment:n};return r.date=(new Date).toISOString(),fetch(g+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(De(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,s,n,c))},fetchDishes:function(){e((function(e){return e(Ee(!0)),fetch(g+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Fe(t))})).catch((function(t){return e(Ce(t.message))}))}))},resetFeedbackForm:function(){e(z.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(g+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(De(t))})).catch((function(t){return e(Se(t.message))}))}))},fetchPromos:function(){return e((function(e){return e(Te()),fetch(g+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ie(t))})).catch((function(t){return e(Ae(t.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Re()),console.log("leaders"),fetch(g+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Pe(t))})).catch((function(t){return e(qe(t.message))}))}))},fetchFeedback:function(){return e((function(e){return e(_e()),console.log("feedback"),fetch(g+"feedback").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Be(t))})).catch((function(t){return e(He(t.message))}))}))},postFeedback:function(t,s,n,c,r,a,o){return e(function(e,t,s,n,c,r,a){return function(o){var i={firstname:e,lastname:t,telnum:s,email:n,agree:c,contactType:r,message:a};return i.date=(new Date).toISOString(),fetch(g+"feedback",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return alert("Thank you for your feedback! "+JSON.stringify(i));var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return o(Be(e))})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(t,s,n,c,r,a,o))}}}))(Ue)),We=(s(151),s(7)),Je=s(28),ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case ue:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case Oe:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(We.a)(Object(We.a)({},e),{},{errMess:null,comments:t.payload});case pe:return Object(We.a)(Object(We.a)({},e),{},{errMess:t.payload});case be:var s=t.payload;return Object(We.a)(Object(We.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case ge:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case ve:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case ye:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case Me:return Object(We.a)(Object(We.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,feedback:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(We.a)(Object(We.a)({},e),{},{errMess:null,feedback:t.payload});case Le:return Object(We.a)(Object(We.a)({},e),{},{errMess:t.payload});case ke:var s=t.payload;return Object(We.a)(Object(We.a)({},e),{},{feedback:e.feedback.concat(s)});default:return e}},Xe=s(92),et=s(93),tt=s.n(et),st={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},nt=Object(Je.createStore)(Object(Je.combineReducers)(Object(We.a)({dishes:ze,comments:Ze,promotions:$e,leaders:Qe,feedback:Ve},Object(z.createForms)({feedback:st}))),Object(Je.applyMiddleware)(Xe.a,tt.a)),ct=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)(me.Provider,{store:nt,children:Object(n.jsx)(f.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(Ge,{})})})})}}]),s}(c.Component),rt=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,181)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ct,{})}),document.getElementById("root")),rt()}},[[152,1,2]]]);
//# sourceMappingURL=main.c0d3ae25.chunk.js.map