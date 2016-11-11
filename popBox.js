function popBox(){
  Browser.msgBox("Hello");
}

function onOpen(){
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadSheet.addMenu("Label, [{name: 'Item One', functionName: 'popBox'}]");
}
