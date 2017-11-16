(function () {
  var widget = { _label:       mywidget.findChild("_label"),
                 _name:        mywidget.findChild("_name"),
                 _description: mywidget.findChild("_description")
  };

  widget._label       && (widget._label.text       = "VC Label");
  widget._name        && (widget._name.text        = "VC Name");
  widget._description && (widget._description.text = "VC Descrip");
})();
