Blockly.defineBlocksWithJsonArray([
    {
        "type": "def_name",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "def_name",
            "text": "def_name"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "def_condition",
        "message0": "条件 %1 %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "def_condition",
            "text": "def_condition"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "def_expression",
        "message0": "条件式 %1 %2 %3 %4",
        "args0": [
          {
            "type": "input_value",
            "name": "left"
          },
          {
            "type": "field_dropdown",
            "name": "operation",
            "options": [
              [
                "=",
                "=="
              ],
              [
                "!=",
                "!="
              ],
              [
                "<",
                "<"
              ],
              [
                "≦",
                "<="
              ],
              [
                ">",
                ">"
              ],
              [
                "≧",
                ">="
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "right"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "def_comb",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "comb",
            "options": [
              [
                "And",
                "&&"
              ],
              [
                "Or",
                "||"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "def_column",
        "message0": "column %1 列目",
        "args0": [
          {
            "type": "field_input",
            "name": "col_num",
            "text": "1"
          }
        ],
        "output": "Number",
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      }
])