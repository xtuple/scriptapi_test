(function () {
  var widget = { _alarmDueLit: mywidget.findChild("_alarmDueLit"),
                 _alarmOffset: mywidget.findChild("_alarmOffset")
  };

  widget._alarmDueLit && (widget._alarmDueLit.text   = "alarmDueLit");
  widget._alarmOffset && (widget._alarmOffset.prefix = "A");
})();


