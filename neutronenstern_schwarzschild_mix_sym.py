import io
import math


zeilenanzahl = 40
spaltenanzahl = 8

anzahlSektorenDesSterns = 6

radius = 120
delta_r = (2/3)
delta_t = 1
sectorabstand_x = 20
sectorabstand_y = 20

fontSize = 15

start_x = 300
start_y = 100

startZoom = 0.65
startViewportTransform_4 = -100
startViewportTransform_5 = -2200

#startGeodesicsAngle: 180 Grad fuer Geodaeten, die senkrecht nach oben verlaufen
#startGeodesicsAngle: 135 Grad fuer Geodaeten im 45 Grad Winkel (Licht)
#startGeodesicsVersatz_x: Versatz in % entlang der Raumachse (wenn startGeodesicsVersatz_y = 0)
#startGeodesicsVersatz_y: Versatz in px entlang der Zeitachse (wenn startGeodesicsVersatz_x = 0)

startGeodesicsAngle = [180]

#WICHTIG, wenn in einem Sektor mehrere Geodäten starten sollen, so müssen sie in startGeodesicsSectors direkt auf einander folgen

startGeodesicsSectors = [  7 * zeilenanzahl -1]


startGeodesicsVersatz_x = [0.2]

startGeodesicsVersatz_y = [0]

startGeodesicsOperational = ['true']

