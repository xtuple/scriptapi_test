(function () {
  try {
    var _widget      = mywindow.findChild("_widget");
    var _show     = mywindow.findChild("_show");
    var _type     = mywindow.findChild("_type");
    var _typeList = [ "Uninitialized",
                      "Address",           "BBOMHead",           "BBOMItem",
                      "BOMHead",           "BOMItem",            "BOOHead",
                      "BOOItem",           "CRMAccount",         "Contact",
                      "Contract",          "CreditMemo",         "CreditMemoItem",
                      "Customer",          "Employee",           "Incident",
                      "Invoice",           "InvoiceItem",
                      "Item",              "ItemSite",           "ItemSource",
                      "Location",          "LotSerial",
                      "Opportunity",       "Project",            "PurchaseOrder",
                      "PurchaseOrderItem", "ReturnAuth",         "ReturnAuthItem",
                      "Quote",             "QuoteItem",          "SalesOrder",
                      "SalesOrderItem",    "ShipTo",             "TimeExpense",
                      "Todo",              "TransferOrder",      "TransferOrderItem",
                      "Vendor",            "Voucher",            "Warehouse",
                      "WorkOrder",         "ProjectTask"
                     ];

    _typeList.forEach(function (elem, idx) {
      _type.append(idx, elem);
    });

    var props = [];
    for (var i in Documents) { props.push(i + ": " + Documents[i]); }
    _show.plainText = props.join("\n");

    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "doc id: " + pId,
                          "type: "   + _widget.type ].join("\n");
    }

    function sType(pId) {
      _show.plainText = "expected: " + pId + "/" + _typeList[pId]
                      + "\n" + "actual after int setting: " + _widget.type;
      _widget.setType = _typeList[pId];
      _show.plainText += "\n" + "actual after string setting: " + _widget.type;

    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
