startZoom =1
startViewportTransform_4 =0
startViewportTransform_5 =0

/*
------Parameter-------
nSektorzeilenVonRing: 3
nSektorspaltenVonRing: 12
nSektorzeilenVonRingSchwarzschild: 3
nSektorzeilenVonRingEuklid: 4
schwarzschildradius: 60
dradius: 1.25 * 60
startZoom =1
startViewportTransform_4 =0
startViewportTransform_5 =0
fontSize: 15
startGeodesicsSectors: [29, 29]
startGeodesicsAngle: [-70, -120]
startGeodesicsOffset_x: [0.5, 0.5]
startGeodesicsOffset_y: [0.7, 0.7]
startGeodesicsLength: [50, 50]
startGeodesicsOperational: ['true']
startMarksSectors: [14, 11]
startMarksRadius: [5, 5]
startMarksOffset_x: [0.22, 0.9]
startMarksOffset_y: [0.99, 0.99]
startTextsSectors: []
startTextContent: []
startTextsOffset_x: []
startTextsOffset_y: []
----------------------
*/

let line_colors = [ 'black', 'blue', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];
let mark_colors = ['grey', 'grey', 'grey'];
let lineStrokeWidthWhenNotSelected = 2
let lineStrokeWidthWhenSelected =5
sec_name= [ 'A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3', 'A4', 'B4', 'C4', 'A5', 'B5', 'C5', 'A6', 'B6', 'C6', 'A7', 'B7', 'C7', 'A8', 'B8', 'C8', 'A9', 'B9', 'C9', 'A10', 'B10', 'C10', 'A11', 'B11', 'C11', 'A12', 'B12', 'C12', ];
sec_fill= [ 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', ];
sec_ID= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, ];
sec_type= [ 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', 'euklid', ];
sec_fontSize= [ 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, ];
sec_top= [ 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, ];
sec_bottom= [ 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, 39.26990816987241, 78.53981633974482, 117.80972450961724, ];
sec_height= [ 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, 114.00031849347428, 89.2202301350109, 83.21327861436322, ];
sec_width= [ 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, 78.53981633974482, 117.80972450961724, 157.07963267948963, ];
sec_offset= [ 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, ];
sec_coords= [ [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.2202301350109, 19.63495408493621, 89.2202301350109], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], ];
sec_neighbour_top= [ 1, 2, -1, 4, 5, -1, 7, 8, -1, 10, 11, -1, 13, 14, -1, 16, 17, -1, 19, 20, -1, 22, 23, -1, 25, 26, -1, 28, 29, -1, 31, 32, -1, 34, 35, -1, ];
sec_neighbour_right= [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 1, 2, ];
sec_neighbour_bottom= [ -1, 0, 1, -1, 3, 4, -1, 6, 7, -1, 9, 10, -1, 12, 13, -1, 15, 16, -1, 18, 19, -1, 21, 22, -1, 24, 25, -1, 27, 28, -1, 30, 31, -1, 33, 34, ];
sec_neighbour_left= [ 33, 34, 35, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, ];
sec_posx= [ 0.0, 0.0, 0.0, 81.00007962336856, 141.80521678048984, 194.91359396783338, 140.2962533247989, 245.61384024212717, 337.6002478381381, 162.00015924673716, 283.61043356097974, 389.8271879356668, 140.29625332479893, 245.6138402421272, 337.6002478381381, 81.00007962336863, 141.80521678048996, 194.91359396783355, 1.9839297648287814e-14, 3.473226096652469e-14, 4.774006179260281e-14, -81.00007962336853, -141.8052167804898, -194.9135939678333, -140.29625332479887, -245.6138402421271, -337.600247838138, -162.00015924673716, -283.61043356097974, -389.8271879356668, -140.29625332479898, -245.6138402421273, -337.6002478381383, -81.00007962336865, -141.80521678048999, -194.91359396783358, ];
sec_posy= [ -162.00015924673716, -283.61043356097974, -389.8271879356668, -140.29625332479893, -245.6138402421272, -337.6002478381381, -81.00007962336859, -141.8052167804899, -194.91359396783346, -9.919648824143907e-15, -1.7366130483262346e-14, -2.3870030896301404e-14, 81.00007962336853, 141.80521678048981, 194.91359396783332, 140.29625332479887, 245.61384024212714, 337.60024783813805, 162.00015924673716, 283.61043356097974, 389.8271879356668, 140.29625332479893, 245.61384024212725, 337.60024783813816, 81.00007962336865, 141.80521678048999, 194.91359396783358, 2.9758946472431723e-14, 5.209839144978704e-14, 7.161009268890421e-14, -81.00007962336846, -141.80521678048967, -194.91359396783315, -140.29625332479887, -245.6138402421271, -337.600247838138, ];
sec_angle= [ 0.0, 0.0, 0.0, 29.999999999999996, 29.999999999999996, 29.999999999999996, 59.99999999999999, 59.99999999999999, 59.99999999999999, 90.0, 90.0, 90.0, 119.99999999999999, 119.99999999999999, 119.99999999999999, 149.99999999999997, 149.99999999999997, 149.99999999999997, 180.0, 180.0, 180.0, 209.99999999999997, 209.99999999999997, 209.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 270.0, 270.0, 270.0, 299.99999999999994, 299.99999999999994, 299.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, ];
startSectors= [ 29, 29, ];
x_Start= [ -406.46984365853945, -406.46984365853945, ];
y_Start= [ 1.3151071780876133e-13, 1.3151071780876133e-13, ];
x_End= [ -359.48521261924407, -363.1685734693175, ];
y_End= [ -17.101007166283345, 25.000000000000124, ];
startStrokeWidth= [ 2, 2, ];
startFill= [ line_colors[0], line_colors[1], ];
startStroke= [ line_colors[0], line_colors[1], ];
startParentSector= [ [29,0], [29,1], ];
startLineID= [ [0,1], [1,1], ];
markStart_x= [ 394.9031548872598, 430.60169445670476, ];
markStart_y= [ 177.21106057943373, 62.8318530717958, ];
markStartStrokeWidth= [ 2, 2, ];
markStartRadius= [ 5, 5, ];
markStartFill= [ mark_colors[0], mark_colors[1], ];
markStartStroke= [ mark_colors[0], mark_colors[1], ];
markStartParentSector= [ [14,0], [11,0], ];
markStartID= [ [0,1], [1,1], ];
textStart_x= [ ];
textStart_y= [ ];
textStartContent= [ ];
textStartFontSize= [ ];
textStartParentSector= [ ];
textStartID= [ ];
textStartAngle= [ ];
