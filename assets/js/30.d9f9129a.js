(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{218:function(e,t,a){"use strict";a.r(t);var o=a(3),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"贡献指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贡献指南"}},[e._v("#")]),e._v(" 贡献指南")]),e._v(" "),a("p",[e._v("We welcome anyone that wants to help out in any way, whether that includes reporting problems, helping with documentations, or contributing code changes to fix bugs, add tests, or implement new features. This document outlines the basic steps required to work with and contribute to the codebase.")]),e._v(" "),a("h3",{attrs:{id:"create-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-issue"}},[e._v("#")]),e._v(" Create issue")]),e._v(" "),a("p",[e._v("You can report problems or request features by creating "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Issues"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"install-the-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-tools"}},[e._v("#")]),e._v(" Install the tools")]),e._v(" "),a("p",[e._v("The following software is required to work with the codebase and build it locally:")]),e._v(" "),a("ul",[a("li",[e._v("Git")]),e._v(" "),a("li",[e._v("JDK 8/11")]),e._v(" "),a("li",[e._v("Maven")]),e._v(" "),a("li",[e._v("Docker and docker-compose")])]),e._v(" "),a("p",[e._v("You can verify the tools are installed and running:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git --version\n$ javac -version\n$ mvn -version\n$ docker --version\n$ docker-compose --version\n")])])]),a("h3",{attrs:{id:"github-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-account"}},[e._v("#")]),e._v(" GitHub account")]),e._v(" "),a("p",[e._v("If you don't already have a GitHub account you'll need to "),a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[e._v("join"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"fork-the-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-the-repository"}},[e._v("#")]),e._v(" Fork the repository")]),e._v(" "),a("p",[e._v("Go to the "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse-Native-JDBC repository"),a("OutboundLink")],1),e._v(' and press the "Fork" button near the upper right corner of the page. When finished, you will have your own "fork" at '),a("code",[e._v("https://github.com/<your-username>/ClickHouse-Native-JDBC")]),e._v(", and this is the repository to which you will upload your proposed changes and create pull requests. For details, see the "),a("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"clone-your-fork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-your-fork"}},[e._v("#")]),e._v(" Clone your fork")]),e._v(" "),a("p",[e._v("At a terminal, go to the directory in which you want to place a local clone of the ClickHouse-Native-JDBC repository, and run the following commands to use HTTPS authentication:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git clone https://github.com/<your-username>/ClickHouse-Native-JDBC.git\n")])])]),a("p",[e._v("If you prefer to use SSH and have "),a("a",{attrs:{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("uploaded your public key to your GitHub account"),a("OutboundLink")],1),e._v(", you can instead use SSH:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git clone git@github.com:<your-username>/ClickHouse-Native-JDBC.git\n")])])]),a("p",[e._v("This will create a "),a("code",[e._v("ClickHouse-Native-JDBC")]),e._v(" directory, so change into that directory:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ cd ClickHouse-Native-JDBC\n")])])]),a("p",[e._v("This repository knows about your fork, but it doesn't yet know about the official or "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC",target:"_blank",rel:"noopener noreferrer"}},[e._v('"upstream" housepower repository'),a("OutboundLink")],1),e._v(". Run the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git remote add upstream https://github.com/housepower/ClickHouse-Native-JDBC.git\n$ git fetch upstream\n$ git branch --set-upstream-to=upstream/master master\n")])])]),a("p",[e._v("Now, when you check the status using Git, it will compare your local repository to the "),a("em",[e._v("upstream")]),e._v(" repository.")]),e._v(" "),a("h3",{attrs:{id:"get-the-latest-upstream-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-latest-upstream-code"}},[e._v("#")]),e._v(" Get the latest upstream code")]),e._v(" "),a("p",[e._v("You will frequently need to get all the of the changes that are made to the upstream repository, and you can do this with these commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git fetch upstream\n$ git pull upstream master\n")])])]),a("p",[e._v("The first command fetches all changes on all branches, while the second actually updates your local "),a("code",[e._v("master")]),e._v(" branch with the latest commits from the "),a("code",[e._v("upstream")]),e._v(" repository.")]),e._v(" "),a("h3",{attrs:{id:"building-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-locally"}},[e._v("#")]),e._v(" Building locally")]),e._v(" "),a("p",[e._v("To build the source code locally, checkout and update the "),a("code",[e._v("master")]),e._v(" branch:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout master\n$ git pull upstream master\n")])])]),a("p",[e._v("Then use Maven to compile everything, run all unit and integration tests, build all artifacts, and install all JAR, ZIP, and TAR files into your local Maven repository:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ mvn clean install\n")])])]),a("p",[e._v("If you want to skip the integration tests (e.g., if you don't have Docker installed) or the unit tests, you can add "),a("code",[e._v("-DskipITs")]),e._v(" and/or "),a("code",[e._v("-DskipTests")]),e._v(" to that command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ mvn clean install -DskipITs -DskipTests\n")])])]),a("h3",{attrs:{id:"running-and-debugging-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-and-debugging-tests"}},[e._v("#")]),e._v(" Running and debugging tests")]),e._v(" "),a("p",[e._v("A number of the modules use Docker during their integration tests to run a database. During development it's often desirable to start the Docker container and leave it running so that you can compile/run/debug tests repeatedly from your IDE. To do this, simply go into project directory and run the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ docker-compose up -d\n")])])]),a("p",[e._v("This will first pull Docker image for the database container, and then will start it. You can then run any integration tests from your IDE.")]),e._v(" "),a("p",[e._v("When your testing is complete, you can stop the Docker container by running:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ docker-compose down\n")])])]),a("h3",{attrs:{id:"making-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-changes"}},[e._v("#")]),e._v(" Making changes")]),e._v(" "),a("p",[e._v("Everything the community does with the codebase -- fixing bugs, adding features, making improvements, adding tests, etc. -- should be described by "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Issue"),a("OutboundLink")],1),e._v(". If no such issue exists for what you want to do, please create an issue with a meaningful and easy-to-understand description.\nIf you are going to work on a specific issue and it's your first contribution, please add a short comment to the issue, so other people know you're working on it.\nIf you are contributing repeatedly, you will be invited to be a Core Team member so you can assign issues to yourself.")]),e._v(" "),a("p",[e._v("Before you make any changes, be sure to switch to the "),a("code",[e._v("master")]),e._v(" branch and pull the latest commits on the "),a("code",[e._v("master")]),e._v(" branch from the upstream repository. Also, it's probably good to run a build and verify all tests pass "),a("em",[e._v("before")]),e._v(" you make any changes.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout master\n$ git pull upstream master\n$ mvn clean install\n")])])]),a("p",[e._v("Once everything builds, create a "),a("em",[e._v("topic branch")]),e._v(" named appropriately (we recommend using the issue number, such as "),a("code",[e._v("gh-1234")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout -b gh-1234\n")])])]),a("p",[e._v("This branch exists locally and it is there you should make all of your proposed changes for the issue. As you'll soon see, it will ultimately correspond to a single pull request that the Core Team member members will review and merge (or reject) as a whole. (Some issues are big enough that you may want to make several separate but incremental sets of changes. In that case, you can create subsequent topic branches for the same issue by appending a short suffix to the branch name.)")]),e._v(" "),a("p",[e._v("Your changes should include changes to existing tests or additional unit and/or integration tests that verify your changes work. We recommend frequently running related unit tests (in your IDE or using Maven) to make sure your changes didn't break anything else, and that you also periodically run a complete build using Maven to make sure that everything still works:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ mvn clean verify\n")])])]),a("p",[e._v("Run benchmark and check the benchmark report to make sure your changes don't affect performance:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ mvn -Pbenchmark clean integration-test -DskipITs\n")])])]),a("p",[e._v("Feel free to commit your changes locally as often as you'd like, though we generally prefer that each commit represent a complete and atomic change to the code. Often, this means that most issues will be addressed with a single commit in a single pull-request, but other more complex issues might be better served with a few commits that each make separate but atomic changes. (Some developers prefer to commit frequently and to ammend their first commit with additional changes. Other developers like to make multiple commits and to then squash them. How you do this is up to you. However, "),a("em",[e._v("never")]),e._v(" change, squash, or ammend a commit that appears in the history of the upstream repository.) When in doubt, use a few separate atomic commits; if the reviewers think they should be squashed, they'll let you know when they review your pull request.")]),e._v(" "),a("p",[e._v("Committing is as simple as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git commit .\n")])])]),a("p",[e._v("which should then pop up an editor of your choice in which you should place a good commit message. "),a("em",[a("em",[e._v("We do expect that all commit messages begin with a line starting with the GitHub issue and ending with a short phrase that summarizes what changed in the commit.")])]),e._v(" For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("gh-1234 Expanded the integration test and correct a unit test.\n")])])]),a("p",[e._v("If that phrase is not sufficient to explain your changes, then the first line should be followed by a blank line and one or more paragraphs with additional details. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gh-1235 Added support for ingesting data from Spark 3.0.\n\nAs Apache Spark 3.0 has been released, it's next major version since 2.0,\nwe need to add integration test to make sure the code work properly with\nthe new Spark version.\n")])])]),a("h3",{attrs:{id:"code-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-formatting"}},[e._v("#")]),e._v(" Code Formatting")]),e._v(" "),a("p",[e._v("This project utilizes a set of code style rules that are automatically applied by the build process.")]),e._v(" "),a("p",[e._v("With the command "),a("code",[e._v("mvn validate")]),e._v(" the code style rules can be applied automatically.")]),e._v(" "),a("p",[e._v("In the event that a pull request is submitted with code style violations, continuous integration will fail the pull request build.")]),e._v(" "),a("p",[e._v("To fix pull requests with code style violations, simply run the project's build locally and allow the automatic formatting happen.  Once the build completes, you will have some local repository files modified to fix the coding style which can be amended on your pull request.  Once the pull request is synchronized with the formatting changes, CI will rerun the build.")]),e._v(" "),a("p",[e._v("To run the build, navigate to the project's root directory and run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ mvn clean verify\n")])])]),a("p",[e._v("It might be useful to simply run a "),a("em",[e._v("validate")]),e._v(" check against the code instead of automatically applying code style changes.  If you want to simply run validation, navigate to the project's root directory and run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ mvn validate\n")])])]),a("p",[e._v("Please note that when running "),a("em",[e._v("validate")]),e._v(" checks, the build will stop as soon as it encounters its first violation.  This means it is necessary to run the build multiple times until no violations are detected.")]),e._v(" "),a("h3",{attrs:{id:"rebasing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebasing"}},[e._v("#")]),e._v(" Rebasing")]),e._v(" "),a("p",[e._v("If it's been more than a day or so since you created your topic branch, we recommend "),a("em",[e._v("rebasing")]),e._v(" your topic branch on the latest "),a("code",[e._v("master")]),e._v(" branch. This requires switching to the "),a("code",[e._v("master")]),e._v(" branch, pulling the latest changes, switching back to your topic branch, and rebasing:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout master\n$ git pull upstream master\n$ git checkout gh-1234\n$ git rebase master\n")])])]),a("p",[e._v("If your changes are compatible with the latest changes on "),a("code",[e._v("master")]),e._v(", this will complete and there's nothing else to do. However, if your changes affect the same files/lines as other changes have since been merged into the "),a("code",[e._v("master")]),e._v(" branch, then your changes conflict with the other recent changes on "),a("code",[e._v("master")]),e._v(", and you will have to resolve them. The git output will actually tell you need to do (e.g., fix a particular file, stage the file, and then run "),a("code",[e._v("git rebase --continue")]),e._v("), but if you have questions consult Git or GitHub documentation or spend some time reading about Git rebase conflicts on the Internet.")]),e._v(" "),a("h3",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),a("p",[e._v("When adding new features or configuration options, they must be documented accordingly in the Documents.\nThe same applies when changing existing behaviors, e.g. type mappings, removing options etc.")]),e._v(" "),a("p",[e._v("The documentation is written using Markdown and can be found in the ClickHouse-Native-JDBC "),a("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("source code repository"),a("OutboundLink")],1),e._v(".\nAny documentation update should be part of the pull request you submit for the code change.")]),e._v(" "),a("p",[e._v("The documentation will be published on the website when PR merged into master branch.")]),e._v(" "),a("h3",{attrs:{id:"creating-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-pull-request"}},[e._v("#")]),e._v(" Creating a pull request")]),e._v(" "),a("p",[e._v("Once you're finished making your changes, your topic branch should have your commit(s) and you should have verified that your branch builds successfully. At this point, you can shared your proposed changes and create a pull request. To do this, first push your topic branch (and its commits) to your fork repository (called "),a("code",[e._v("origin")]),e._v(") on GitHub:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git push origin gh-1234\n")])])]),a("p",[e._v('Then, in a browser go to https://github.com/housepower/ClickHouse-Native-JDBC, and you should see a small section near the top of the page with a button labeled "Create pull request". GitHub recognized that you pushed a new topic branch to your fork of the upstream repository, and it knows you probably want to create a pull request with those changes. Click on the button, and GitHub will present you with a short form that you should fill out with information about your pull request. The title should start with the GitHub issue and ending with a short phrase that summarizes the changes included in the pull request. (If the pull request contains a single commit, GitHub will automatically prepopulate the title and description fields from the commit message.)')]),e._v(" "),a("p",[e._v("At this point, you can switch to another issue and another topic branch. The maintainers will be notified of your new pull request, and will review it in short order. They may ask questions or make remarks using line notes or comments on the pull request. (By default, GitHub will send you an email notification of such changes, although you can control this via your GitHub preferences.)")]),e._v(" "),a("p",[e._v("If the reviewers ask you to make additional changes, simply switch to your topic branch for that pull request:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout gh-1234\n")])])]),a("p",[e._v("and then make the changes on that branch and either add a new commit or ammend your previous commits. When you've addressed the reviewers' concerns, push your changes to your "),a("code",[e._v("origin")]),e._v(" repository:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git push origin gh-1234\n")])])]),a("p",[e._v("GitHub will automatically update the pull request with your latest changes, but we ask that you go to the pull request and add a comment summarizing what you did. This process may continue until the reviewers are satisfied.")]),e._v(" "),a("p",[e._v("By the way, please don't take offense if the reviewers ask you to make additional changes, even if you think those changes are minor. The reviewers have a broach understanding of the codebase, and their job is to ensure the code remains as uniform as possible, is of sufficient quality, and is thoroughly tested. When they believe your pull request has those attributes, they will merge your pull request into the official upstream repository.")]),e._v(" "),a("p",[e._v("Once your pull request has been merged, feel free to delete your topic branch both in your local repository:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git branch -d gh-1234\n")])])]),a("p",[e._v("and in your fork:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git push origin :gh-1234\n")])])]),a("p",[e._v("(This last command is a bit strange, but it basically is pushing an empty branch (the space before the "),a("code",[e._v(":")]),e._v(" character) to the named branch. Pushing an empty branch is the same thing as removing it.)")]),e._v(" "),a("h3",{attrs:{id:"continuous-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuous-integration"}},[e._v("#")]),e._v(" Continuous Integration")]),e._v(" "),a("p",[e._v("The project currently builds its jobs in two environments:")]),e._v(" "),a("ul",[a("li",[e._v("GitHub Actions for pull requests: https://github.com/housepower/ClickHouse-Native-JDBC/actions")])]),e._v(" "),a("h3",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Here's a quick check list for a good pull request (PR):")]),e._v(" "),a("ul",[a("li",[e._v("A GitHub issue associated with your PR")]),e._v(" "),a("li",[e._v("One commit per PR")]),e._v(" "),a("li",[e._v("One feature/change per PR")]),e._v(" "),a("li",[e._v("No changes to code not directly related to your change (e.g. no formatting changes or refactoring to existing code, if you want to refactor/improve existing code that's a separate discussion and separate GitHub issue)")]),e._v(" "),a("li",[e._v("New/changed features have been documented")]),e._v(" "),a("li",[e._v("A full build completes successfully")]),e._v(" "),a("li",[e._v("Do a rebase on upstream "),a("code",[e._v("master")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);