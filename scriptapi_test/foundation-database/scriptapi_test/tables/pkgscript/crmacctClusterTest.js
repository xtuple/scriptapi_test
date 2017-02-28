(function () {
  try {
    var _widget   = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = [ "Crmacct",
                       "Competitor",
                       "Cust",
                       "Employee",
                       "Partner",
                       "Prospect",
                       "SalesRep",
                       "Taxauth",
                       "User",
                       "Vend",
                       "CustAndProspect"
                     ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in CRMAcctLineEdit) { props.push(i + ": " + CRMAcctLineEdit[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(_widget, "setSubtype");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "crmacctId: "   + pId + "/" + _widget.id(),
                          "Number: "      + _widget.number,
                          "Subtype:"      + _widget.subtype,
                          "Description: " + _widget.description(),
                          "isValid: "     + _widget.isValid(),
                          "readOnly: "    + _widget.readOnly ,
                          "extraClause: " + _widget.extraClause() ].join("\n");
    }

    function sType(pId) {
      _show.plainText = "expected: " + pId + "/" + _typeList[pId]
                      + "\n" + "actual: " + _widget.subtype;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
