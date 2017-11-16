(function () {
  var widget = { _buttonBox:     mywidget.findChild("_buttonBox"),
                 _listTab:       mywidget.findChild("_listTab"),
                 _search:        mywidget.findChild("_search"),
                 _searchLit:     mywidget.findChild("_searchLit"),
                 _searchNumber:  mywidget.findChild("_searchNumber"),
                 _searchName:    mywidget.findChild("_searchName"),
                 _searchDescrip: mywidget.findChild("_searchDescrip"),
                 _titleLit:      mywidget.findChild("_titleLit")
  };

  widget._buttonBox      && (widget._buttonBox.orientation         = Qt.Horizontal);
  widget._listTab        && (widget._listTab.headerHidden          = true);
  widget._search         && (widget._search.placeholderText        = "search Search text");
  widget._searchLit      && (widget._searchLit.text                = "Look for me:");
  widget._searchNumber   && (widget._searchNumber.layoutDirection  = Qt.RightToLeft);
  widget._searchName     && (widget._searchName.layoutDirection    = Qt.RightToLeft);
  widget._searchDescrip  && (widget._searchDescrip.layoutDirection = Qt.RightToLeft);
  widget._titleLit       && (widget._titleLit.text                 = "Search Title");
}})();
