'use strict';
goog.provide('Blockly.JavaScript.logic');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['def_name'] = function(block) {
    var text_def_name = block.getFieldValue('def_name');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = statements_name + "\n" + "MakeDatas_extracted();\n";//'...;\n';
    return code;
  };
  Blockly.JavaScript['def_condition'] = function(block) {
    var text_def_condition = block.getFieldValue('def_condition');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'for(var i=0; i < datas[0][0].length; i++){ \n' +
                '  if(' + statements_name + '    ) { \n' +
                '    defs[0][i] = 1; \n' +
                '  } else { \n' +
                '    defs[0][i] = 0; \n' +
                '} } \n'
    return code;
  };
  Blockly.JavaScript['def_expression'] = function(block) {
    var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operation = block.getFieldValue('operation');
    var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_left + dropdown_operation + value_right;
    return code;
  };
  Blockly.JavaScript['def_comb'] = function(block) {
    var dropdown_comb = block.getFieldValue('comb');
    // TODO: Assemble JavaScript into code variable.
    var code = ' '+ dropdown_comb +' ';
    return code;
  };
  Blockly.JavaScript['def_column'] = function(block) {
    var text_col_num = block.getFieldValue('col_num');
    // TODO: Assemble JavaScript into code variable.
    var code = 'datas[0]['+ text_col_num +'][i]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

/*
  Blockly.JavaScript['def_name'] = function(block) {
    var text_def_name = block.getFieldValue('def_name');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = statements_name;//'...;\n';
    return code;
  };
  Blockly.JavaScript['def_condition'] = function(block) {
    var text_def_condition = block.getFieldValue('def_condition');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'for(var i=0; i < datas[0][0].length; i++){ \n' +
                '  if(' + statements_name + '    ) { \n' +
                '    def[i] = 1; \n' +
                '  } else { \n' +
                '    def[i] = 0; \n' +
                '} } \n'
    return code;
  };
  Blockly.JavaScript['def_expression'] = function(block) {
    var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operation = block.getFieldValue('operation');
    var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_left + dropdown_operation + value_right;
    return code;
  };
  Blockly.JavaScript['def_comb'] = function(block) {
    var dropdown_comb = block.getFieldValue('comb');
    // TODO: Assemble JavaScript into code variable.
    var code = ' '+ dropdown_comb +' ';
    return code;
  };
  Blockly.JavaScript['def_column'] = function(block) {
    var text_col_num = block.getFieldValue('col_num');
    // TODO: Assemble JavaScript into code variable.
    var code = 'datas[0]['+ text_col_num +'][i]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  */