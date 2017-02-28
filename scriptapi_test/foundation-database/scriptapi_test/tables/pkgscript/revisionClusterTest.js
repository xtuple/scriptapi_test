(function () {
  try {
    var _widget     = mywindow.findChild("_widget");
    var _show       = mywindow.findChild("_show");
    var _mode       = mywindow.findChild("_mode");
    var _modeList   = [ "View", "Use", "Maintain" ];
    var _status     = mywindow.findChild("_status");
    var _statusList = [ "Active",
                        "Substitute",
                        "Pending",
                        "Inactive"
                      ];
    var _type       = mywindow.findChild("_type");
    var _typeList   = [ "All", "BOM", "BOO" ];

    _modeList  .forEach(function (e, i) { _mode  .append(i, _modeList[i]  ); });
    _statusList.forEach(function (e, i) { _status.append(i, _statusList[i]); });
    _typeList  .forEach(function (e, i) { _type  .append(i, _typeList[i]  ); });

    var props = [];
    for (var i in RevisionLineEdit) { props.push(i + ": " + RevisionLineEdit[i]); }
    _show.plainText = props.join("\n");

    //_widget["newId(const int, const QString &)"].connect(sNewId);
    _mode["newID(int)"].connect(sConfigChanged);
    _status["newID(int)"].connect(sConfigChanged);
    _type["newID(int)"].connect(sConfigChanged);

    function sNewId(pId, pStatus) {
      try {
        _show.plainText = [ "id: "       + pId,
                            "expected: " + [ _mode.id(),   _status.id(),   _type.id() ].join("/"),
                            "actual: "   + [ _widget.mode, _widget.status, _widget.type ].join("/")
                          ].join("\n");
      } catch (e) {
        QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                             "Line " + e.lineNumber + ": " + e);
      }
    }

    function sConfigChanged(pId) {
      _widget.mode   = _mode.id();
      _widget.status = _status.id();
      _widget.type   = _type.id();
      _show.plainText = [ "expected: " + [ _mode.id(),   _status.id(),   _type.id() ].join("/"),
                          "actual: "   + [ _widget.mode, _widget.status, _widget.type ].join("/")
                        ].join("\n");
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
