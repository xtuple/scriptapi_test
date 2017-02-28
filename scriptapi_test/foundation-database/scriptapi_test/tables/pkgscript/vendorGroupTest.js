(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _state      = mywindow.findChild("_state");
    var _stateList  = [ "All",
                       "Selected",
                       "SelectedType",
                       "TypePattern"
                     ];

    _stateList.forEach(function (elem, idx) {
      _state.append(idx, elem);
    });

    var props = [];
    for (var i in VendorGroup) { props.push(i + ": " + VendorGroup[i]); }
    _show.plainText = props.join("\n");

    _widget["newVendId(int)"].connect(sNewVendId);
    _widget["newVendTypeId(int)"].connect(sNewVendTypeId);
    _state["newID(int)"].connect(sType);

    function sNewVendId(pId) {
      _show.plainText = [ "sNewVend id: " + pId,
                          "State: "       + _widget.state,
                          "vend id:"      + _widget.vendId(),
                          "vend type id:" + _widget.vendTypeId() ].join("\n");
    }
    function sNewVendTypeId(pId) {
      _show.plainText = [ "sNewVendType id: " + pId,
                          "State: "           + _widget.state,
                          "vend id:"          + _widget.vendId(),
                          "vend type id:"     + _widget.vendTypeId() ].join("\n");
    }

    function sType(pId) {
      _widget.state = pId;
      _show.plainText = "expected: " + pId + "/" + _stateList[pId]
                      + "\n" + "actual: " + _widget.state;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
