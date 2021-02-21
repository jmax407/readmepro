module.exports = templateData => {
    const data = templateData;
    let licenseBadge;
switch(data.choices) {
    case 'None':
        licenseBadge = "";
    break;
    case 'Apache License 2.0':
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
    case 'GNU General Public License v3.0':
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    case 'MIT':
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case 'BSD 2-clause "Simplified" license':
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    break;
    case 'BSD 3-clause "New" or "Revised" license':
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case 'Boost Software License 1.0':
    licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    break;
    case 'Creative Commons Zero v1.0 Universal':
    licenseBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    break;
    case 'Eclipse Public License 2.0':
    licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    break;
    case 'GNU Affero General Public License v3.0':
    licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    break;
    case 'GNU General Public License v2.0':
    licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    break;
    case 'GNU Lesser General Public License v2.1':
        licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    break;
    case 'Mozilla Public License 2.0':
        licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
    case 'The Unlicense':
        licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    break;
  }
    return `
    ${data.license}
    ${licenseBadge}
    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [contribution guidelines](#contribution)
    * [Tests](#tests)

    ## Installation

    ${data.install}

    ## usage

    ${data.usage}

    ## contribution

    ${data.contribution}

    ## Tests

    ${data.tests}

    ## License

    ${data.license}

 

    ## Questions

    ${data.questions}

    `
};


