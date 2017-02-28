(function() {
  try {
    var _addr = { edit:   mywindow.findChild("_addrEdit"),
                  select: mywindow.findChild("_addrSelect"),
                  view:   mywindow.findChild("_addrView")
                };
    var _show = mywindow.findChild("_show");
    var _list = mywindow.findChild("_list");
    var _qry  = toolbox.executeQuery("SELECT addr_id, addr_number, formataddr(addr_id) AS format"
                                   + "  FROM addr"
                                   +  " ORDER BY random()"
                                   +  " LIMIT 10;");

    _list["newId(int)"].connect(_addr.edit,        "setId");
    _addr.edit["newId(int)"].connect(_addr.view,   "setId");
    _addr.view["newId(int)"].connect(_addr.select, "setId");
    _addr.select["newId(int)"].connect(sNewId);

    // test basic properties
    _addr.edit.fieldNameAddressChange = 'fieldNameAddressChange';
    _addr.edit.fieldNameNumber        = 'fieldNameNumber';
    _addr.edit.fieldNameActive        = 'fieldNameActive';
    _addr.edit.fieldNameLine1         = 'fieldNameLine1';
    _addr.edit.fieldNameLine2         = 'fieldNameLine2';
    _addr.edit.fieldNameLine3         = 'fieldNameLine3';
    _addr.edit.fieldNameCity          = 'fieldNameCity';
    _addr.edit.fieldNameState         = 'fieldNameState';
    _addr.edit.fieldNamePostalCode    = 'fieldNamePostalCode';
    _addr.edit.fieldNameCountry       = 'fieldNameCountry';

    _list.addColumn("Id",      -1, Qt.AlignRight, true, "addr_id");
    _list.addColumn("Number",  -1, Qt.AlignLeft,  true, "addr_number");
    _list.addColumn("Address", -1, Qt.AlighLeft,  true, "format");
    _list.populate(_qry);

    var props = [];
    for (var i in AddressCluster) { props.push(i + ": " + AddressCluster[i]); }
    _show.plainText = props.join("\n");

    function sNewId(pId) {
      try {
        var chunks = [ _addr.edit.id()   + "/" + _addr.edit.number,
                       _addr.edit.line1(), _addr.edit.line2(), _addr.edit.line3(),
                       _addr.edit.city() + "," + _addr.edit.state() + " " + _addr.edit.postalCode(),
                       _addr.edit.country(),
                       "search Acct: "   + _addr.edit.searchAcctId() + ", " + "isValid: " + _addr.edit.isValid(),
                       "description: "   + _addr.edit.description()  + ", " + "notes: "   + _addr.edit.notes,
                       "activeVisible: " + [ _addr.edit.activeVisible, _addr.view.activeVisible, _addr.select.activeVisible ].join('/'),
                       "addrChange: "    + [ _addr.edit.addrChange,    _addr.view.addrChange,    _addr.select.addrChange    ].join('/'),
                       "mode: "          + [ _addr.edit.mode,          _addr.view.mode,          _addr.select.mode          ].join('/'),
                       "label: "         + [ _addr.edit.label,         _addr.view.label,         _addr.select.label         ].join('/')
                     ];
        _show.plainText = chunks.join("\n");
      } catch (e) {QMessageBox.critical(mywindow, "sNewId Test Error",
                         "Line " + e.lineNumber + ": " + e);
      }
    }

  } catch (e) {
    QMessageBox.critical(mywindow, "addressCluster Test Error",
                         "Line " + e.lineNumber + ": " + e);
  }
})();
