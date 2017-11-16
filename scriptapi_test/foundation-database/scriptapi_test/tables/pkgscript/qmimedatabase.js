try
{
  var database;
  var types;
  var type;
  var type2;
  var suffix;
  var text;
  var list;
  var state;

  database = QMimeDatabase();
  types = database.allMimeTypes();
  type = database.mimeTypeForData(QByteArray());
  type = database.mimeTypeForData(QProcess());
  type = database.mimeTypeForFile(QFileInfo());
  type = database.mimeTypeForFile("");
  type = database.mimeTypeForFileNameAndData("", QProcess());
  type = database.mimeTypeForFileNameAndData("", QByteArray());
  type = database.mimeTypeForName("");
  type = database.mimeTypeForUrl(QUrl());
  types = database.mimeTypesForFileName("");
  suffix = database.suffixForFileName("");

  type = QMimeType();
  list = type.aliases();
  list = type.allAncestors();
  text = type.comment();
  text = type.filterString();
  text = type.genericIconName();
  list = type.globPatterns();
  state = type.inherits("");
  state = type.isDefault();
  state = type.isValid();
  text = type.name();
  list = type.parentMimeTypes();
  text = type.preferredSuffix();
  list = type.suffixes();
  type2 = type;
  state = (type!=type2);
  state = (type==type2);

  QMessageBox.information(mywindow, "Test Succeeded",
                      "No errors were encountered when running this test.");
  mywindow.close();
}
catch (e)
{
  QMessageBox.critical(mywindow, "Test Failed",
                       "Line " + e.lineNumber + ": " + e);
  mywindow.close();
}