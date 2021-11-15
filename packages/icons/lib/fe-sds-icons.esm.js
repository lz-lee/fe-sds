import * as React from 'react';

var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgCommonBgarrows(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0H6a6 6 0 00-6 6v6a6 6 0 006 6h6a6 6 0 006-6V6a6 6 0 00-6-6z",
    fill: "#E4E9F9",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#8F9AB7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 12l-3-3 3-3"
  }))));
}

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABAxJREFUaAXdWk1IFVEU/u48TS1F+jHpkSUIJm2iTQS1qG1B0j6o1mXgpk2Latm6IAKjTfswEFoUGBi0CaKFSiWUpi0qNX/omb65nXPHkXnOvePcGcfmeeAxM/f83PPdc+6dO/cdgQiSb3sOwnW74YrzJNYByCJdGyNUsmAtAGKKDI/BkQNwnH5x8v43U0dCx5BD14sQ4i6ke5X4BZ3Mf2wrQzhPIOVtcfoBA62gECACcwFCPoVEU4Vk3h4E5iHFJQL1POiaE3yQb3puQOBZ7sGw0zzg5KvyOQBiLUJeZBiMrAAZkM3nrRAugbvoR0oB8uaMHK2KyOiG1Uu/Lp5TXjTUApDzOaMD4rep9KNFjEiopXnF/UL3eVvN2D8bKqPGaXfUe6b6wTDwAmMhQOqlaTMS+ZUlLDyHaAewbaiDAKntzDZBJIscoa3em2U5eI3esp1lF1tse9sBqsl8AHcfBQ6c0Xcjy8DIIz0vYWv2gGaGgbZzQFN72MU/P8JtKVtSAqKtYKF+Yxdqduplln6RfoOe57eWS3Qn/acNr0IOXYsvvd5c4yHg2M31rZv7/O4OUPoZ22a6RaG+JXZHiQR5jpWmrVTTAWrYb9WZtbAC41qppZtDky+B76+jO2w9BbR362Xe3wN4HplI2oFhM+kAucsA/6Joh+FogtNpcZI07Z2O6i5dykVZ9nmmeZYgnXyTUdd0qxxbPn4LqNtj7sOppc9IzbhxOkVFd+4zMPzQbNfASZdy7GhDq95hQ4drzaxbqFt7DN38nQs1xWnQDF0ctVUZjoxu9C1MGEVLyXYRKVOOxqPWsAtgT5u7gCNX9D6PPgbmPul53Fpeik5Jg2a6lOMVapmOnk1Uu8vEARbGo3XNmpGcdCkXaZqYphXOXaH3j90OYKOufH6yCLWcAIpnfRvma/1ePU/QpjbOHnB2BPhacXSttxdoTQao6TB9uLcFzFjeCjoCjKPPgCwpWcrV77PsJqF4KWJbZDCZLELjA8DkK4PJ1eYdzUDnZb3M1CAw/UHPC7Yuhv7+CXK198kA8Qq1ETV3miVmR4HfH838FJxkKRenQ9MKx7oJX5pxus0OUIPh44/3cBZfoHFABGWyA2SK0NIMHRHQp0NGlGwOxXFm4gV9/A2GJVf40CM7yg7Q4kR2XkdY5pSL2IxFaOaTtUCAVFFDPt2z9kqo/1jHrPXyqzDmqHKT/Dpo5xmVzhAgp5+0sltH7VxKI11mLI4qBOLamWonwsBYvBcrFQJRmcl81WJShReEgUgBUlVNVAhEFVibe+q3FSOkSmNUEZPamnsRoo69WhnRW1WgVABEr1/nw+NH38KVtK3KyxiaQitFF5239dFjHlc/LgDso1o5LlYKHTiEIhSMVzWWaP4DM7wUXSMcaC8AAAAASUVORK5CYII=";

const FeSdsIcons = {
	BackArrow: SvgCommonBgarrows,
	cdbi: img,
};

export { SvgCommonBgarrows as BackArrow, img as cdbi, FeSdsIcons as default };
