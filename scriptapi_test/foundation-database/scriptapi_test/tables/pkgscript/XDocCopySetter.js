(function () {
  var widget = { _watermarks:        mywidget.findChild("_watermarks"),
                 _numOfCopies:       mywidget.findChild("_numOfCopies")
  };

  widget._watermarks  && (widget._watermarks.alternatingRowColors = false);
  widget._numOfCopies && (widget._numOfCopies.prefix = "#");
})();


