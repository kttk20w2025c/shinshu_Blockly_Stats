Blockly.defineBlocksWithJsonArray([
  {
    "type": "graph_set",
    "message0": "グラフ設定 %1 %2 %3 X %4 Y %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "graphType",
        "options": [
          [
            "折れ線グラフ",
            "graph_line"
          ],
          [
            "散布図",
            "graph_scatter"
          ],
          [
            "棒グラフ",
            "graph_bar"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x_input",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "y_input",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  /*{
    "type": "histogram",
    "lastDummyAlign0": "RIGHT",
    "message0": "ヒストグラム %1 データ %2 階級の幅 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "hist_data",
        "align": "RIGHT"
      },
      {
        "type": "field_number",
        "name": "hist_class",
        "value": 2
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },*/
  {
    "type": "histogram",
	"message0": "ヒストグラム %1 データ %2 階級の幅 %3 %4 下限 %5 上限 %6",
	"args0": [
	  {
	    "type": "input_dummy"
	  },
	  {
	    "type": "input_value",
	    "name": "hist_data",
	    "align": "RIGHT"
	  },
	  {
	    "type": "field_number",
	    "name": "hist_class",
	    "value": 2
	  },
	  {
	    "type": "input_dummy"
	  },
	  {
	      "type": "input_value",
	      "name": "hist_low"
	    },
	    {
	      "type": "input_value",
	      "name": "hist_high"
	    }
	],
	"inputsInline": false,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "",
	"helpUrl": ""
  },
  {
    "type": "scatter_r",
    "message0": "散布図 %1 X %2 Y %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "x_input",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "y_input",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hist_dropdown",
    "message0": "グラフ設定 %1 %2 %3 データ %4 階級の幅 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "a1",
        "options": [
          [
            "折れ線グラフ",
            "a2"
          ],
          [
            "ヒストグラム",
            "a3"
          ],
          [
            "option",
            "a4"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "s1",
        "align": "RIGHT"
      },
      {
        "type": "field_number",
        "name": "d1",
        "value": 0
      },
      {
        "type": "input_value",
        "name": "s2",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "graph_circle",
    "message0": "円グラフ %1 項目名 %2 数値 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "label",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "val",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": "http://www.example.com/"
  }, {
    "type": "graph_box",
    "message0": "箱ひげ図 %1 値 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "val",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": "http://www.example.com/"
  },
  {
    "type": "graph_plot",
    "message0": "グラフ描写",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "downloadgraph",
    "message0": "グラフ保存：ファイル名 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "filename",
        "text": "新しいグラフ"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "downloadgraph_2",
    "message0": "グラフ保存：ファイル名 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "char_marge",
    "message0": "文字連結 %1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "char1"
      },
      {
        "type": "input_value",
        "name": "char2"
      },
      {
        "type": "input_value",
        "name": "char3"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
])
