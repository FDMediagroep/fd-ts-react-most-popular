module.exports=function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";var a=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},r=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(t(2)),l=t(3),o=r(t(4));e.default=function(n){var e=i.useState("tab-most-read"),t=e[0],a=e[1],r=function(n){a(n.currentTarget.classList.item(0))};return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,null),i.default.createElement(o.default,{cardStyle:n.cardStyle,className:"fd-most-popular"},i.default.createElement("div",{className:"tab-header"},i.default.createElement("h3",{className:"tab-most-read"+("tab-most-read"===t?" active":""),onClick:r},n.mostReadLabel?n.mostReadLabel:"Meest gelezen"),n.mostComments.length?i.default.createElement("h3",{className:"tab-most-comments"+("tab-most-comments"===t?" active":""),onClick:r},n.mostCommentsLabel?n.mostCommentsLabel:"Meeste reacties"):null),i.default.createElement("ol",{className:"tab-most-read"===t?" active":""},n.mostRead.map(function(n){return i.default.createElement("li",{key:n.uuid},i.default.createElement("a",{href:n.url,target:n.target,className:n.isRead?"is-read":""},n.label))})),n.mostComments.length?i.default.createElement("ol",{className:"tab-most-comments"===t?" active":""},n.mostComments.map(function(n){return i.default.createElement("li",{key:n.uuid},i.default.createElement("a",{href:n.url,target:n.target,className:n.isRead?"is-read":""},n.label))})):null))};var s,c,d,f=l.css(s||(s=a(['\n.fd-most-popular {\n    .tab-header {\n        display: flex;\n    }\n    h3 {\n        margin: 0;\n        font-size: 1rem;\n        font-family: \'ProximaNovaBold\' ,sans-serif;\n        line-height: 1.1em;\n        color: #677381;\n        cursor: pointer;\n        background: rgba(0,0,0,0.1);\n        &.active {\n            color: #49a4a2;\n            background: transparent;\n        }\n        flex: 1 1 auto;\n        white-space: nowrap;\n        box-sizing: border-box;\n        display: inline-block;\n        padding: 12px 15px;\n    }\n\n    ol {\n        margin: 0;\n        padding: 0;\n        display: none;\n        &.active {\n            display: block;\n        }\n        li {\n            color: #49a4a2;\n            display: table;\n            font-family: \'ProximaNovaBold\', Helvetica, Arial, sans-serif;\n            font-weight: 700;\n            text-transform: uppercase;\n            line-height: 1.2em;\n            min-height: 40px;\n            padding: 4px 0;\n            width: 100%;\n            border-top: 1px solid rgba(0, 0, 0, 0.1);\n            font-size: 1.875rem;\n        }\n        li:before {\n            display: table-cell;\n            vertical-align: middle;\n            text-align: center;\n            width: 42px;\n        }\n        li:first-child:before {\n            content: "1";\n        }\n        li:first-child+li:before {\n            content: "2";\n        }\n        li:first-child+li+li:before {\n            content: "3";\n        }\n        li:first-child+li+li+li:before {\n            content: "4";\n        }\n        li:first-child+li+li+li+li:before {\n            content: "5";\n        }\n    }\n\n    a {\n        display: table-cell;\n        font-family: \'ProximaNovaRegular\', sans-serif;\n        vertical-align: middle;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        padding: 6px;\n        font-weight: normal;\n        text-transform: none;\n        text-decoration: none;\n        line-height: 1.2em;\n        &.is-read {\n            opacity: 0.6;\n        }\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.0625rem;\n        }\n    }\n}\n'],['\n.fd-most-popular {\n    .tab-header {\n        display: flex;\n    }\n    h3 {\n        margin: 0;\n        font-size: 1rem;\n        font-family: \'ProximaNovaBold\' ,sans-serif;\n        line-height: 1.1em;\n        color: #677381;\n        cursor: pointer;\n        background: rgba(0,0,0,0.1);\n        &.active {\n            color: #49a4a2;\n            background: transparent;\n        }\n        flex: 1 1 auto;\n        white-space: nowrap;\n        box-sizing: border-box;\n        display: inline-block;\n        padding: 12px 15px;\n    }\n\n    ol {\n        margin: 0;\n        padding: 0;\n        display: none;\n        &.active {\n            display: block;\n        }\n        li {\n            color: #49a4a2;\n            display: table;\n            font-family: \'ProximaNovaBold\', Helvetica, Arial, sans-serif;\n            font-weight: 700;\n            text-transform: uppercase;\n            line-height: 1.2em;\n            min-height: 40px;\n            padding: 4px 0;\n            width: 100%;\n            border-top: 1px solid rgba(0, 0, 0, 0.1);\n            font-size: 1.875rem;\n        }\n        li:before {\n            display: table-cell;\n            vertical-align: middle;\n            text-align: center;\n            width: 42px;\n        }\n        li:first-child:before {\n            content: "1";\n        }\n        li:first-child+li:before {\n            content: "2";\n        }\n        li:first-child+li+li:before {\n            content: "3";\n        }\n        li:first-child+li+li+li:before {\n            content: "4";\n        }\n        li:first-child+li+li+li+li:before {\n            content: "5";\n        }\n    }\n\n    a {\n        display: table-cell;\n        font-family: \'ProximaNovaRegular\', sans-serif;\n        vertical-align: middle;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        padding: 6px;\n        font-weight: normal;\n        text-transform: none;\n        text-decoration: none;\n        line-height: 1.2em;\n        &.is-read {\n            opacity: 0.6;\n        }\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.0625rem;\n        }\n    }\n}\n']))),m=l.createGlobalStyle(c||(c=a(["",""],["",""])),f);e.MostPopularStyle=l.css(d||(d=a(["\n","\n","\n"],["\n","\n","\n"])),o.CardStyle,f)},function(n,e){n.exports=require("react")},function(n,e){n.exports=require("styled-components")},function(n,e){n.exports=require("@fdmg/fd-card")}]);