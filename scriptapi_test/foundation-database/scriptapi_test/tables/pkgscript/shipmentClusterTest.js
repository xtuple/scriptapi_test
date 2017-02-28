(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = [ "All",
                       "SalesOrder",
                       "TransferOrder"
                     ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in ShipmentClusterLineEdit) { props.push(i + ": " + ShipmentClusterLineEdit[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "shipment: " + pId,
                          "type: "     + _widget.type,
                          "status: "   + _widget.status ].join("\n");
    }

    function sType(pId) {
      _widget.type = _typeList[pId];
      _show.plainText = "expected: " + pId + "/" + _typeList[pId]
                      + "\n" + "actual: " + _widget.type;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
