Blockly.defineBlocksWithJsonArray([{
  "type": "range_parent",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "tag",
      "text": "TagName"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "condition"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "range_condition",
  "message0": "条件 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "range_condition"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "andor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "andor",
      "options": [
        [
          "And",
          "and"
        ],
        [
          "Or",
          "or"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "num_in_list",
  "message0": "%1 番目 in list %2",
  "args0": [
    {
      "type": "field_number",
      "name": "num",
      "value": 0,
      "min": 0
    },
    {
      "type": "input_value",
      "name": "num"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "range_beforeafter",
  "message0": "%1 列目 %2 %3 行目 %4",
  "args0": [
    {
      "type": "field_number",
      "name": "colNum",
      "value": 0,
      "min": 0
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "rowNum",
      "value": 0,
      "min": 0
    },
    {
      "type": "field_dropdown",
      "name": "before_after",
      "options": [
        [
          "より前",
          "before"
        ],
        [
          "以前",
          "before_equal"
        ],
        [
          "以降",
          "after_equal"
        ],
        [
          "より後",
          "after"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "range_beforeafter2",
  "message0": "列目 %1 行目 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "col"
    },
    {
      "type": "field_dropdown",
      "name": "before_after",
      "options": [
        [
          "より前",
          "before"
        ],
        [
          "以前",
          "before_equal"
        ],
        [
          "以降",
          "after_equal"
        ],
        [
          "より後",
          "after"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "row"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]
)
