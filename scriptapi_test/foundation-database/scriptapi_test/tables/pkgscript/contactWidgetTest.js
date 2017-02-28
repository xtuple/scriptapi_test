(function () {
  try {
    var _widget   = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _mode      = mywindow.findChild("_mode");
    var _modeList  = [ "Edit", "View", "Select" ];

    _modeList.forEach(function (elem, idx) {
      _mode.append(idx, elem);
    });

    var props = [];
    for (var i in ContactWidget) { props.push(i + ": " + ContactWidget[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _mode["newID(int)"].connect(sMode);

    function sNewId(pId) {
      _show.plainText = [
                          "contactWidgetId: " + pId + "/" + _widget.id(),
                          "Name: "            + _widget.name(),
                          "Number: "          + _widget.number,
                          "Active: "          + _widget.active(),
                          "emailAddress: "    + _widget.emailAddress(),
                          "address1: "        + _widget.address1(),
                          "city: "            + _widget.city(),
                          "ownerUsername: "   + _widget.ownerUsername(),
                          "owner: "           + _widget.owner(),
                          "mode: "            + _widget.mode
                        ].join("\n");
    }

    function sMode(pId) {
      _widget.mode = pId;
      _show.plainText = "expected: " + pId + "/" + _modeList[pId]
                      + "\n" + "actual: " + _widget.mode;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
