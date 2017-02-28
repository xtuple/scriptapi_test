(function () {
  try {
    var _widget     = mywindow.findChild("_widget");
    var _show       = mywindow.findChild("_show");
    var _type       = mywindow.findChild("_type");
    var _typeList   = [ "Undefined",
                        "SalesOrder",
                        "WorkOrder",
                        "PurchaseOrder"
                      ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in ProjectLineEdit) { props.push(i + ": " + ProjectLineEdit[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "id: "            + pId,
                          "allowedStatuses" + _widget.allowedStatuses(),
                          "type"            + _widget.type
                        ].join("\n");
    }

    function sType(pId) {
      _show.plainText = "expected: " + pId + "/" + _typeList[pId];
                      // + "\n" + "actual: " + _widget.type(); // but the return type isn't exposed to scripting
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
