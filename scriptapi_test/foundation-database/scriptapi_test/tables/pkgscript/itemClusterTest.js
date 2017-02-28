(function () {
  try {
    var _widget = mywindow.findChild("_widget");
    var _show      = mywindow.findChild("_show");
    var _type      = mywindow.findChild("_type");
    var _typeList  = { cUndefined        : 0x00      ,
                       cPurchased        : 0x00000001,
                       cManufactured     : 0x00000002,
                       cPhantom          : 0x00000004,
                       cBreeder          : 0x00000008,
                       cCoProduct        : 0x00000010,
                       cByProduct        : 0x00000020,
                       cReference        : 0x00000040,
                       cCosting          : 0x00000080,
                       cTooling          : 0x00000100,
                       cOutsideProcess   : 0x00000200,
                       cPlanning         : 0x00000400,
                       cKit              : 0x00001000,
                       cAllItemTypes_Mask: 0x0000FFFF,
                       cPlanningMRP      : 0x00100000,
                       cPlanningMPS      : 0x00200000,
                       cPlanningNone     : 0x00400000,
                       cHasBom           : 0x01000000,
                       cUsedOnBom        : 0x02000000,
                       cItemActive       : 0x04000000,
                       cSold             : 0x08000000,
                       cLocationControlled: 0x10000000,
                       cLotSerialControlled: 0x20000000,
                       cDefaultLocation  : 0x40000000,
                       cActive           : 0x80000000
                     };
    _typeList.cPlanningAny         = _typeList.cPlanningMRP  | _typeList.cPlanningMPS
                                                             | _typeList.cPlanningNone;
    _typeList.cGeneralManufactured = _typeList.cManufactured | _typeList.cBreeder;
    _typeList.cGeneralPurchased    = _typeList.cPurchased    | _typeList.cOutsideProcess
                                                             | _typeList.cTooling;
    _typeList.cGeneralComponents   = _typeList.cManufactured | _typeList.cPhantom
                                                             | _typeList.cCoProduct
                                                             | _typeList.cPurchased
                                                             | _typeList.cOutsideProcess
                                                             | _typeList.cReference
                                                             | _typeList.cTooling;
    _typeList.cKitComponents       = _typeList.cSold | (_typeList.cAllItemTypes_Mask ^ _typeList.cKit);
    _typeList.cGeneralInventory    = _typeList.cAllItemTypes_Mask ^ _typeList.cReference;

    for (var i in _typeList) {
      _type.append(_typeList[i], i);
    }

    var props = [];
    for (var i in ItemLineEdit) { props.push(i + ": " + ItemLineEdit[i]); }
    _show.plainText = props.join("\n");

    _widget["newId(int)"].connect(sNewId);
    _type["newID(int)"].connect(_widget, "setType");
    _type["newID(int)"].connect(sType);

    function sNewId(pId) {
      _show.plainText = [ "id: "          + pId,
                          "Number: "      + _widget.itemNumber(),
                          "type: "        + _widget.type,
                          "extra: "       + _widget.getExtraClauseList() ].join("\n");
    }

    function sType(pId) {
      var str;
      for (var i in _typeList) {
        if (_typeList[i] == pId) {
          str = i;
          break;
        }
      }
      _show.plainText = [ "expected: " + pId + "/" + str,
                          "actual: "   + _widget.type,
                          "extra: "    + _widget.getExtraClauseList() ].join("\n");
    }

  } catch (e) {
    QMessageBox.critical(mywindow, mywindow.windowTitle + " Error",
                     "Line " + e.lineNumber + ": " + e);
  }

})();
