var fieldValueMap = {
  '#issue_title' : 'CATEGORY - Brief Description',
  '#issue_body': "###### Description" +
    "\n\n* " +
    "\n\n###### Reproduction Steps" +
    "\n\n* " +
    "\n\n###### Potential Causes" +
    "\n\n* " +
    "\n\n###### Console Output" +
    "\n\n* " +
    "\n\n###### Error Reports"+
    "\n\n* "
};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});

