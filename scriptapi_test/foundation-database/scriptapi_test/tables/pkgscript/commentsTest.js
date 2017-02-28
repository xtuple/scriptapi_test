(function () {
  try {
    var _byId    = mywindow.findChild("_byId");
    var _byStr   = mywindow.findChild("_byStr");
    var _show    = mywindow.findChild("_show");
    var _widget  = mywindow.findChild("_widget");
    var _idList  = [ "Uninitialized",
                     "Address",
                     "BBOMHead",          "BBOMItem",
                     "BOMHead",           "BOMItem",
                     "BOOHead",           "BOOItem",
                     "CRMAccount",        "Contact",
                     "Customer",          "Employee",
                     "FixedAsset",        "MaintOrder",
                     "ExchangeRate",      "Incident",
                     "Item",              "ItemSite",
                     "ItemSource",        "Location",
                     "LotSerial",         "Opportunity",
                     "Project",           "PurchaseOrder",
                     "PurchaseOrderItem", "ReturnAuth",
                     "ReturnAuthItem",    "RentalItem",
                     "Quote",             "QuoteItem",
                     "SalesOrder",        "SalesOrderItem",
                     "Task",              "TimeAttendance",
                     "TodoItem",          "TransferOrder",
                     "TransferOrderItem", "Vendor",
                     "Warehouse",         "WorkOrder"
                  ];

    _idList.forEach(function (elem, idx) {
      _byId.append(idx, elem);
    });

    var props = [];
    for (var i in Comments) { props.push(i + ": " + Comments[i]); }
    _show.plainText = props.join("\n");

    var qry = toolbox.executeQuery("SELECT source_id, source_name, source_descrip"
                                 + "  FROM source ORDER BY source_descrip;");
    _byStr.populate(qry);

    _byId["newID(int)"].connect(sNewId);
    _byStr["newID(int)"].connect(sNewStr);
    _widget.commentAdded.connect(sIdType);

    function sNewId(pId) {
      _widget.setType(pId);
      _show.plainText = "Changed by CommentSources enum";
    }

    function sIdType() {
      _show.plainText = "A Comment was added";
    }

    function sNewStr(pId) {
      _widget.setType(_byStr.currentText);
      _show.plainText = "Changed by String";
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.title + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
