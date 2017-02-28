/*
  This file is part of the
*/

/* Create a Test menu in the main application menu system. Have one menu entry
   for each scripting unit test.
 */

var testMenu   = new QMenu("Tests", mainwindow); //qsTranslate("menuTest", "Tests"));
var widgetMenu = new QMenu("Widget Tests", mainwindow); //qsTranslate("menuTest", "Widget Tests"));

testMenu.objectName   = "menu.test";
widgetMenu.objectName = "menu.test.widgets";

mainwindow.menuBar().addMenu(testMenu);
testMenu.addMenu(widgetMenu);

var widgetTestDesc = [ { label: qsTranslate("menuTest", "Address Cluster"),
                         priv: undefined,
                         name: "addressCluster",
                         slot: sAddressClusterTest
                       },
                       { label: qsTranslate("menuTest", "Alarms"),
                         priv: undefined,
                         name: "alarms",
                         slot: sAlarmsTest
                       },
                       { label: qsTranslate("menuTest", "CLineEdit"),
                         priv: undefined,
                         name: "clineEdit",
                         slot: sCLineEdit
                       },
                       {
                       label: qsTranslate("menuTest", "Comments"),
                         priv:  undefined,
                         name:  "comments",
                         slot:  sCommentsTest
                       },
                       {
                         label: qsTranslate("menuTest", "Contact Widget"),
                         priv:  undefined,
                         name: "contactWidget",
                         slot: sContactWidgetTest
                       },
                       { label: qsTranslate("menuTest", "CRM Account Cluster"),
                         priv:  undefined,
                         name:  "crmacctCluster",
                         slot:  sCrmacctClusterTest
                       },
                       { label: qsTranslate("menuTest", "Currency Cluster"),
                         priv:  undefined,
                         name:  "currCluster",
                         slot:  sCurrClusterTest
                       },
                       { label: qsTranslate("menuTest", "Documents Widget"),
                         priv:  undefined,
                         name:  "documents",
                         slot:  sDocumentsTest
                       },
                       { label: qsTranslate("menuTest", "GL Cluster"),
                         priv:  undefined,
                         name:  "glCluster",
                         slot:  sGlClusterTest
                       },
                       { label: qsTranslate("menuTest", "Item Cluster"),
                         priv:  undefined,
                         name:  "itemCluster",
                         slot:  sItemClusterTest
                       },
                       { label: qsTranslate("menuTest", "Order Cluster"),
                         priv:  undefined,
                         name:  "orderCluster",
                         slot:  sOrderClusterTest
                       },
                       { label: qsTranslate("menuTest", "Parameter Group"),
                         priv:  undefined,
                         name:  "parameterGroup",
                         slot:  sParameterGroupTest
                       },
                       { label: qsTranslate("menuTest", "Project Cluster"),
                         priv:  undefined,
                         name:  "projectCluster",
                         slot:  sProjectClusterTest
                       },
                       { label: qsTranslate("menuTest", "RA Cluster"),
                         priv:  undefined,
                         name:  "raCluster",
                         slot:  sRaClusterTest
                       },
                       { label: qsTranslate("menuTest", "Revision Cluster"),
                         priv:  undefined,
                         name:  "revisionCluster",
                         slot:  sRevisionClusterTest
                       },
                       { label: qsTranslate("menuTest", "Shipment Cluster"),
                         priv:  undefined,
                         name:  "shipmentCluster",
                         slot:  sShipmentClusterTest
                       },
                       { label: qsTranslate("menuTest", "Vendor Group"),
                         priv:  undefined,
                         name:  "vendorGroup",
                         slot:  sVendorGroupTest
                       },
                       { label: qsTranslate("menuTest", "Work Order Material Cluster"),
                         priv:  undefined,
                         name:  "womatlCluster",
                         slot:  sWomatlClusterTest
                       },
                       { label: qsTranslate("menuTest", "Data Widget Mapper"),
                         priv:  undefined,
                         name:  "xDataWidgetMapper",
                         slot:  sXDataWidgetMapperTest
                       },
                       { label: qsTranslate("menuTest", "Date Edit"),
                         priv:  undefined,
                         name:  "xDateEdit",
                         slot:  sXDateEditTest
                       },
                       { label: qsTranslate("menuTest", "xSqlTableModel"),
                         priv:  undefined,
                         name:  "xSqlTableModel",
                         slot:  sXSqlTableModelTest
                       },
                      ];

widgetTestDesc.forEach(function (actionDesc) {
  var action = widgetMenu.addAction(actionDesc.label);
  if (actionDesc.priv) {
    action.enabled = privileges.value(actionDesc.priv);
    action.setData(actionDesc.priv);
  }
  action.objectName = actionDesc.name;
  action.triggered.connect(actionDesc.slot)
});

function sAddressClusterTest() {
  toolbox.openWindow("addressClusterTest");
}

function sAlarmsTest() {
  toolbox.openWindow("alarmsTest");
}

function sCLineEdit() {
  toolbox.openWindow("clineEditTest");
}

function sCommentsTest() {
  toolbox.openWindow("commentsTest");
}

function sContactWidgetTest() {
  toolbox.openWindow("contactWidgetTest");
}

function sCrmacctClusterTest() {
  toolbox.openWindow("crmacctClusterTest");
}

function sCurrClusterTest() {
  toolbox.openWindow("currClusterTest");
}

function sDocumentsTest() {
  toolbox.openWindow("documentsTest");
}

function sGlClusterTest() {
  toolbox.openWindow("glClusterTest");
}

function sItemClusterTest() {
  toolbox.openWindow("itemClusterTest");
}

function sOrderClusterTest() {
  toolbox.openWindow("orderClusterTest");
}

function sParameterGroupTest() {
  toolbox.openWindow("parameterGroupTest");
}

function sProjectClusterTest() {
  toolbox.openWindow("projectClusterTest");
}

function sRaClusterTest() {
  toolbox.openWindow("raClusterTest");
}

function sRevisionClusterTest() {
  toolbox.openWindow("revisionClusterTest");
}

function sShipmentClusterTest() {
  toolbox.openWindow("shipmentClusterTest");
}

function sVendorGroupTest() {
  toolbox.openWindow("vendorGroupTest");
}

function sWomatlClusterTest() {
  toolbox.openWindow("womatlClusterTest");
}

function sXDateEditTest() {
  toolbox.openWindow("xDateEditTest");
}

function sXDataWidgetMapperTest() {
  toolbox.openWindow("xDataWidgetMapperTest");
}

function sXSqlTableModelTest() {
  toolbox.openWindow("xSqlTableModelTest");
}
