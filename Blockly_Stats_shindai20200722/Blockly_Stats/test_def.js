var datas = [];
var labels = [];
var titles = [];
var defs = [];

var datas_extracted = [];

//var data = [];
var data_r = [];
var plotDatas = [];
const transpose = a => a[0].map((_, c) => a.map(r => r[c]));
var tabIDNum = 0;

////////////// Blockly //////////////
var demoWorkspace = Blockly.inject('blocklyDiv',
  {
    media: 'blockly/media/',
    toolbox: document.getElementById('toolbox')
  });
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
  demoWorkspace);

function showCode()
{
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  alert(code);
  console.log(code);
}

function runCode()
{
  console.log("run code");
  console.log(datas);
  console.log(defs);
  plotDatas = [];
  MakeDatas_extracted();
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
  //hoge();
}

////////////// Plotly //////////////

var d3 = Plotly.d3;
var img_jpg = d3.select('#jpg-export');

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1];
var layout = {
  title: 'Stats Graph',
  xaxis: {
    title: 'X AXIS',
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'grey'
    }
  },
  yaxis: {
    title: 'Y AXIS',
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'grey'
    }
  },

  height: 500,
  
};

//Plotly.newPlot('graph', data, layout);
Plotly.newPlot('graph', data, layout);


////////////// タブ制御 //////////////
(function ($)
{
  'use strict';
  $('#tabs').on('click', ' #tab-add', function (e)
  { //< タブ追加ボタンクリック

    //ファイル選択を開くために input type='file'を発火させている。
    //ファイル選択後の動作は $('#fileselect').on("change", function ()　に書いてある。
    $('#fileselect').trigger('click');

  }).on('click', ' li a .close', function ()
  { //< 閉じるボタンクリック
    var tabLi = $(this).parents('li');
    var tabId = tabLi.children('a').attr('href');
    if (tabLi.hasClass('active')) {
      if (tabLi.next().attr('id') === 'tab-add') {
        tabLi.prev().children('a').tab('show');
      } else {
        tabLi.next().children('a').tab('show');
      }
    }
    // タブ削除
    tabLi.remove('li');
    $(tabId).remove();

  }).on('shown.bs.tab', ' a[data-toggle="tab"]', function (e)
  { //< タブ切り替えイベント
    // 以前のアクティブタブの閉じるボタンを削除
    $(e.relatedTarget).children('.close').remove();
    // アクティブタブに閉じるボタンを付与
    $(e.target).append(
      '<button type="button" class="close" aria-label="Close" title="タブを閉じる" style="font-size:20px">'
      + '<span aria-hidden="true">&#215;</span><span class="sr-only">タブを閉じる</span>'
      + '</button>'
    );
    $('td').click(function ()
    {
      //classでonを持っているかチェック
      if (!$(this).hasClass('on')) {
        //編集可能時はclassでonをつける
        $(this).addClass('on');
        var txt = $(this).text();
        //テキストをinputのvalueに入れてで置き換え
        $(this).html('<input type="text" value="' + txt + '" />');
        //同時にinputにフォーカスをする
        $('td > input').focus().blur(function ()
        {
          var inputVal = $(this).val();
          //編集が終わったらtextで置き換える
          $(this).parent().removeClass('on').text(inputVal);
        });
      }
    });

  });

  //タブ追加ボタンを押した後の動作。 
  //'tabs'クリック → 'fileselect'イベント発火 → ファイル選択 を経由して発火するので注意
  $('#fileselect').on("change", function ()
  {
    var file = this.files[0];
    if (file != null) {
      //タブボタンの生成
      $('#tab-add').before(
        '<li><a style="display:inline-block;" href="#tab' + tabIDNum + '" role="tab" data-toggle="tab">'
        + tabIDNum + "："+ file.name.replace(/\.[^/.]+$/, "") + '&nbsp;</a></li>'
      );
      //ファイルの読み込みと表の生成
      titles.push(file.name.replace(/\.[^/.]+$/, ""));

      console.log(file.name);
      ReadCSVFile(file);

    }
  })
})(jQuery);


function ReadCSVFile(file)
{
  var reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function (ev)
  {
    var csv01 = convertCSVtoArray(reader.result);
    var label = csv01[0];
    labels.push(csv01[0]);
    data = str2intArray(csv01);
    data_r = transpose(data);
    datas.push(data_r);
    ary_def = MakeDefs(data_r[0]);
    defs.push(ary_def);
    console.log(defs);
    /////////////////////////////////////////////////////////////////////////////////////
    //本当は、非同期ではなく、ファイル読み込みを待って、  $('#fileselect').on("change", function ()内で処理したい
    var tableinTab = array2table(data, label);
    //console.log(tableinTab);
    $('#tab-add-content').before('<div class="tab-pane" id="tab' + tabIDNum +
      '">' + tableinTab + '</div>');
    $('#tabs li:nth-last-child(2) a').tab('show');
    tabIDNum += 1;
    /////////////////////////////////////////////////////////////////////////////////////

  }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str)
{ // 読み込んだCSVデータが文字列として渡される
  var result = []; // 最終的な二次元配列を入れるための配列
  var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
  // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
  for (var i = 0; i < tmp.length; ++i) {
    result[i] = tmp[i].split(',');
  }
  result.pop();
  return result;
}

function str2intArray(arry)
{
  var result = [];
  for (var i = 1; i < arry.length; ++i) {
    var tmp = [];
    for (var j = 0; j < arry[i].length; ++j) {
      if (isNaN(arry[i][j])) {
        tmp[j] = arry[i][j];
      } else {
        tmp[j] = Number(arry[i][j]);
      }
    }
    result[i - 1] = tmp;
  }
  return result;
}


//配列をhtmlのテーブル形式の文字列にして返す
function array2table(ary, label)
{
  waku = '<table class="table"> <tbody>';
  waku += "<thread><tr>";
  for(i=0; i < label.length; i++){
    waku += "<td>" + i + "</td>";
  }
  waku += "</tr><tr>";
  for(i = 0; i< label.length; i++) {
    waku += "<td>" + label[i] + "</td>";
  }
  waku += "</tr></thread>";

  for (i = 0; i < ary.length; i++) {
    waku += "<tr>";
    for (j = 0; j < ary[i].length; j++) {
      waku = waku + "<td>" + ary[i][j] + "</td>";
    }
    waku += "</tr>"
  }
  waku += " </tbody> </table>";
  return waku;
}

function MakeDefs(ary){
  console.log(ary);
  var ary_def =[];
  for(i=0; i<ary.length; i++){
    ary_def.push(1);
  }
  return ary_def;
}

function MakeDatas_extracted(){
  datas_extracted = [];
  for(i=0; i<datas.length; i++){
    var datas_extracted_sheet =[];
      for(j=0; j<datas[i].length; j++){
        var datas_extracted_col =[];
        for(k=0; k<datas[i][j].length; k++){
          if(defs[i][k] === 1){
            datas_extracted_col.push(datas[i][j][k]);
          }
        }
        datas_extracted_sheet.push(datas_extracted_col);
      }
      datas_extracted.push(datas_extracted_sheet);
    }
    console.log(datas_extracted);
}



function save1(){
  var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
  var xml_text = Blockly.Xml.domToText(xml);
  localStorage.setItem("blockly-html-code", xml_text);
}

function load1(){
  var xml_text = localStorage.getItem("blockly-html-code");
  if (xml_text) {
    var xml = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, demoWorkspace);
  }
}
//テーブルサイズをマウスで帰られそう
//https://www.tetsuyanbo.net/tetsuyanblog/7291
//https://www.froala.com/wysiwyg-editor/examples/resize-table