def main():

    sector_y_dist = 0.0



    file = io.open("neutronenstern_schwarzschild_mix_sym_roehre.js",'w')

    file.write(
        "startZoom =" + str(startZoom) + "\n"
        "startViewportTransform_4 =" + str(startViewportTransform_4) + "\n"
        "startViewportTransform_5 =" + str(startViewportTransform_5) + "\n"
    )
    file.write("\n")

    file.write(
        "line_colors = [ 'orange', 'blue', 'black', 'green', 'black', 'grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey','grey'];")
    file.write("\n")

    variablenamesSectors = ["sec_name", "sec_ID",  "sec_fill", "sec_type", "sec_fontSize", "sec_width", "sec_height", "sec_timeEdgeLeft", "sec_timeEdgeRight", "spaceEdge", "sec_coords", "sec_neighbour_top", "sec_neighbour_right", "sec_neighbour_bottom", "sec_neighbour_left", "sec_posx", "sec_posy", "sec_angle"]
    sectorDict = dict(zip(variablenamesSectors,range(len(variablenamesSectors))))
    anzahlDerSektoren = zeilenanzahl * spaltenanzahl



    #sectorValues = np.zeros((len(variablenamesSectors),anzahlDerSektoren))
    sectorValues = [[[] for ii in range(anzahlDerSektoren)] for jj in range(len(variablenamesSectors))]



    for id in range(0, anzahlDerSektoren):
        sectorValues[sectorDict["sec_ID"]][id] = id
        sectorValues[sectorDict["sec_fontSize"]][id] = fontSize
    for zeile in range(0, zeilenanzahl):

        for ii in range(0, spaltenanzahl):
            #print("zeile", zeile)
            #print("Sektor", zeile + ii * zeilenanzahl)

            #Für die x-Position des Sektors wird die Sektorhöhe des alten Sektors verwendet.
            #Für die y-Position des Sektors wird die Hälfte der Differenz der zeitartigen Sektorkanten benötigt.
            # -> Diese Berechnung folgt weiter unten
            sectorValues[sectorDict["sec_name"]][zeile + ii * zeilenanzahl] = "'%c%d'" % (chr(ii + 97).upper(),(zeilenanzahl-zeile))
            if (ii == 0):
                sectorValues[sectorDict["sec_posx"]][zeile + ii * zeilenanzahl] = start_x
            else:
                sectorValues[sectorDict["sec_posx"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posx"]][zeile + (ii - 1) * zeilenanzahl] + sectorwidth + sectorabstand_x

            sectorValues[sectorDict["sec_angle"]][zeile + ii * zeilenanzahl] = 0

            if(ii < (spaltenanzahl/2 - anzahlSektorenDesSterns/2)):

                timeEdgeLeft = math.sqrt(1 - (1 / (abs(ii - (spaltenanzahl / 2)) * delta_r))) * delta_t * radius
                #print(1 - (1 / ((ii - (spaltenanzahl / 2)) * delta_r)))

                timeEdgeRight = math.sqrt(1 - (1 / (abs(ii - (spaltenanzahl / 2) + 1) * delta_r))) * delta_t * radius

                spaceEdge = math.sqrt(1 / (1 - (1 / (abs(ii - (spaltenanzahl / 2) + 0.5) * delta_r)))) * delta_r * radius

                sectorValues[sectorDict["sec_fill"]][zeile + ii * zeilenanzahl] = "'white'"
            else:
                if (ii < (spaltenanzahl / 2 + anzahlSektorenDesSterns / 2)):
                    timeEdgeLeft = 0.5 * ( (3 / math.sqrt(2)) - math.sqrt(1 - (1 / 8) * math.pow(delta_r * abs(ii - (spaltenanzahl / 2)), 2)) ) * delta_t * radius

                    timeEdgeRight = 0.5 * ( (3 / math.sqrt(2)) - math.sqrt(1 - (1 / 8) * math.pow(delta_r * abs(ii - (spaltenanzahl / 2) + 1), 2)) ) * delta_t * radius

                    spaceEdge =  math.sqrt(1 / ( 1 - (1 / 8) * math.pow(delta_r * abs(ii - (spaltenanzahl / 2) + 0.5),2))) * delta_r * radius

                    sectorValues[sectorDict["sec_fill"]][zeile + ii * zeilenanzahl] = "'#e2e2e2'"

                else:
                    timeEdgeLeft = math.sqrt(1 - (1 / (abs(ii - (spaltenanzahl / 2)) * delta_r))) * delta_t * radius

                    timeEdgeRight = math.sqrt(1 - (1 / (abs(ii - (spaltenanzahl / 2) + 1) * delta_r))) * delta_t * radius

                    spaceEdge = math.sqrt(1 / (1 - (1 / (abs(ii - (spaltenanzahl / 2) + 0.5) * delta_r)))) * delta_r * radius

                    sectorValues[sectorDict["sec_fill"]][zeile + ii * zeilenanzahl] = "'white'"



            offset_y = (timeEdgeRight - timeEdgeLeft) / 2

            sectorwidth = math.sqrt( math.pow(spaceEdge, 2) + math.pow(offset_y, 2))

            sectorValues[sectorDict["sec_width"]][zeile + ii * zeilenanzahl] = sectorwidth
            sectorValues[sectorDict["sec_height"]][zeile + ii * zeilenanzahl] = max(timeEdgeLeft, timeEdgeRight)
            sectorValues[sectorDict["sec_timeEdgeLeft"]][zeile + ii * zeilenanzahl] = timeEdgeLeft
            sectorValues[sectorDict["sec_timeEdgeRight"]][zeile + ii * zeilenanzahl] = timeEdgeRight
            sectorValues[sectorDict["spaceEdge"]][zeile + ii * zeilenanzahl] = spaceEdge


            sectorValues[sectorDict["sec_coords"]][zeile + ii * zeilenanzahl] = ([0,
                                                                               - timeEdgeLeft,
                                                                               sectorwidth,
                                                                               - timeEdgeLeft - offset_y,
                                                                               sectorwidth,
                                                                               offset_y,
                                                                               0,
                                                                               0])



            if (zeile == 0):
               sectorValues[sectorDict["sec_neighbour_top"]][zeile + ii * zeilenanzahl] = - 1
            else:
               sectorValues[sectorDict["sec_neighbour_top"]][zeile + ii * zeilenanzahl] = (zeile + ii * zeilenanzahl)- 1

            if (ii == spaltenanzahl - 1):
               sectorValues[sectorDict["sec_neighbour_right"]][zeile + ii * zeilenanzahl] = -1
            else:
               sectorValues[sectorDict["sec_neighbour_right"]][zeile + ii * zeilenanzahl] = zeile + (ii + 1) * zeilenanzahl

            if (zeile == zeilenanzahl - 1):
               sectorValues[sectorDict["sec_neighbour_bottom"]][zeile + ii * zeilenanzahl] = - 1
            else:
               sectorValues[sectorDict["sec_neighbour_bottom"]][zeile + ii * zeilenanzahl] = (zeile + ii * zeilenanzahl) + 1

            if (ii == 0):
               sectorValues[sectorDict["sec_neighbour_left"]][zeile + ii * zeilenanzahl] = -1
            else:
               sectorValues[sectorDict["sec_neighbour_left"]][zeile + ii * zeilenanzahl] = zeile + (ii - 1) * zeilenanzahl
            print("nachbar_links", sectorValues[sectorDict["sec_neighbour_left"]][zeile + ii * zeilenanzahl])

            if (zeile == 0):
                if ((ii - spaltenanzahl/2) == -(spaltenanzahl/2)):
                    sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = start_y
                else:
                    if ((ii - spaltenanzahl/2) < 0):
                        sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posy"]][zeile + (ii - 1) * zeilenanzahl] - ((sectorValues[sectorDict["sec_timeEdgeLeft"]][zeile + (ii -1) * zeilenanzahl] - sectorValues[sectorDict["sec_timeEdgeRight"]][zeile + (ii -1) * zeilenanzahl]) / 2)
                    else:
                        if (ii - spaltenanzahl/2) == 0:
                            sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posy"]][zeile + (ii - 1) * zeilenanzahl]
                        else:
                            sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posy"]][zeile + (ii - 1) * zeilenanzahl] + offset_y
            else:
                if (ii == 0):
                    sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = start_y + zeile * (timeEdgeRight + sectorabstand_y)

                else:
                    if ((ii - spaltenanzahl / 2) < 0):
                        sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posy"]][zeile + (ii - 1) * zeilenanzahl] - ((sectorValues[sectorDict["sec_timeEdgeLeft"]][zeile + (ii - 1) * zeilenanzahl] - sectorValues[sectorDict["sec_timeEdgeRight"]][zeile + (ii - 1) * zeilenanzahl]) / 2)
                    else:
                        if (ii - spaltenanzahl/2) == 0:
                            sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posy"]][zeile + (ii - 1) * zeilenanzahl]
                        else:
                            sectorValues[sectorDict["sec_posy"]][zeile + ii * zeilenanzahl] = sectorValues[sectorDict["sec_posy"]][zeile + (ii - 1) * zeilenanzahl] + offset_y




    for ii in range(0,len(variablenamesSectors)):
        file.write(variablenamesSectors[ii]+"= [ ")
        for jj in range(0,anzahlDerSektoren):
            file.write(str( sectorValues[ii][jj])+', ')
        file.write("];\n")

    lengthStartGeodesics = 40

    variablenamesGeodesics = ["startSectors", "x_Start", "y_Start", "x_End", "y_End", "startStrokeWidth", "startFill", "startStroke","startParentSector", "startLineID", "startGeodesicOperational"]
    geodesicDict = dict(zip(variablenamesGeodesics, range(len(variablenamesGeodesics))))

    geodesicValues = [[[] for ii in range(len(startGeodesicsAngle))] for jj in range(len(variablenamesGeodesics))]

    for startGeodesic in range(0, len(startGeodesicsAngle)):
        print(startGeodesic)
        geodesicValues[geodesicDict["startSectors"]][startGeodesic] = startGeodesicsSectors[startGeodesic]
        offset_y = (sectorValues[sectorDict["sec_timeEdgeLeft"]][startGeodesicsSectors[startGeodesic]] - sectorValues[sectorDict["sec_timeEdgeRight"]][startGeodesicsSectors[startGeodesic]]) / 2

        geodesicValues[geodesicDict["x_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posx"]][startGeodesicsSectors[startGeodesic]] + startGeodesicsVersatz_x[startGeodesic] * sectorValues[sectorDict["sec_width"]][startGeodesicsSectors[startGeodesic]]

        if (offset_y < 0.0):
            geodesicValues[geodesicDict["y_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][startGeodesicsSectors[startGeodesic]] + offset_y - startGeodesicsVersatz_y[startGeodesic] - offset_y * startGeodesicsVersatz_x[startGeodesic]
        else:
            geodesicValues[geodesicDict["y_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][startGeodesicsSectors[startGeodesic]] - startGeodesicsVersatz_y[startGeodesic] - offset_y * startGeodesicsVersatz_x[startGeodesic]

        geodesicValues[geodesicDict["x_End"]][startGeodesic] = sectorValues[sectorDict["sec_posx"]][startGeodesicsSectors[startGeodesic]] + math.sin(startGeodesicsAngle[startGeodesic] * math.pi / 180) * lengthStartGeodesics + startGeodesicsVersatz_x[startGeodesic] * sectorValues[sectorDict["sec_width"]][startGeodesicsSectors[startGeodesic]]
        if (offset_y < 0.0):
            geodesicValues[geodesicDict["y_End"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][startGeodesicsSectors[startGeodesic]] + math.cos(startGeodesicsAngle[startGeodesic] * math.pi / 180) * lengthStartGeodesics + offset_y - startGeodesicsVersatz_y[startGeodesic] - offset_y * startGeodesicsVersatz_x[startGeodesic]
        else:
            geodesicValues[geodesicDict["y_End"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][startGeodesicsSectors[startGeodesic]] + math.cos(startGeodesicsAngle[startGeodesic] * math.pi / 180) * lengthStartGeodesics - startGeodesicsVersatz_y[startGeodesic] - offset_y * startGeodesicsVersatz_x[startGeodesic]
        ParentID2 = 0
        if (startGeodesic == 0):
            geodesicValues[geodesicDict["startParentSector"]][startGeodesic] = "[" + str(startGeodesicsSectors[startGeodesic]) + "," + str(0) + "]"
        else:
            if (startGeodesicsSectors[startGeodesic] == startGeodesicsSectors[startGeodesic -1] ):
                ParentID2 = ParentID2 + 1
                geodesicValues[geodesicDict["startParentSector"]][startGeodesic] = "[" + str(startGeodesicsSectors[startGeodesic]) + "," + str(ParentID2) + "]"
            else:
                ParentID2 = 0
                geodesicValues[geodesicDict["startParentSector"]][startGeodesic] = "[" + str(startGeodesicsSectors[startGeodesic]) + "," + str(ParentID2) + "]"

        geodesicValues[geodesicDict["startLineID"]][startGeodesic] = "[" + str(startGeodesic) + "," + str(1) + "]"
        geodesicValues[geodesicDict["startStrokeWidth"]][startGeodesic] = 2

        geodesicValues[geodesicDict["startFill"]][startGeodesic] = "line_colors[" + str(startGeodesic) + "]"
        geodesicValues[geodesicDict["startStroke"]][startGeodesic] = "line_colors[" + str(startGeodesic) + "]"
        geodesicValues[geodesicDict["startGeodesicOperational"]][startGeodesic] = startGeodesicsOperational[startGeodesic]

    for ii in range(0, len(variablenamesGeodesics)):
        file.write(variablenamesGeodesics[ii] + "= [ ")
        for jj in range(0, len(startGeodesicsAngle)):
            file.write(str(geodesicValues[ii][jj]) + ', ')
        file.write("];\n")


    file.close()





if (__name__=="__main__" or __name__=="builtins"):
    main()
    print("done_2")
