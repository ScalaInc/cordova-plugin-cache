//////////////////////////////////////////
// Cache.js
// Copyright (C) 2014 Modern Alchemits OG <office@modalog.at>
//
//////////////////////////////////////////
var exec = require('cordova/exec');

var Cache =
{
    clear : function( success, error )
    {
        exec(success, error, "Cache", "clear", [])
    },
    clearAllData : function( success, error )
    {
        exec(success, error, "Cache", "clearAllData", [])
    }
}

module.exports = Cache;
