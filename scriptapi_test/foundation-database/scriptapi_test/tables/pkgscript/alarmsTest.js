(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show   = mywindow.findChild("_show");
    var _type   = mywindow.findChild("_type");
    var _typeList = [ "Uninitialized",
                      "Address",          "BBOMHead",           "BBOMItem",
                      "BOMHead",          "BOMItem",            "BOOHead",
                      "BOOItem",          "CRMAccount",         "Contact",
                      "Customer",         "Employee",           "Incident",
                      "Item",             "ItemSite",           "ItemSource",
                      "Location",         "LotSerial",          "Opportunity",
                      "Project",          "PurchaseOrder",      "PurchaseOrderItem",
                      "ReturnAuth",       "ReturnAuthItem",     "Quote",
                      "QuoteItem",        "SalesOrder",         "SalesOrderItem",
                      "TodoItem",
                      "TransferOrder",    "TransferOrderItem", "Vendor",
                      "Warehouse",        "WorkOrder" ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in Alarms) { props.push(i + ": " + Alarms[i]); }
    _show.plainText = props.join("\n");

    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sType(pId) {
      _show.plainText = "expected: " + pId + "/" + _typeList[pId]
                      + "\n" + "actual: " + _widget.type;
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
