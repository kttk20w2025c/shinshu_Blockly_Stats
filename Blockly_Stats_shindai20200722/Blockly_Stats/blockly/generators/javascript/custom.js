'use strict';

goog.provide('Blockly.JavaScript.logic');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['column'] = function(block) {
  var text_col_num = block.getFieldValue('col_num');
  // TODO: Assemble JavaScript into code variable.
  var code = 'data_r['+ text_col_num +']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sheet_col'] = function(block) {
  var number_sheetnum = block.getFieldValue('sheetNum');
  var number_colnum = block.getFieldValue('colNum');
  // TODO: Assemble JavaScript into code variable.
  var code = number_sheetnum + ',' + number_colnum;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sheet_col_2'] = function(block) {
  var value_sheetnum = Blockly.JavaScript.valueToCode(block, 'sheetNum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_colnum = Blockly.JavaScript.valueToCode(block, 'colNum', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_sheetnum + ',' + value_colnum;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['averave_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

    var code = 'Average_csv(' + data_d + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['max_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

  var code = 'Math.max.apply(null, '+ data_d +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['min_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

  var code = 'Math.min.apply(null, '+ data_d +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mean_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

  var code = 'Mean_csv('+ data_d +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mode_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

  var code = 'Mode_csv('+ data_d +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['variance_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

  var code = 'Variance_csv('+ data_d +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['stdev_column'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas[" + d_val[0] + "][" + d_val[1] + "]";

  var code = 'Stdiv_csv('+ data_d +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['r_column'] = function(block) {
  var value_column_x = Blockly.JavaScript.valueToCode(block, 'column_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_column_y = Blockly.JavaScript.valueToCode(block, 'column_y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var data_x = makeDatas(value_column_x);
  var data_y = makeDatas(value_column_y);

  var code = 'R_csv('+ data_x+','+ data_y +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['col_calc'] = function(block) {
  var value_col1 = Blockly.JavaScript.valueToCode(block, 'col1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col2 = Blockly.JavaScript.valueToCode(block, 'col2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  d_col1 = value_col1.slice(1,-1);
  d_col1 = d_col1.split(",");
  var col1_data = "datas_extracted[" + d_col1[0] + "][" + d_col1[1] + "]";
  d_col2 = value_col2.slice(1,-1);
  d_col2 = d_col2.split(",");
  var col2_data = "datas_extracted[" + d_col2[0] + "][" + d_col2[1] + "]";
  str = "var result= []; for(i=0;i<"+ col1_data + ".length; i++){\n";
  str+= "result[i] = " + col1_data + "[i] + " +col2_data + "[i]"; 
  var code = str;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];



  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var d_val = value_column.slice(1,-1);
  d_val = d_val.split(',');
  var data_d = "datas_extracted[" + d_val[0] + "][" + d_val[1] + "]";

    var code = 'Average_csv(' + data_d + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


function Average_csv(d){
            var sum = 0;
            for(var i=0; i<d.length; ++i){
              sum = sum+d[i];
            }
            return sum / d.length;
          };

function Mean_csv(d){
  var tmp = d.slice();
  tmp.sort(function(a,b){
    if(a<b) return -1;
    if(a>b) return 1;
  });
  var mean;
  if(tmp.length%2 === 0){
    mean = tmp[tmp.length/2];
  }else{
    mean = (tmp[tmp.length/2-0.5]+tmp[tmp.length/2+0.5])/2
  }
  return mean;
}

function Variance_csv(d){
  var ave = Average_csv(d);
  var sum = 0;
  for(var i=0; i<d.length; ++i){
    sum = sum + (d[i] - ave)*(d[i] - ave);
  }
  return sum/d.length;
}

function Stdiv_csv(d){
    return Math.sqrt(Variance_csv(d));
}

function R_csv(d_x, d_y){
  var ave_d_x = Average_csv(d_x);
  var ave_d_y = Average_csv(d_y);
  console.log(ave_d_x);
  var sum = 0;
  for(var i=0; i<d_x.length; ++i){
    var div_x = d_x[i] - ave_d_x;
    var div_y = d_y[i] - ave_d_y;
    sum = sum + div_x * div_y;
  }
  var cov = sum / d_x.length;
  console.log(cov);
  return cov/ (Stdiv_csv(d_x) * Stdiv_csv(d_y));
}

function Mode_csv(d){
  var counter = {}
  var maxValue = null
  var maxCounter = 0;
  for (var i=0;i < d.length;i++){
    if (!counter[d[i]]){
      counter[d[i]] = 0
    }
    counter[d[i]]++;
 
    for (var j=0;j<Object.keys(counter).length;j++){
      console.log("aaaa")
      key = Object.keys(counter)[j];
      console.log("bbbb")
      if (counter[key] > maxCounter){
        maxValue = key
        maxCounter = counter[key]
      }
    }
  }
}