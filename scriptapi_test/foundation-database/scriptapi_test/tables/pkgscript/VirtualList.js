(function () {
  var widget = { _buttonBox:     mywidget.findChild("_buttonBox"),
                 _listTab:       mywidget.findChild("_listTab"),
                 _search:        mywidget.findChild("_search"),
                 _searchLit:     mywidget.findChild("_searchLit"),
                 _titleLit:      mywidget.findChild("_titleLit")
  };

  widget._buttonBox    && widget._buttonBox.orientation  = Qt.Horizontal;
  widget._listTab      && widget._listTab.headerHidden   = true;
  widget._search       && widget._search.placeholderText = "search List text here";
  widget._searchLit    && widget._searchLit.text         = "Look for me:";
  widget._titleLit     && widget._titleLit.text          = "List Title";
})();
