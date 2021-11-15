'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var downloadFile = function (fileUrl) {
    try {
        var a = document.createElement("a");
        var url = fileUrl;
        var hasProtocol = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(fileUrl);
        if (!hasProtocol && window.location.origin === 'http://sds.sf-express.com') {
            url = 'https://sds.sf-express.com' + fileUrl;
        }
        a.setAttribute('href', url);
        a.setAttribute('download', '');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    catch (_a) {
        window.open(fileUrl);
    }
};

var getUrlParam = function (key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var paramsLi = window.location.search.substr(1).match(reg);
    if (paramsLi !== null && paramsLi !== '' && paramsLi !== undefined) {
        var param = unescape(paramsLi[2]);
        return param;
    }
    return '';
};

/**
 * 获取某周是本年的第几周
 * date1是当前日期
 * date2是当年第一天
 * d是当前日期是今年第多少天
 * 用d + 当前年的第一天的周差距的和在除以7就是本年第几周
 */
function getYearWeek(dataInput) {
    var a = dataInput.getFullYear();
    var b = dataInput.getMonth() + 1;
    var c = dataInput.getDate();
    var date1 = new Date(a, parseInt(b) - 1, c);
    var date2 = new Date(a, 0, 1);
    var d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
    return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
}
function getParamFromSearch() {
    var search = window.location.search.substr(1);
    var vars = search.split("&");
    var parameters = {};
    vars.forEach(function (item) {
        var temp = item.split("=");
        var key = decodeURIComponent(temp[0]);
        var val = decodeURIComponent(temp[1]);
        parameters[key] = val;
    });
    return parameters;
}
/**
 * @description 向数组中插入元素，返回数组，会改变原数组
 */
function insert(array, index) {
    var value = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        value[_i - 2] = arguments[_i];
    }
    array.splice.apply(array, __spreadArray([index, 0], value, false));
    return array;
}

var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getYearWeek: getYearWeek,
    getParamFromSearch: getParamFromSearch,
    insert: insert
});

var FeSdsUtils = __assign(__assign({}, util), { downloadFile: downloadFile, getUrlParam: getUrlParam });

exports["default"] = FeSdsUtils;
exports.downloadFile = downloadFile;
exports.getParamFromSearch = getParamFromSearch;
exports.getUrlParam = getUrlParam;
exports.getYearWeek = getYearWeek;
exports.insert = insert;
