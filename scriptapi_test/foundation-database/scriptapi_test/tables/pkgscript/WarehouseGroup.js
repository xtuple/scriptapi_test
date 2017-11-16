(function () {
  var widget = { _all:        mywidget.findChild("_all"),
                 _site:       mywidget.findChild("_site"),
                 _selected:   mywidget.findChild("_selected"),
                 _warehouses: mywidget.findChild("_warehouses")
  };

  widget._all        && (widget._all.text         = "all");
  widget._site       && (widget._site.text        = "one");
  widget._selected   && (widget._selected.text    = "selected");
  widget._warehouses && (widget._warehouses.frame = false);
})();

