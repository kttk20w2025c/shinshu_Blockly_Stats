Blockly.defineBlocksWithJsonArray([
  {
    "type": "column",
    "message0": "column %1 列目",
    "args0": [
      {
        "type": "field_input",
        "name": "col_num",
        "text": "1"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_col",
    "message0": "表 %1 %2 番の %3 列目",
    "args0": [
      {
        "type": "field_number",
        "name": "sheetNum",
        "value": 0,
        "min": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "colNum",
        "value": 0,
        "min": 0
      },
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_col_2",
    "message0": "表 %1 番の %2 列目",
    "args0": [
      {
        "type": "input_value",
        "name": "sheetNum"
      },
      {
        "type": "input_value",
        "name": "colNum"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "averave_column",
    "message0": "平均値 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "max_column",
    "message0": "最大値 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "min_column",
    "message0": "最小値 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mean_column",
    "message0": "中央値 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mode_column",
    "message0": "最頻値 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "variance_column",
    "message0": "分散 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "stdev_column",
    "message0": "標準偏差 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "column"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "r_column",
    "message0": "相関係数 %1 x %2 y %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "column_x",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "column_y",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "col_calc",
    "message0": "%1 + %2",
    "args0": [
      {
        "type": "input_value",
        "name": "col1"
      },
      {
        "type": "input_value",
        "name": "col2"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }

])
