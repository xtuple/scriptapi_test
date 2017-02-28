(function () {
  try {
    var _widget    = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = [ { type: "cUndefined",  value:  0 },
                       { type: "cAsset",      value:  1 },
                       { type: "cLiability",  value:  2 },
                       { type: "cExpense",    value:  4 },
                       { type: "cRevenue",    value:  8 },
                       { type: "cEquity",     value: 16 }
                     ];

    _typeList.forEach(function (elem, idx) {
      _type.append(elem.value, elem.type);
    });

    var props = [];
    for (var i in GLCluster) { props.push(i + ": " + GLCluster[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "GL Cluster: "    + pId,
                          "Name: "          + _widget.name(),
                          "Description: "   + _widget.description(),
                          "Type: "          + _widget.type(),
                          "showExternal: "  + _widget.showExternal(),
                          "ignoreCompany: " + _widget.ignoreCompany() ].join("\n");
    }

    function sType(pId) {
      _show.plainText = "expected: " + [ pId,
                                         _typeList.filter(function (e) { return e.value == pId; })
                                       ].join("/")
                      + "\n" + "actual: " + _widget.type();
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
