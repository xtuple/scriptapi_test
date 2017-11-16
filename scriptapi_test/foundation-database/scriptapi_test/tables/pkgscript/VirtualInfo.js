(function () {
  var widget = { _titleLit:     mywidget.findChild("_titleLit"),
                 _numberLit:    mywidget.findChild("_numberLit"),
                 _number:       mywidget.findChild("_number"),
                 _nameLit:      mywidget.findChild("_nameLit"),
                 _name:         mywidget.findChild("_name"),
                 _descripLit:   mywidget.findChild("_descripLit"),
                 _descrip:      mywidget.findChild("_descrip"),
                 _close:        mywidget.findChild("_close")
  };

  widget._titleLit   && (widget._titleLit.text      = "Info Title");
  widget._numberLit  && (widget._numberLit.text     = "nUMBER");
  widget._number     && (widget._number.frameStyle  = 1);
  widget._nameLit    && (widget._nameLit.text       = "nAME");
  widget._name       && (widget._name.frameStyle    = 2);
  widget._descripLit && (widget._descripLit.text    = "dESCRIP");
  widget._descrip    && (widget._descrip.frameStyle = 6);
  widget._close      && (widget._close.text         = "Click Me");

}})();
