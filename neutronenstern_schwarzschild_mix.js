let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];
let mark_colors = ['grey', 'green', 'green', 'grey', 'grey'];
sec_name= [ 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'K4', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5', 'K5', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6', 'K6', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7', 'K7', 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'K8', 'A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9', 'K9', 'A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10', 'K10', 'A11', 'B11', 'C11', 'D11', 'E11', 'F11', 'G11', 'H11', 'I11', 'J11', 'K11', 'A12', 'B12', 'C12', 'D12', 'E12', 'F12', 'G12', 'H12', 'I12', 'J12', 'K12', ];
sec_ID= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, ];
sec_fill= [ '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', ];
sec_fontSize= [ 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, ];
sec_top= [ 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, ];
sec_bottom= [ 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, ];
sec_height= [ 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, ];
sec_width= [ 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, ];
sec_offset= [ 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, ];
sec_neighbour_top= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, -1, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, -1, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, -1, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, -1, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, -1, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, -1, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, -1, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, -1, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, -1, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, -1, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, -1, ];
sec_neighbour_right= [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
sec_neighbour_bottom= [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -1, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, -1, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, -1, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, -1, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, -1, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, -1, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, -1, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, -1, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, -1, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, ];
sec_neighbour_left= [ 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, ];
sec_posx= [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 16.622282356014747, 45.1247654420936, 74.45186368293957, 114.13283030111786, 159.09692560907243, 197.77542600224476, 233.70234567736742, 268.0458121857039, 301.3519174259134, 333.92320341800365, 365.94571004112555, 28.790637578373246, 78.15838642533438, 128.95441061704346, 197.68386089317283, 275.56395848291953, 342.5570863244668, 404.7843365612252, 464.2689654617041, 521.9568319399831, 578.3719541461397, 633.8365626030978, 33.2445647120295, 90.24953088418721, 148.90372736587918, 228.26566060223576, 318.1938512181449, 395.55085200448957, 467.4046913547349, 536.0916243714079, 602.703834851827, 667.8464068360074, 731.8914200822512, 28.79063757837325, 78.1583864253344, 128.9544106170435, 197.68386089317286, 275.5639584829196, 342.5570863244668, 404.78433656122525, 464.26896546170417, 521.9568319399831, 578.3719541461398, 633.8365626030978, 16.62228235601476, 45.12476544209363, 74.45186368293963, 114.13283030111795, 159.09692560907257, 197.77542600224493, 233.7023456773676, 268.0458121857041, 301.3519174259137, 333.92320341800394, 365.94571004112584, 4.071284976363398e-15, 1.1052379912187006e-14, 1.8235447309973407e-14, 2.795448106117841e-14, 3.8967508140267033e-14, 4.844100848073066e-14, 5.724056591740326e-14, 6.565228918361499e-14, 7.380993221851249e-14, 8.178759644537775e-14, 8.963084849271398e-14, -16.62228235601474, -45.124765442093576, -74.45186368293955, -114.13283030111782, -159.09692560907237, -197.77542600224467, -233.7023456773673, -268.04581218570377, -301.3519174259133, -333.92320341800354, -365.9457100411254, -28.79063757837324, -78.15838642533437, -128.95441061704344, -197.68386089317278, -275.5639584829195, -342.5570863244667, -404.7843365612251, -464.26896546170394, -521.9568319399829, -578.3719541461396, -633.8365626030976, -33.2445647120295, -90.24953088418721, -148.90372736587918, -228.26566060223576, -318.1938512181449, -395.55085200448957, -467.4046913547349, -536.0916243714079, -602.703834851827, -667.8464068360074, -731.8914200822512, -28.79063757837326, -78.15838642533443, -128.95441061704355, -197.68386089317295, -275.56395848291965, -342.557086324467, -404.7843365612254, -464.26896546170434, -521.9568319399833, -578.3719541461401, -633.8365626030981, -16.622282356014765, -45.12476544209365, -74.45186368293966, -114.13283030111798, -159.0969256090726, -197.77542600224496, -233.70234567736765, -268.04581218570416, -301.35191742591377, -333.923203418004, -365.94571004112595, ];
sec_posy= [ -33.2445647120295, -90.24953088418721, -148.90372736587918, -228.26566060223576, -318.1938512181449, -395.55085200448957, -467.4046913547349, -536.0916243714079, -602.703834851827, -667.8464068360074, -731.8914200822512, -28.79063757837325, -78.1583864253344, -128.9544106170435, -197.68386089317286, -275.5639584829196, -342.5570863244668, -404.78433656122525, -464.26896546170417, -521.9568319399831, -578.3719541461398, -633.8365626030978, -16.622282356014754, -45.12476544209361, -74.4518636829396, -114.1328303011179, -159.09692560907249, -197.77542600224484, -233.7023456773675, -268.045812185704, -301.35191742591354, -333.92320341800377, -365.94571004112566, -2.035642488181699e-15, -5.526189956093503e-15, -9.117723654986703e-15, -1.3977240530589206e-14, -1.9483754070133517e-14, -2.422050424036533e-14, -2.862028295870163e-14, -3.2826144591807494e-14, -3.6904966109256246e-14, -4.089379822268888e-14, -4.481542424635699e-14, 16.622282356014743, 45.12476544209358, 74.45186368293956, 114.13283030111782, 159.0969256090724, 197.7754260022447, 233.70234567736733, 268.0458121857038, 301.35191742591337, 333.92320341800354, 365.94571004112544, 28.790637578373243, 78.15838642533438, 128.95441061704346, 197.6838608931728, 275.5639584829195, 342.55708632446675, 404.78433656122513, 464.26896546170406, 521.956831939983, 578.3719541461397, 633.8365626030977, 33.2445647120295, 90.24953088418721, 148.90372736587918, 228.26566060223576, 318.1938512181449, 395.55085200448957, 467.4046913547349, 536.0916243714079, 602.703834851827, 667.8464068360074, 731.8914200822512, 28.790637578373254, 78.15838642533441, 128.95441061704352, 197.6838608931729, 275.5639584829196, 342.55708632446687, 404.7843365612253, 464.2689654617042, 521.9568319399832, 578.37195414614, 633.836562603098, 16.622282356014765, 45.12476544209365, 74.45186368293966, 114.13283030111798, 159.0969256090726, 197.77542600224496, 233.70234567736765, 268.04581218570416, 301.35191742591377, 333.923203418004, 365.94571004112595, 6.106927464545096e-15, 1.6578569868280508e-14, 2.735317096496011e-14, 4.1931721591767615e-14, 5.845126221040054e-14, 7.266151272109598e-14, 8.586084887610489e-14, 9.847843377542248e-14, 1.1071489832776872e-13, 1.2268139466806661e-13, 1.3444627273907097e-13, -16.62228235601473, -45.12476544209355, -74.45186368293949, -114.13283030111772, -159.09692560907226, -197.77542600224453, -233.70234567736713, -268.0458121857036, -301.3519174259131, -333.92320341800325, -365.9457100411251, -28.79063757837324, -78.15838642533437, -128.95441061704344, -197.68386089317278, -275.5639584829195, -342.5570863244667, -404.7843365612251, -464.26896546170394, -521.9568319399829, -578.3719541461396, -633.8365626030976, ];
sec_angle= [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, ];
x_Start= [ 0.0, ];
y_Start= [ -183.79752238744294, ];
x_End= [ 40.02132439331355, ];
y_End= [ -228.26566060223576, ];
startStrokeWidth= [ 2, ];
startFill= [ line_colors[0], ];
startStroke= [ line_colors[0], ];
startParentSector= [ [3,0], ];
startLineID= [ [0,1], ];
markStart_x= [ 0.0, -178.42859221666885, -232.34334451088034, ];
markStart_y= [ -183.79752338744294, -103.01579674741951, -134.14349349777447, ];
markStartStrokeWidth= [ 2, 2, 2, ];
markStartRadius= [ 3, 3, 3, ];
markStartFill= [ mark_colors[0], mark_colors[1], mark_colors[2], ];
markStartStroke= [ mark_colors[0], mark_colors[1], mark_colors[2], ];
markStartParentSector= [ [3,0], [113,0], [113,1], ];
markStartID= [ [0], [1], [2], ];
textStart_x= [ -178.42859221666885, -232.34334451088034, ];
textStart_y= [ -88.01579674741951, -119.14349349777447, ];
textStartContent= [ 'P1', 'P2', ];
textStartFontSize= [ 15, 15, ];
textStartParentSector= [ [113,0], [113,1], ];
textStartID= [ [0], [1], ];
textStartAngle= [ 0, 0, ];
startSector =3;