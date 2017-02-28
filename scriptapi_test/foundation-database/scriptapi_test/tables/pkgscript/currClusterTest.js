(function () {
  try {
    var _currCluster = mywindow.findChild("_currCluster");
    var _currDisplay = mywindow.findChild("_currDisplay");
    var _currency    = mywindow.findChild("_currency");
    var _show        = mywindow.findChild("_show");
    var _type        = mywindow.findChild("_type");
    var _typeList    = [ "Money",
                         "SalesPrice",
                         "PurchPrice",
                         "ExtPrice",
                         "Cost"
                       ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in CurrDisplay) { props.push(i + ": " + CurrDisplay[i]); }
    _show.plainText = props.join("\n");

    _currCluster.localValue = 12345.6789;
    _currDisplay.localValue = 12345.6789;

    _currCluster["idChanged(int)"].connect(sNewId);
    _type["newID(int)"].connect(_currCluster, "setFormat");
    _type["newID(int)"].connect(_currDisplay, "setFormat");
    _type["newID(int)"].connect(sType);
    _currency["newID(int)"].connect(_currCluster, "setId");
    _currency["newID(int)"].connect(_currDisplay, "setId");

    function sNewId(pId) {
      _show.plainText = [ "currency id: " + [ pId, _currDisplay.id(), _currCluster.id() ].join("/"),
                          "local value: " + [ _currDisplay.localValue, _currCluster.localValue ].join("/"),
                          "base value: "  + [ _currDisplay.baseValue,  _currCluster.baseValue  ].join("/")
                        ].join("\n");
    }

    function sType(pId) {
      _show.plainText = [ "expected: " + pId + "/" + _typeList[pId],
                          "display actual: " + _currDisplay.format,
                          "cluster actual: " + _currCluster.format ].join("\n");
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.title + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
