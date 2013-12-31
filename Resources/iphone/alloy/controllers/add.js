function Controller() {
    function closeWindow() {
        $.addWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        barColor: "#a00",
        id: "addWin",
        title: "Todo"
    });
    $.__views.addWin && $.addTopLevelView($.__views.addWin);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#ffffcc",
                offset: 0
            }, {
                color: "#ffffcc",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.addWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#000",
        left: "10dp",
        top: "25dp",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Settings",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.inboxBtn = Ti.UI.createButton({
        width: "100%",
        top: "30dp",
        textAlign: "right",
        color: "red",
        right: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        title: "Done",
        id: "inboxBtn"
    });
    $.__views.header.add($.__views.inboxBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.inboxBtn.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;