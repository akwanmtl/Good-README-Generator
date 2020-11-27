// object variable that contains the website for the license and img url for the badge of the available licenses that the user can choose from
// you can add or delete the license in this object. The question about the license uses the keys of this object
let badgeInfo = {
    'Apache' : 
        {
            badge: "Apache 2.0",
            url: "https://opensource.org/licenses/Apache-2.0",
            img: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
        },
    'Eclipse' : 
        {
            badge: "EPL-1.0",
            url: "https://opensource.org/licenses/EPL-1.0",
            img: "https://img.shields.io/badge/License-EPL%201.0-red.svg",
        },
    'GNU' : 
        {
            badge: "GNU GPL v3",
            url: "https://opensource.org/licenses/Apache-2.0",
            img: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
        },
    'MIT':
        {
            badge: "MIT",
            url: "https://opensource.org/licenses/MIT",
            img: "https://img.shields.io/badge/License-MIT-yellow.svg",
        },
    'Mozilla':
        {
            badge: "MPL 2.0",
            url: "https://opensource.org/licenses/MPL-2.0",
            img: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
        },
    'Unlicense':
        {
            badge: "Unlicense",
            url: "http://unlicense.org/",
            img: "https://img.shields.io/badge/license-Unlicense-blue.svg",
        },
    'WTFPL':
        {
            badge: "WTFPL",
            url: "http://www.wtfpl.net/about/",
            img: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
        }
}
// export the badgeInfo object to be used in the generateMarkdown.js and index.js
module.exports = badgeInfo;