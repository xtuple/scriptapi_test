(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = [ "AllCustomers",
                       "ActiveCustomers",
                       "AllProspects",
                       "ActiveProspects",
                       "AllCustomersAndProspects",
                       "ActiveCustomersAndProspects"
                     ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in CLineEdit) { props.push(i + ": " + CLineEdit[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "cLineEditId: " + pId,
                          "Name: "        + _widget.name(),
                          "Description: " + _widget.description(),
                          "Edit: "        + _widget.editPriv(),
                          "View: "        + _widget.viewPriv(),
                          "canOpen: "     + _widget.canOpen() ].join("\n");
    }

    function sType(pId) {
      _show.plainText = "expected: " + pId + "/" + _typeList[pId]
                      + "\n" + "actual: " + _widget.type;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
