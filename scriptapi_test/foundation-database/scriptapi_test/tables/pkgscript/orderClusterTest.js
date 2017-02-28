(function () {
  try {
    var _widget     = mywindow.findChild("_widget");
    var _show       = mywindow.findChild("_show");
    var _status     = mywindow.findChild("_status");
    var _statusList = { AnyStatus: 0x00,
                        Unposted:  0x01,
                        Open:      0x02,
                        Closed:    0x04
                      };
    var _type       = mywindow.findChild("_type");
    var _typeList   = { AnyType:   0x00,
                        Purchase:  0x01,
                        Return:    0x02,
                        Sales:     0x04,
                        Transfer:  0x08
                      };

    for (var i in _statusList) _status.append(_statusList[i], i);
    for (var i in _typeList)   _type.append(_typeList[i], i);

    var props = [];
    for (var i in OrderLineEdit) { props.push(i + ": " + OrderLineEdit[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(const int, const QString &)"].connect(sNewId);
    _status["newID(int)"].connect(sConfigChanged);
    _type["newID(int)"].connect(sConfigChanged);

    function sNewId(pId, pStatus) {
      try {
        _show.plainText = [ "id: "       + pId,
                            "status: "   + pStatus,
                            "expected: " + [ _status.id(),            _type.id() ].join("/"),
                            "actual: "   + [ _widget.allowedStatuses, _widget.allowedTypes ].join("/")
                          ].join("\n");
      } catch (e) {
        QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                             "Line " + e.lineNumber + ": " + e);
      }
    }

    function sConfigChanged(pId) {
      _widget.allowedStatuses = _status.id();
      _widget.allowedTypes    = _type.id();
      _show.plainText = [ "expected: " + [ _status.id(), _type.id() ].join("/"),
                          "actual: "   + [ _widget.allowedStatuses, _widget.allowedTypes ].join("/")
                        ].join("\n");
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
