(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{212:function(e,t,a){"use strict";a.r(t);var r=a(3),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-notes"}},[e._v("#")]),e._v(" Release Notes")]),e._v(" "),a("h2",{attrs:{id:"v2-4-2-nov-20-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-2-nov-20-2020"}},[e._v("#")]),e._v(" v2.4.2 (Nov 20, 2020)")]),e._v(" "),a("h3",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("Trim space before parsing SQL")]),e._v(" "),a("li",[e._v("Fix DateTime64 nanos and scale (#217)")]),e._v(" "),a("li",[e._v("Reset connection STATE when recreate connection (#221)")]),e._v(" "),a("li",[e._v("Skip remaining responses when consume PingResponse (#224)")]),e._v(" "),a("li",[e._v("Minor tunes")])]),e._v(" "),a("h2",{attrs:{id:"v2-4-1-nov-15-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-1-nov-15-2020"}},[e._v("#")]),e._v(" v2.4.1 (Nov 15, 2020)")]),e._v(" "),a("h3",{attrs:{id:"changelog-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog-2"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("Fix invalid package clickhouse-integration-spark_2.12 (#206)")])]),e._v(" "),a("h2",{attrs:{id:"v2-4-0-nov-9-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-0-nov-9-2020"}},[e._v("#")]),e._v(" v2.4.0 (Nov 9, 2020)")]),e._v(" "),a("h3",{attrs:{id:"highlight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlight"}},[e._v("#")]),e._v(" Highlight")]),e._v(" "),a("ul",[a("li",[e._v("Since this release v2.4.0, we switch to "),a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic versioning"),a("OutboundLink")],1),e._v(", and the bug fix version would be available quickly.")]),e._v(" "),a("li",[e._v("We introduce a new module "),a("code",[e._v("clickhouse-integration-spark")]),e._v(" base on Spark Jdbc DataSource API for integrating with Spark, check detail at "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC#integration-with-spark",target:"_blank",rel:"noopener noreferrer"}},[e._v("README"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("In the past few weeks, we were more focus on code quality, fixed all "),a("a",{attrs:{href:"https://lgtm.com/projects/g/housepower/ClickHouse-Native-JDBC/alerts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LGTM"),a("OutboundLink")],1),e._v(" alerts and got A+ score.")])]),e._v(" "),a("h3",{attrs:{id:"changelog-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog-3"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("Implement "),a("code",[e._v("clickhouse-integration-spark")]),e._v(" base on Spark Jdbc DataSource API (#170 #184)")]),e._v(" "),a("li",[e._v("Batch insert support nullable types in arrays and nested types (#144 #194)")]),e._v(" "),a("li",[e._v("Support Boolean (#196)")]),e._v(" "),a("li",[e._v("Fix timezone issue (#195)")]),e._v(" "),a("li",[e._v("Fix potential concurrence issue (#191)")]),e._v(" "),a("li",[e._v("Code refactor, fixed all "),a("a",{attrs:{href:"https://lgtm.com/projects/g/housepower/ClickHouse-Native-JDBC/alerts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LGTM"),a("OutboundLink")],1),e._v(" alerts and got A+ score.")]),e._v(" "),a("li",[e._v("Refactor "),a("code",[e._v("ClickHouseStatement")]),e._v(" inheritance tree (#201)")]),e._v(" "),a("li",[e._v("Migrate to mockito3 (#175)")]),e._v(" "),a("li",[e._v("Migrate to org.lz4:lz4-java (#174)")]),e._v(" "),a("li",[e._v("Migrate to Junit5 (#171)")]),e._v(" "),a("li",[e._v("Bump yandex/clickhouse-jdbc 0.2.4")]),e._v(" "),a("li",[e._v("Bump jmh 1.26")]),e._v(" "),a("li",[e._v("Enable checkstyle (#172)")]),e._v(" "),a("li",[e._v("Enable code coverage (#190)")]),e._v(" "),a("li",[e._v("Improve Docs and Readme")]),e._v(" "),a("li",[e._v("Add missing license headers")])]),e._v(" "),a("h2",{attrs:{id:"v2-3-oct-25-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-3-oct-25-2020"}},[e._v("#")]),e._v(" v2.3 (Oct 25, 2020)")]),e._v(" "),a("h3",{attrs:{id:"highlight-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlight-2"}},[e._v("#")]),e._v(" Highlight")]),e._v(" "),a("ul",[a("li",[e._v("Provide shaded version "),a("code",[e._v("clickhouse-native-jdbc-shaded")]),e._v(" since this release, see detail at README.md")])]),e._v(" "),a("h3",{attrs:{id:"changelog-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog-4"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("Fixed "),a("code",[e._v("SQLFeatureNotSupportedException")]),e._v(" in several scenarios (#142 thanks @dcastanier) (thanks @sundy-li)")]),e._v(" "),a("li",[e._v("Fixed return value for executeBatch in PreparedInsertStatement (#145 thanks @tauitdnmd)")]),e._v(" "),a("li",[e._v("Fixed jdbc url parse (#148 thanks @tauitdnmd)")]),e._v(" "),a("li",[e._v("Support zoned datetime DataType, i.e. "),a("code",[e._v("DateTime(Asia/Shanghai)")]),e._v(" (#158 thanks @sundy-li)")]),e._v(" "),a("li",[e._v("Refactor project to multi modules (#156 thanks @pan3793)")]),e._v(" "),a("li",[e._v("Remove "),a("code",[e._v("joda-time")]),e._v(", migrate "),a("code",[e._v("joda-time")]),e._v(" and legacy "),a("code",[e._v("java.util.Date")]),e._v(" to "),a("code",[e._v("java.time")]),e._v(" (#164 thanks @pan3793)")]),e._v(" "),a("li",[e._v("Integration Test against Java 8, Java 11 (thanks @sundy-li)")]),e._v(" "),a("li",[e._v("Integration Test with Spark 2.4.7&Scala 2.11 (thanks @sundy-li)")]),e._v(" "),a("li",[e._v("Bump junit from 4.11 to 4.13.1")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can find early releases at "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Release Page"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);