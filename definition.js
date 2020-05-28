
Blockly.Blocks['block_plant_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_plant_sensor",
        "message0": "đọc độ ẩm đất (%%) %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P3",
                "pin2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": "#07840e",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_plant_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(('+dropdown_name+'.read_analog()/4 -1)/10.23)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['block_plant_motor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_plant_motor",
        "message0": "%1 bật máy bơm nước %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "onoff",
            "options": [
              [
                "bật",
                "1"
              ],
              [
                "tắt",
                "0"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "pin0",
                "pin0"
              ],
              [
                "pin1",
                "pin1"
              ],
              [
                "pin2",
                "pin2"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#07840e",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_plant_motor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_onoff = block.getFieldValue('onoff');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name+'.write_digital(('+dropdown_onoff+'))\n';
  return code;
};

Blockly.Blocks['block_plant_motor_timer'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_plant_motor_timer",
        "message0": "bật máy bơm nước %1 %2 giây",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "pin0",
                "pin0"
              ],
              [
                "pin1",
                "pin1"
              ],
              [
                "pin2",
                "pin2"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "timer",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#07840e",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_plant_motor_timer'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var dropdown_name = block.getFieldValue('NAME');
  var value_timer = Blockly.Python.valueToCode(block, 'timer', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_name+'.write_digital((1))\n';
  code += 'time.sleep_ms('+value_timer*1000+')\n';
  code += dropdown_name+'.write_digital((0))\n';
  return code;
};
