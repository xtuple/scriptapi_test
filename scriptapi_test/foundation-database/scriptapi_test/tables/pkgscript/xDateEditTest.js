(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = [ "Empty", "Current", "None" ];

    _typeList.forEach(function (e, i) { _type.append(i, e); });

    var props = [];
    for (var i in XDateEdit) { props.push(i + ": " + XDateEdit[i]); }
    _show.plainText = props.join("\n");

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
