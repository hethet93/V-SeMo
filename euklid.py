import io
import math

nSektorzeilenVonRing = 40
nSektorspaltenVonRing = 12

schwarzschildradius = 0
dradius = 100

fontSize = 15


# startGeodesicsAngle ist das entscheidende Array für den Startwinkel und die Anzahl der Startgeodäten
# versatz_x versetzt die Geodäten in der x-Richtung vom Mittelpunkt des Sektors weg
# versatz_y liegt zwischen -1 und 1 und sorgt bei gleichen Winkel für parallele Geodäten

versatz_x = +1
versatz_y = 0.3
versatz_x_var = 0.0
versatz_y_var = 0.0

#WICHTIG: startGeodesicsAngle benötigt genauso viele Einträge wie startGeodesicsSectors

startGeodesicsAngle = [90]

startGeodesicsSectors = [399]

startMarksSectors = []
startMarkRadius = [3]
mark_dist_from_mid_x = [0]
mark_dist_from_mid_y = [0]

startTextsSectors = []
startTextContent = []
text_dist_from_mid_y = []


def main():

    dphi = (2*math.pi/nSektorspaltenVonRing)


    sector_y_dist = 0.0



    file = io.open("euklid.js",'w')

    file.write( "/*" +"\n"
                "------Parameter-------" +"\n"
                "nSektorzeilenVonRing: " + str(nSektorzeilenVonRing) +"\n"
                "nSektorspaltenVonRing: " + str(nSektorspaltenVonRing) +"\n"
                "schwarzschildradius: " + str(schwarzschildradius) +"\n"
                "dradius: " + str(dradius) + "\n"
                "fontSize: " + str(fontSize) + "\n"                                                        
                "versatz_x: " + str(versatz_x) +"\n"
                "versatz_y: " + str(versatz_y) + "\n"
                "versatz_x_var: " + str(versatz_x_var) + "\n"
                "versatz_y_var: " + str(versatz_y_var) + "\n"
                "startGeodesicsAngle: " + str(startGeodesicsAngle) + "\n"
                "startGeodesicsSectors: " + str(startGeodesicsSectors) + "\n"
                "startMarksSectors: " + str(startMarksSectors) + "\n"
                "startMarkRadius: " + str(startMarkRadius) + "\n"
                "startTextsSectors: " + str(startTextsSectors) + "\n"
                "startTextContent: " + str(startTextContent) + "\n"
                "text_dist_from_mid_y: " + str(text_dist_from_mid_y) + "\n"
                "----------------------"
                + "\n"
                  "*/"
                )

    file.write("\n")
    file.write("\n")
    file.write(
        "let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];")
    file.write("\n")
    file.write(
        "let mark_colors = ['grey'];")
    file.write("\n")

    variablenamesSectors = ["sec_name", "sec_ID", "sec_type", "sec_fill", "sec_fontSize", "sec_top","sec_bottom", "sec_height", "sec_width", "sec_offset", "sec_neighbour_top", "sec_neighbour_right", "sec_neighbour_bottom", "sec_neighbour_left", "sec_posx","sec_posy","sec_angle"  ]
    sectorDict = dict(zip(variablenamesSectors,range(len(variablenamesSectors))))
    anzahlDerSektoren = nSektorzeilenVonRing * nSektorspaltenVonRing

    sectorValues = [[[] for ii in range(anzahlDerSektoren)] for jj in range(len(variablenamesSectors))]



    for ringspalte in range(0, nSektorspaltenVonRing):
        for ringzeile in range(0, nSektorzeilenVonRing):
            offset = dradius * math.sin(dphi * 0.5)
            rad1 = (ringzeile + 1) * dradius
            rad2 = (ringzeile + 2) * dradius
            #radial = math.sqrt(rad2 * (rad2 - schwarzschildradius)) + schwarzschildradius * math.log(math.sqrt(rad2 - schwarzschildradius) + math.sqrt(rad2)) - (math.sqrt(rad1 * (rad1 - schwarzschildradius)) + schwarzschildradius * math.log(math.sqrt(rad1 - schwarzschildradius) + math.sqrt(rad1)))
            radial = dradius
            sector_height = math.sqrt(math.pow(radial, 2) - math.pow(offset, 2))


            if (ringzeile != 0):
                sector_y_dist = sector_height / 2 + sectorValues[sectorDict["sec_height"]][ringzeile-1] / 2 + sector_y_dist +30
            else:
                sector_y_dist = dradius + sector_height/2 +30

            sectorValues[sectorDict["sec_name"]][ringzeile + ringspalte * nSektorzeilenVonRing] = "'%c%d'" % (chr(ringzeile + 97).upper(),(ringspalte+1))
            sectorValues[sectorDict["sec_ID"]][ringzeile + ringspalte * nSektorzeilenVonRing] = ringzeile + ringspalte * (nSektorzeilenVonRing)
            sectorValues[sectorDict["sec_type"]][ringzeile + ringspalte * nSektorzeilenVonRing] = "'euklid'"
            sectorValues[sectorDict["sec_fill"]][ringzeile + ringspalte * nSektorzeilenVonRing] = "'white'"
            sectorValues[sectorDict["sec_fontSize"]][ringzeile + ringspalte * nSektorzeilenVonRing] = fontSize
            sectorValues[sectorDict["sec_top"]][ringzeile + ringspalte * nSektorzeilenVonRing] = 2 * rad2 * math.sin(dphi / 2)
            sectorValues[sectorDict["sec_bottom"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = 2 * rad1 * math.sin(dphi / 2)

            print('top '+ str(2 * (dradius * (ringzeile + 2)) * math.sin(dphi / 2)))
            print('bottom '+ str(2 * (dradius * (ringzeile + 1)) * math.sin(dphi / 2)))



            sector_width = sectorValues[sectorDict["sec_top"]][ringzeile + ringspalte * (nSektorzeilenVonRing)]


            sectorValues[sectorDict["sec_height"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = sector_height
            sectorValues[sectorDict["sec_width"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = sector_width
            sectorValues[sectorDict["sec_offset"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = offset
            sectorValues[sectorDict["sec_posx"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = math.sin(ringspalte * dphi) * ( sector_y_dist)
            sectorValues[sectorDict["sec_posy"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = - math.cos(ringspalte * dphi) * ( sector_y_dist)
            sectorValues[sectorDict["sec_angle"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = ringspalte * dphi *180/math.pi
            sectorValues[sectorDict["sec_neighbour_top"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = -1
            sectorValues[sectorDict["sec_neighbour_right"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = -1
            sectorValues[sectorDict["sec_neighbour_bottom"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = -1
            sectorValues[sectorDict["sec_neighbour_left"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = -1

            if (ringzeile == (nSektorzeilenVonRing - 1)):
                sectorValues[sectorDict["sec_neighbour_top"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = -1
            else:
                sectorValues[sectorDict["sec_neighbour_top"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = ringzeile + ringspalte * (nSektorzeilenVonRing) + 1

            if (ringspalte == (nSektorspaltenVonRing - 1)):
                sectorValues[sectorDict["sec_neighbour_right"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = ringzeile
            else:
                sectorValues[sectorDict["sec_neighbour_right"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = ringzeile + ringspalte * (nSektorzeilenVonRing) + nSektorzeilenVonRing

            if (ringzeile == 0):
                sectorValues[sectorDict["sec_neighbour_bottom"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = -1
            else:
                sectorValues[sectorDict["sec_neighbour_bottom"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = ringzeile + ringspalte * (nSektorzeilenVonRing) -1

            if (ringspalte == 0):
                sectorValues[sectorDict["sec_neighbour_left"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = nSektorspaltenVonRing * nSektorzeilenVonRing - nSektorzeilenVonRing + ringzeile
            else:
                sectorValues[sectorDict["sec_neighbour_left"]][ringzeile + ringspalte * (nSektorzeilenVonRing)] = ringzeile + ringspalte * (nSektorzeilenVonRing) - nSektorzeilenVonRing








    for ii in range(0,len(variablenamesSectors)):
        file.write(variablenamesSectors[ii]+"= [ ")
        for jj in range(0,anzahlDerSektoren):
            file.write(str( sectorValues[ii][jj])+', ')
        file.write("];\n")



    variablenamesGeodesics = ["startSectors", "x_Start", "y_Start", "x_End", "y_End", "startStrokeWidth", "startFill", "startStroke", "startParentSector", "startLineID"]
    geodesicDict = dict(zip(variablenamesGeodesics, range(len(variablenamesGeodesics))))

    geodesicValues = [[[] for ii in range(len(startGeodesicsAngle))] for jj in range(len(variablenamesGeodesics))]

    for startGeodesic in range(0, len(startGeodesicsAngle)):

        lengthStartGeodesics = 0.45 * sectorValues[sectorDict["sec_height"]][startGeodesicsSectors[startGeodesic]]

        deltaXStart = - versatz_x_var * sectorValues[sectorDict["sec_height"]][startGeodesicsSectors[startGeodesic]] / 2
        deltaYStart = - versatz_y_var * sectorValues[sectorDict["sec_width"]][startGeodesicsSectors[startGeodesic]] / 2

        geodesicValues[geodesicDict["startSectors"]][startGeodesic] = startGeodesicsSectors[startGeodesic]
        geodesicValues[geodesicDict["x_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posx"]][startGeodesicsSectors[startGeodesic]] + deltaXStart * startGeodesic - versatz_x * sectorValues[sectorDict["sec_height"]][startGeodesicsSectors[startGeodesic]]/2
        geodesicValues[geodesicDict["y_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][startGeodesicsSectors[startGeodesic]] + deltaYStart * startGeodesic - versatz_y * sectorValues[sectorDict["sec_width"]][startGeodesicsSectors[startGeodesic]]/2
        geodesicValues[geodesicDict["x_End"]][startGeodesic] = geodesicValues[geodesicDict["x_Start"]][startGeodesic] + math.sin(startGeodesicsAngle[startGeodesic] * math.pi/180) * lengthStartGeodesics
        geodesicValues[geodesicDict["y_End"]][startGeodesic] = geodesicValues[geodesicDict["y_Start"]][startGeodesic] + math.cos(startGeodesicsAngle[startGeodesic] * math.pi/180) * lengthStartGeodesics

        geodesicValues[geodesicDict["startParentSector"]][startGeodesic] = "[" + str(startGeodesicsSectors[startGeodesic]) + "," + str(startGeodesic) + "]"
        geodesicValues[geodesicDict["startLineID"]][startGeodesic] = "[" + str(startGeodesic) + "," + str(1) + "]"
        geodesicValues[geodesicDict["startStrokeWidth"]][startGeodesic] = 2

        geodesicValues[geodesicDict["startFill"]][startGeodesic] = "line_colors[" + str(startGeodesic) + "]"
        geodesicValues[geodesicDict["startStroke"]][startGeodesic] = "line_colors[" + str(startGeodesic) + "]"

    for ii in range(0, len(variablenamesGeodesics)):
        file.write(variablenamesGeodesics[ii] + "= [ ")
        for jj in range(0, len(startGeodesicsAngle)):
            file.write(str(geodesicValues[ii][jj]) + ', ')
        file.write("];\n")

    variablenamesMarks = ["markStart_x", "markStart_y", "markStartStrokeWidth", "markStartRadius", "markStartFill", "markStartStroke", "markStartParentSector", "markStartID"]
    markDict = dict(zip(variablenamesMarks, range(len(variablenamesMarks))))

    markValues = [[[] for ii in range(len(startMarksSectors))] for jj in range(len(variablenamesMarks))]

    for startMark in range(0, len(startMarksSectors)):
        markValues[markDict["markStart_x"]][startMark] = sectorValues[sectorDict["sec_posx"]][startMarksSectors[startMark]] + sectorValues[sectorDict["sec_width"]][startMarksSectors[startMark]] * mark_dist_from_mid_x[startMark]
        markValues[markDict["markStart_y"]][startMark] = sectorValues[sectorDict["sec_posy"]][startMarksSectors[startMark]] + sectorValues[sectorDict["sec_height"]][startMarksSectors[startMark]] * mark_dist_from_mid_y[startMark]

        markNumberInSector = 0

        if (startMark > 0):
            if (len(startMarksSectors) > 0):
                for jj in range(0, startMark):
                    if (startMarksSectors[jj] == startMarksSectors[startMark]):
                        markNumberInSector += 1


        markValues[markDict["markStartParentSector"]][startMark] = "[" + str(startMarksSectors[startMark]) + "," + str(markNumberInSector) + "]"
        markValues[markDict["markStartID"]][startMark] = "[" + str(startMark) + "]"
        markValues[markDict["markStartStrokeWidth"]][startMark] = 2
        markValues[markDict["markStartRadius"]][startMark] = startMarkRadius[startMark]
        markValues[markDict["markStartFill"]][startMark] = "mark_colors[" + str(startMark) + "]"
        markValues[markDict["markStartStroke"]][startMark] = "mark_colors[" + str(startMark) + "]"

    for ii in range(0, len(variablenamesMarks)):
        file.write(variablenamesMarks[ii] + "= [ ")
        for jj in range(0, len(startMarksSectors)):
            file.write(str(markValues[ii][jj]) + ', ')
        file.write("];\n")

    variablenamesTexts = ["textStart_x", "textStart_y", "textStartContent", "textStartFontSize", "textStartParentSector", "textStartID", "textStartAngle"]
    textDict = dict(zip(variablenamesTexts, range(len(variablenamesTexts))))

    textValues = [[[] for ii in range(len(startTextsSectors))] for jj in range(len(variablenamesTexts))]

    for startText in range(0, len(startTextsSectors)):

        sector_height = sectorValues[sectorDict["sec_height"]][startTextsSectors[startText]]
        sector_angle = sectorValues[sectorDict["sec_angle"]][startTextsSectors[startText]]
        textValues[textDict["textStart_x"]][startText] = sectorValues[sectorDict["sec_posx"]][startTextsSectors[startText]] - 2 * (sector_height / 2 * text_dist_from_mid_y[startText]) * math.sin(sector_angle * 0.5 * math.pi / 180) * math.cos(sector_angle * 0.5 * math.pi / 180)
        textValues[textDict["textStart_y"]][startText] = sectorValues[sectorDict["sec_posy"]][startTextsSectors[startText]] + sector_height / 2 * text_dist_from_mid_y[startText] - 0.000001 - 2 * (sector_height / 2 * text_dist_from_mid_y[startText]) * math.pow(math.sin(sector_angle * 0.5 * math.pi / 180), 2) + 15

        textNumberInSector = 0

        if (startText > 0):
            if (len(startTextsSectors) > 0):
                for jj in range(0, startMark):
                    if (startTextsSectors[jj] == startTextsSectors[startText]):
                        textNumberInSector += 1

        textValues[textDict["textStartParentSector"]][startText] = "[" + str(startTextsSectors[startText]) + "," + str(textNumberInSector) + "]"
        textValues[textDict["textStartID"]][startText] = "[" + str(startText) + "]"
        textValues[textDict["textStartFontSize"]][startText] = 15
        textValues[textDict["textStartContent"]][startText] = "'" + startTextContent[startText] + "'"
        textValues[textDict["textStartAngle"]][startText] = 0

    for ii in range(0, len(variablenamesTexts)):
        file.write(variablenamesTexts[ii] + "= [ ")
        for jj in range(0, len(startTextsSectors)):
            file.write(str(textValues[ii][jj]) + ', ')
        file.write("];\n")



    file.close()





if (__name__=="__main__" or __name__=="builtins"):
    main()
    print("done")