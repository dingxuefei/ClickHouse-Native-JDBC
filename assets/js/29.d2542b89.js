(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{217:function(e,n,t){"use strict";t.r(n);var r=t(3),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"benchmark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[e._v("#")]),e._v(" Benchmark")]),e._v(" "),t("p",[e._v("Benchmarks are run by the "),t("code",[e._v("github-workflow")]),e._v(" docker integration-test, eg "),t("a",{attrs:{href:"https://pipelines.actions.githubusercontent.com/QbHe5hNOfFaRrXVIS27533x1xALCRW60s95Fnk3uNRnLoX4ScD/_apis/pipelines/1/runs/12/signedlogcontent/3?urlExpires=2020-08-02T12%3A52%3A27.0078520Z&urlSigningMethod=HMACV1&urlSignature=Zn3fh71kxFaHRNgjA8OZZVGUz0It45KTCe7DR8MeVtU%3D",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("All benchmark codes could be seen in the "),t("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/clickhouse-native-jdbc/src/test/java/com/github/housepower/jdbc/benchmark",target:"_blank",rel:"noopener noreferrer"}},[e._v("test code directory"),t("OutboundLink")],1),e._v(", you can do the bench on your machine too.")]),e._v(" "),t("li",[e._v("Both  "),t("code",[e._v("Clickhouse-Native-JDBC")]),e._v(" and "),t("code",[e._v("clickhouse-jdbc")]),e._v(" are good jdbc clients. And "),t("code",[e._v("clickhouse-jdbc")]),e._v(" are maintained better,\nthis benchmarks only show your some difference, users could choose freely according to their needs.")]),e._v(" "),t("li",[e._v("The result's score means the avg_time to process one operation, lower is better.")]),e._v(" "),t("li",[e._v("With string type of JDBC batch insertion, "),t("code",[e._v("Clickhouse-Native-JDBC")]),e._v(" and "),t("code",[e._v("clickhouse-jdbc")]),e._v(" are almost the similar performance.")]),e._v(" "),t("li",[e._v("With other types of JDBC batch insertion or selection, "),t("code",[e._v("Clickhouse-Native-JDBC")]),e._v(" may be 1~4 times better than "),t("code",[e._v("clickhouse-jdbc")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("clickhouse-jdbc")]),e._v(" RowBinary insert performs similar performance vs "),t("code",[e._v("Clickhouse-Native-JDBC")]),e._v(",\nit's not jdbc standared yet it's pretty efficient for the client because it sends data by row stream rather than one big block,\nbut it's not columnar based and may cause the clickhouse-server CPU higher load (On my machine, this's maybe 3 times overload by loop benchmark).")]),e._v(" "),t("li",[e._v("Here are the benchmark Params:\n"),t("ul",[t("li",[t("code",[e._v("batchSize")]),e._v(": insert batch size.")]),e._v(" "),t("li",[t("code",[e._v("columnNum")]),e._v(": insert column number, used in the WideColumn/RowBinary benchmarks.")]),e._v(" "),t("li",[t("code",[e._v("selectNumber")]),e._v(": select row size.")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2020-08-02T12:25:50.4413277Z Benchmark                                           (batchSize)  (columnNum)  (selectNumber)  Mode  Cnt      Score   Error  Units\n2020-08-02T12:25:50.4415993Z InsertIBenchmark.benchInsertHttp                         200000           20             N/A  avgt         364.841          ms/op\n2020-08-02T12:25:50.4422307Z InsertIBenchmark.benchInsertHttp                         200000           50             N/A  avgt         365.615          ms/op\n2020-08-02T12:25:50.4424378Z InsertIBenchmark.benchInsertHttp                         500000           20             N/A  avgt         963.828          ms/op\n2020-08-02T12:25:50.4427073Z InsertIBenchmark.benchInsertHttp                         500000           50             N/A  avgt         964.399          ms/op\n2020-08-02T12:25:50.4430264Z InsertIBenchmark.benchInsertNative                       200000           20             N/A  avgt          78.101          ms/op\n2020-08-02T12:25:50.4433102Z InsertIBenchmark.benchInsertNative                       200000           50             N/A  avgt          85.880          ms/op\n2020-08-02T12:25:50.4436465Z InsertIBenchmark.benchInsertNative                       500000           20             N/A  avgt         183.684          ms/op\n2020-08-02T12:25:50.4458985Z InsertIBenchmark.benchInsertNative                       500000           50             N/A  avgt         189.310          ms/op\n2020-08-02T12:25:50.4461812Z RowBinaryDoubleIBenchmark.benchInsertHttpRowBinary       200000           20             N/A  avgt         214.549          ms/op\n2020-08-02T12:25:50.4464632Z RowBinaryDoubleIBenchmark.benchInsertHttpRowBinary       200000           50             N/A  avgt         546.855          ms/op\n2020-08-02T12:25:50.4467468Z RowBinaryDoubleIBenchmark.benchInsertHttpRowBinary       500000           20             N/A  avgt         496.584          ms/op\n2020-08-02T12:25:50.4470236Z RowBinaryDoubleIBenchmark.benchInsertHttpRowBinary       500000           50             N/A  avgt        1292.126          ms/op\n2020-08-02T12:25:50.4472801Z RowBinaryDoubleIBenchmark.benchInsertNative              200000           20             N/A  avgt         386.000          ms/op\n2020-08-02T12:25:50.4475269Z RowBinaryDoubleIBenchmark.benchInsertNative              200000           50             N/A  avgt        1059.193          ms/op\n2020-08-02T12:25:50.4478121Z RowBinaryDoubleIBenchmark.benchInsertNative              500000           20             N/A  avgt         933.081          ms/op\n2020-08-02T12:25:50.4480882Z RowBinaryDoubleIBenchmark.benchInsertNative              500000           50             N/A  avgt        2549.570          ms/op\n2020-08-02T12:25:50.4483088Z RowBinaryIntIBenchmark.benchInsertHttpRowBinary          200000           20             N/A  avgt         191.218          ms/op\n2020-08-02T12:25:50.4485698Z RowBinaryIntIBenchmark.benchInsertHttpRowBinary          200000           50             N/A  avgt         512.451          ms/op\n2020-08-02T12:25:50.4488292Z RowBinaryIntIBenchmark.benchInsertHttpRowBinary          500000           20             N/A  avgt         466.927          ms/op\n2020-08-02T12:25:50.4490834Z RowBinaryIntIBenchmark.benchInsertHttpRowBinary          500000           50             N/A  avgt        1296.021          ms/op\n2020-08-02T12:25:50.4493382Z RowBinaryIntIBenchmark.benchInsertNative                 200000           20             N/A  avgt         245.648          ms/op\n2020-08-02T12:25:50.4496060Z RowBinaryIntIBenchmark.benchInsertNative                 200000           50             N/A  avgt         608.907          ms/op\n2020-08-02T12:25:50.4498662Z RowBinaryIntIBenchmark.benchInsertNative                 500000           20             N/A  avgt         639.852          ms/op\n2020-08-02T12:25:50.4501233Z RowBinaryIntIBenchmark.benchInsertNative                 500000           50             N/A  avgt        1612.976          ms/op\n2020-08-02T12:25:50.4503871Z RowBinaryStringIBenchmark.benchInsertHttpRowBinary       200000           20             N/A  avgt         471.998          ms/op\n2020-08-02T12:25:50.4506454Z RowBinaryStringIBenchmark.benchInsertHttpRowBinary       200000           50             N/A  avgt        1154.600          ms/op\n2020-08-02T12:25:50.4509067Z RowBinaryStringIBenchmark.benchInsertHttpRowBinary       500000           20             N/A  avgt        1090.604          ms/op\n2020-08-02T12:25:50.4511618Z RowBinaryStringIBenchmark.benchInsertHttpRowBinary       500000           50             N/A  avgt        2824.161          ms/op\n2020-08-02T12:25:50.4514250Z RowBinaryStringIBenchmark.benchInsertNative              200000           20             N/A  avgt         489.827          ms/op\n2020-08-02T12:25:50.4517033Z RowBinaryStringIBenchmark.benchInsertNative              200000           50             N/A  avgt        1327.180          ms/op\n2020-08-02T12:25:50.4519797Z RowBinaryStringIBenchmark.benchInsertNative              500000           20             N/A  avgt        1244.485          ms/op\n2020-08-02T12:25:50.4522226Z RowBinaryStringIBenchmark.benchInsertNative              500000           50             N/A  avgt        3119.630          ms/op\n2020-08-02T12:25:50.4524657Z SelectIBenchmark.benchSelectHTTP                            N/A          N/A          500000  avgt        1227.968          ms/op\n2020-08-02T12:25:50.4527119Z SelectIBenchmark.benchSelectHTTP                            N/A          N/A        10000000  avgt       25690.576          ms/op\n2020-08-02T12:25:50.4529598Z SelectIBenchmark.benchSelectNative                          N/A          N/A          500000  avgt         188.412          ms/op\n2020-08-02T12:25:50.4532099Z SelectIBenchmark.benchSelectNative                          N/A          N/A        10000000  avgt        3448.000          ms/op\n2020-08-02T12:25:50.4534535Z WideColumnDoubleInsertIBenchmark.benchInsertHttp         200000           20             N/A  avgt         838.952          ms/op\n2020-08-02T12:25:50.4536902Z WideColumnDoubleInsertIBenchmark.benchInsertHttp         200000           50             N/A  avgt        2151.868          ms/op\n2020-08-02T12:25:50.4539538Z WideColumnDoubleInsertIBenchmark.benchInsertHttp         500000           20             N/A  avgt        2125.953          ms/op\n2020-08-02T12:25:50.4544596Z WideColumnDoubleInsertIBenchmark.benchInsertHttp         500000           50             N/A  avgt        5366.041          ms/op\n2020-08-02T12:25:50.4547987Z WideColumnDoubleInsertIBenchmark.benchInsertNative       200000           20             N/A  avgt         385.625          ms/op\n2020-08-02T12:25:50.4550856Z WideColumnDoubleInsertIBenchmark.benchInsertNative       200000           50             N/A  avgt        1048.304          ms/op\n2020-08-02T12:25:50.4559545Z WideColumnDoubleInsertIBenchmark.benchInsertNative       500000           20             N/A  avgt         940.684          ms/op\n2020-08-02T12:25:50.4562269Z WideColumnDoubleInsertIBenchmark.benchInsertNative       500000           50             N/A  avgt        2478.350          ms/op\n2020-08-02T12:25:50.4565378Z WideColumnIntInsertIBenchmark.benchInsertHttp            200000           20             N/A  avgt         417.827          ms/op\n2020-08-02T12:25:50.4568761Z WideColumnIntInsertIBenchmark.benchInsertHttp            200000           50             N/A  avgt        1050.636          ms/op\n2020-08-02T12:25:50.4572056Z WideColumnIntInsertIBenchmark.benchInsertHttp            500000           20             N/A  avgt        1095.515          ms/op\n2020-08-02T12:25:50.4574813Z WideColumnIntInsertIBenchmark.benchInsertHttp            500000           50             N/A  avgt        2559.228          ms/op\n2020-08-02T12:25:50.4577600Z WideColumnIntInsertIBenchmark.benchInsertNative          200000           20             N/A  avgt         234.879          ms/op\n2020-08-02T12:25:50.4580386Z WideColumnIntInsertIBenchmark.benchInsertNative          200000           50             N/A  avgt         591.898          ms/op\n2020-08-02T12:25:50.4583344Z WideColumnIntInsertIBenchmark.benchInsertNative          500000           20             N/A  avgt         622.738          ms/op\n2020-08-02T12:25:50.4586073Z WideColumnIntInsertIBenchmark.benchInsertNative          500000           50             N/A  avgt        1386.839          ms/op\n2020-08-02T12:25:50.4588785Z WideColumnStringInsertIBenchmark.benchInsertHttp         200000           20             N/A  avgt         491.863          ms/op\n2020-08-02T12:25:50.4678415Z WideColumnStringInsertIBenchmark.benchInsertHttp         200000           50             N/A  avgt        1264.460          ms/op\n2020-08-02T12:25:50.4681271Z WideColumnStringInsertIBenchmark.benchInsertHttp         500000           20             N/A  avgt        1286.915          ms/op\n2020-08-02T12:25:50.4683286Z WideColumnStringInsertIBenchmark.benchInsertHttp         500000           50             N/A  avgt        2980.071          ms/op\n2020-08-02T12:25:50.4685267Z WideColumnStringInsertIBenchmark.benchInsertNative       200000           20             N/A  avgt         497.667          ms/op\n2020-08-02T12:25:50.4687289Z WideColumnStringInsertIBenchmark.benchInsertNative       200000           50             N/A  avgt        1273.648          ms/op\n2020-08-02T12:25:50.4689272Z WideColumnStringInsertIBenchmark.benchInsertNative       500000           20             N/A  avgt        1236.682          ms/op\n2020-08-02T12:25:50.4691275Z WideColumnStringInsertIBenchmark.benchInsertNative       500000           50             N/A  avgt        2877.623          ms/op\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);