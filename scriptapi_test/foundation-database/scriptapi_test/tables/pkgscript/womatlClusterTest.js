(function () {
  try {
    var _widget    = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _src       = mywindow.findChild("_src");
    var _srcList   = { WorkOrder:  0x01,
                       WoMaterial: 0x02,
                       Wooper:     0x04
                     };
    var _type      = mywindow.findChild("_type");
    var _typeList  = { Pull:  0x01,
                       Push:  0x02,
                       Mixed: 0x04
                     };

    for (var i in _srcList)  { _src. append(_srcList[i],  i); }
    for (var i in _typeList) { _type.append(_typeList[i], i); }

    var props = [];
    for (var i in WomatlCluster) { props.push(i + ": " + WomatlCluster[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "id: "      + pId,
                          "woid: "    + _widget.woid(),
                          "isValid: " + _widget.isValid() ].join("\n");
    }

    function sType(pId) {
      var type;
      for (var i in _typeList) { if (_typeList[i] == pId) { type = i; break; }}
      _show.plainText = "expected: " + [ pId, type ].join("/");
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
