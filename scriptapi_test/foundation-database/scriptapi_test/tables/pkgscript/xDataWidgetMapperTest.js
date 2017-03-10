(function () {
  try {
    var _mapper = new XDataWidgetMapper();
    var _show   = mywindow.findChild("_show");

    var props = [];
    for (var i in XDataWidgetMapper) {
      props.push(i + ": " + ((typeof XDataWidgetMapper[i] == 'function') ? "function()" : XDataWidgetMapper[i]));
    }
    props.push("---------------------------");
    for (var i in _mapper) {
      props.push(i + ": " + ((typeof _mapper[i] == 'function') ? "function()" : _mapper[i]));
    }
    _show.plainText = props.join("\n");

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
