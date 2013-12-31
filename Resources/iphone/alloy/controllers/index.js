function Controller() {
    function addToDoItem() {
        Alloy.createController("add").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.todoWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "todoWin",
        title: "Todo"
    });
    $.__views.todoWin && $.addTopLevelView($.__views.todoWin);
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
    $.__views.todoWin.add($.__views.header);
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
        text: "Calendar",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: "46dp",
        width: Ti.UI.FILL,
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
        id: "footer"
    });
    $.__views.todoWin.add($.__views.footer);
    $.__views.today = Ti.UI.createLabel({
        color: "red",
        width: "100%",
        textAlign: "left",
        left: "5dp",
        text: "Today",
        id: "today"
    });
    $.__views.footer.add($.__views.today);
    $.__views.calendar = Ti.UI.createLabel({
        color: "red",
        width: "100%",
        textAlign: "center",
        text: "Calendar",
        id: "calendar"
    });
    $.__views.footer.add($.__views.calendar);
    $.__views.inbox = Ti.UI.createLabel({
        color: "red",
        width: "100%",
        textAlign: "right",
        right: "5dp",
        text: "Inbox",
        id: "inbox"
    });
    $.__views.footer.add($.__views.inbox);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.todoWin.open();
    $.inbox.addEventListener("click", addToDoItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;