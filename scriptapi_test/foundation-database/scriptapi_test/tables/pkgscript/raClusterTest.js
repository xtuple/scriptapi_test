(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = { AnyStatus: 0x00,
                       Open:      0x01,
                       Closed:    0x02
                     };

    for (var i in _typeList) { _type.append(_typeList[i], i); }

    var props = [];
    for (var i in RaLineEdit) { props.push(i + ": " + RaLineEdit[i]); }
    _show.plainText = props.join("\n");

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
