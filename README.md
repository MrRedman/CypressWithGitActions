#WEB AUTOMATION

#Prerequisite

- To be able to execute this web automation project you need the following:

~ Windows 7 and above

~ macOS 10.9 and above (64-bit only)

~ Node.js 8 and above

~ Any Editor - VSCode preferable

# Executing the project

- This project is a Cypress project, developed in javascript/typescript. Making use of Cypress API.

- The folder structure is as follows:

~ cypress - Here resides fixtures, integration - Examples and Pages, Plugin, Support

~ node_modules 

> fixtures folder - consists of test data in a json format, data that drives tests

> Integration folder - is the working folder consisting of examples folder which stores a spec file containing the tests and Page folder which stores the Pages (we using a page model for this framework)

~ To execute the tests you need to open cypress play ground (Desktop app), this can be achieved by puting cypress command "npx cypress open" on a terminal on the project path.

~ Once Cypress play ground (Desktop app) is launched, click on the spec file under examples folder (examples/AbsaWeb.spec.js) and the test should execute
