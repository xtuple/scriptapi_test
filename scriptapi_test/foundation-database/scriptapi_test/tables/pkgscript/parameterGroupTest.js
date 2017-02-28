(function () {
  try {
    var _widget    = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _state     = mywindow.findChild("_state");
    var _stateList = [ "All", "Selected", "Pattern" ];
    var _type      = mywindow.findChild("_type");
    var _typeList  = [ "AdhocGroup",
                       "PlannerCode",
                       "ProductCategory",
                       "ClassCode",
                       "ItemGroup",
                       "CostCategory",
                       "CustomerType",
                       "CustomerGroup",
                       "CurrencyNotBase",
                       "Currency",
                       "WorkCenter",
                       "User",
                       "ActiveUser",
                       "OpportunitySource",
                       "OpportunityStage",
                       "OpportunityType"
                     ];

    _stateList.forEach(function (elem, idx) {
      _state.append(idx, elem);
    });
    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in ParameterGroup) { props.push(i + ": " + ParameterGroup[i]); }
    _show.plainText = props.join("\n");

    _state["newID(int)"].connect(_widget, "setState");
    _state["newID(int)"].connect(sState);
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

    function sState(pId) {
      _show.plainText = "expected: " + pId + "/" + _stateList[pId]
                      + "\n" + "actual state: " + _widget.state;
    }
    function sType(pId) {
      _show.plainText = "expected: " + pId + "/" + _typeList[pId]
                      + "\n" + "actual type: " + _widget.type;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
