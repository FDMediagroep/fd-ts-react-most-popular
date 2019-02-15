module.exports=function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";var a,r=this&&this.__extends||(a=function(e,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),i=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var l=o(t(2)),s=t(3),c=o(t(4)),d=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={active:"tab-most-read"},n.handleTabClick=function(e){n.setState({active:e.currentTarget.classList.item(0)})},n}return r(n,e),n.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(u,null),l.default.createElement(c.default,{cardStyle:this.props.cardStyle,className:"fd-most-popular"},l.default.createElement("div",{className:"tab-header"},l.default.createElement("h3",{className:"tab-most-read"+("tab-most-read"===this.state.active?" active":""),onClick:this.handleTabClick},this.props.mostReadLabel?this.props.mostReadLabel:"Meest gelezen"),l.default.createElement("h3",{className:"tab-most-comments"+("tab-most-comments"===this.state.active?" active":""),onClick:this.handleTabClick},this.props.mostCommentsLabel?this.props.mostCommentsLabel:"Meeste reacties")),l.default.createElement("ol",{className:"tab-most-read"===this.state.active?" active":""},this.props.mostRead.map(function(e){return l.default.createElement("li",{key:e.uuid},l.default.createElement("a",{href:e.url,target:e.target,className:""+(e.isRead?"is-read":void 0)},e.label))})),l.default.createElement("ol",{className:"tab-most-comments"===this.state.active?" active":""},this.props.mostComments.map(function(e){return l.default.createElement("li",{key:e.uuid},l.default.createElement("a",{href:e.url,target:e.target,className:""+(e.isRead?"is-read":void 0)},e.label))}))))},n}(l.PureComponent);n.default=d;var f,p,u=s.createGlobalStyle(f||(f=i(['\n.fd-most-popular {\n    .tab-header {\n        display: flex;\n    }\n    h3 {\n        margin: 0;\n        font-size: 1rem;\n        font-family: \'ProximaNovaBold\' ,sans-serif;\n        line-height: 1.1em;\n        color: #677381;\n        cursor: pointer;\n        background: rgba(0,0,0,0.1);\n        &.active {\n            color: #49a4a2;\n            background: transparent;\n        }\n        flex: 1 1 auto;\n        white-space: nowrap;\n        box-sizing: border-box;\n        display: inline-block;\n        padding: 12px 15px;\n    }\n\n    ol {\n        margin: 0;\n        padding: 0;\n        display: none;\n        &.active {\n            display: block;\n        }\n        li {\n            color: #49a4a2;\n            display: table;\n            font-family: \'ProximaNovaBold\', Helvetica, Arial, sans-serif;\n            font-weight: 700;\n            text-transform: uppercase;\n            line-height: 1.2em;\n            min-height: 40px;\n            padding: 4px 0;\n            width: 100%;\n            border-top: 1px solid rgba(0, 0, 0, 0.1);\n            font-size: 1.875rem;\n        }\n        li:before {\n            display: table-cell;\n            vertical-align: middle;\n            text-align: center;\n            width: 42px;\n        }\n        li:first-child:before {\n            content: "1";\n        }\n        li:first-child+li:before {\n            content: "2";\n        }\n        li:first-child+li+li:before {\n            content: "3";\n        }\n        li:first-child+li+li+li:before {\n            content: "4";\n        }\n        li:first-child+li+li+li+li:before {\n            content: "5";\n        }\n    }\n\n    a {\n        display: table-cell;\n        font-family: \'ProximaNovaRegular\', sans-serif;\n        vertical-align: middle;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        padding: 6px;\n        font-weight: normal;\n        text-transform: none;\n        text-decoration: none;\n        line-height: 1.2em;\n        &.is-read {\n            opacity: 0.6;\n        }\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.0625rem;\n        }\n    }\n}\n'],['\n.fd-most-popular {\n    .tab-header {\n        display: flex;\n    }\n    h3 {\n        margin: 0;\n        font-size: 1rem;\n        font-family: \'ProximaNovaBold\' ,sans-serif;\n        line-height: 1.1em;\n        color: #677381;\n        cursor: pointer;\n        background: rgba(0,0,0,0.1);\n        &.active {\n            color: #49a4a2;\n            background: transparent;\n        }\n        flex: 1 1 auto;\n        white-space: nowrap;\n        box-sizing: border-box;\n        display: inline-block;\n        padding: 12px 15px;\n    }\n\n    ol {\n        margin: 0;\n        padding: 0;\n        display: none;\n        &.active {\n            display: block;\n        }\n        li {\n            color: #49a4a2;\n            display: table;\n            font-family: \'ProximaNovaBold\', Helvetica, Arial, sans-serif;\n            font-weight: 700;\n            text-transform: uppercase;\n            line-height: 1.2em;\n            min-height: 40px;\n            padding: 4px 0;\n            width: 100%;\n            border-top: 1px solid rgba(0, 0, 0, 0.1);\n            font-size: 1.875rem;\n        }\n        li:before {\n            display: table-cell;\n            vertical-align: middle;\n            text-align: center;\n            width: 42px;\n        }\n        li:first-child:before {\n            content: "1";\n        }\n        li:first-child+li:before {\n            content: "2";\n        }\n        li:first-child+li+li:before {\n            content: "3";\n        }\n        li:first-child+li+li+li:before {\n            content: "4";\n        }\n        li:first-child+li+li+li+li:before {\n            content: "5";\n        }\n    }\n\n    a {\n        display: table-cell;\n        font-family: \'ProximaNovaRegular\', sans-serif;\n        vertical-align: middle;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        padding: 6px;\n        font-weight: normal;\n        text-transform: none;\n        text-decoration: none;\n        line-height: 1.2em;\n        &.is-read {\n            opacity: 0.6;\n        }\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.0625rem;\n        }\n    }\n}\n'])));n.MostPopularStyle=s.createGlobalStyle(p||(p=i(["\n","\n","\n"],["\n","\n","\n"])),c.CardStyle.globalStyle.rules,u.globalStyle.rules)},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@fdmg/fd-card")}]);