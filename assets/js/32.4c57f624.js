(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{220:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"公开发布手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公开发布手册"}},[s._v("#")]),s._v(" 公开发布手册")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("公开发布是指部署到 Maven Central. 只有核心项目成员才有权限发布到公开仓库.")])]),s._v(" "),a("h2",{attrs:{id:"设置-gpg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-gpg"}},[s._v("#")]),s._v(" 设置 GPG")]),s._v(" "),a("p",[s._v("在 macOS 上安装")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gnupg\n")])])]),a("p",[s._v("如果没有秘钥, 生成一个秘钥")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gpg --full-generate-key\n")])])]),a("p",[s._v("公开公有秘钥")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gpg --send-keys "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key-id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --keyserver hkp://subkeys.pgp.net\n")])])]),a("p",[s._v("查看秘钥")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gpg --list-keys\n")])])]),a("h2",{attrs:{id:"设置-sonatype-认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-sonatype-认证"}},[s._v("#")]),s._v(" 设置 Sonatype 认证")]),s._v(" "),a("p",[s._v("编辑并将下面的配置放入 "),a("code",[s._v("~/.m2/settings.xml")])]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("sonatype-nexus-snapshots"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{username}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{password}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("sonatype-nexus-staging"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{username}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{password}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("h2",{attrs:{id:"切出分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切出分支"}},[s._v("#")]),s._v(" 切出分支")]),s._v(" "),a("p",[s._v("只有在发布"),a("strong",[s._v("特性版本")]),s._v("时, 你才需要从 master 分支上切出分支.")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),s._v("\n")])])]),a("h2",{attrs:{id:"切换发布版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换发布版本"}},[s._v("#")]),s._v(" 切换发布版本")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mvn versions:set -DnewVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),s._v(".0\nmvn versions:commit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(release) prepare release v2.5.0-rc0'")]),s._v("\n")])])]),a("h2",{attrs:{id:"打包并部署到-sonatype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包并部署到-sonatype"}},[s._v("#")]),s._v(" 打包并部署到 Sonatype")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mvn clean deploy -DskipTests -Prelease\nmvn clean deploy -DskipTests -Prelease -Pscala-2.12\n")])])]),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),a("p",[s._v("进入 "),a("a",{attrs:{href:"https://oss.sonatype.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sonatype 仓库"),a("OutboundLink")],1)]),s._v(" "),a("ol",[a("li",[s._v("验证资源文件")]),s._v(" "),a("li",[s._v("关闭仓库")]),s._v(" "),a("li",[s._v("发布到 Maven Central")])]),s._v(" "),a("h2",{attrs:{id:"在-github-上声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-github-上声明"}},[s._v("#")]),s._v(" 在 GitHub 上声明")]),s._v(" "),a("p",[s._v("编辑 "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub 发布页"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"切换开发版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换开发版本"}},[s._v("#")]),s._v(" 切换开发版本")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mvn versions:set -DnewVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".0-SNAPSHOT\nmvn versions:commit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(release) prepare for next development iteration'")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);