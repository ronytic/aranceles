<?php
ini_set("short_open_tag ","On");
require_once("funciones.php");
$folder="";
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Aranceles</title>
    <meta name="viewport" content="width=device-width,user-scalable=no">

    <meta name="theme-color" content="#337ab7">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/estilo.css" rel="stylesheet" type="text/css">

<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/g/d3.min.js"></script>
<script src="js/g/function-plot.js"></script>
<script src="js/script.js"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="text-center">Efecto de los Aranceles</h3>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Datos
                    </div>
                    <div class="panel-body">
                        <table>
                            <tr>
                                <td><?php echo sb("Q","D")?>=</td>
                                <td><input type="number" id="a" step="0.table1" class="form-control" value="140"></td>

                                <td><div class="input-group"><input type="number" id="b" step="0.01" class="form-control" value="-20"><span class="input-group-addon">P</span></div></td>
                            </tr>
                            <tr>
                                <td><?php echo sb("Q","S")?>=</td>
                                <td><input type="number" id="c" step="0.table1" class="form-control" value="-20"></td>

                                <td><div class="input-group"><input type="number" id="d" step="0.01" class="form-control" value="20"><span class="input-group-addon">P</span></div></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div class="input-group input-group-sm">
                                      <span class="input-group-addon"><small>Precio Mundial</small></span>
                                      <input type="number" class="form-control" placeholder="4" id="pm" value="2">
                                        <span class="input-group-addon">&#36;</span>
                                    </div>
                                </td>
                                <td colspan="3">
                                    <div class="input-group input-group-sm">
                                      <span class="input-group-addon"><small>Arancel</small></span>
                                      <input type="number" class="form-control col-lg-2" placeholder="4" id="ar" value="0">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4">
                                    <div class="input-group input-group-sm">
                                      <span class="input-group-addon"><small>Cuota de Importación</small></span>
                                      <input type="number" class="form-control" placeholder="4" id="ci" value="40">
                                        <span class="input-group-addon">Unidades</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <input type="button" class="btn btn-primary btn-sm" value="Resolver" id="resolver">
                                </td>
                            </tr>
                        </table>


                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">1.-Precio de Equilibrio</div>
                    <div class="panel-body text-center">
                        Cantidad Demandada=Cantidad Ofertada<br>
                        <?php echo sb("Q","D")?>=<?php echo sb("Q","s")?><br>
                        <div id="r1"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">2.-Cantidad de Equilibrio</div>
                    <div class="panel-body text-center">

                        <div id="r2"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">3.-Precio Max</div>
                    <div class="panel-body text-center">
                        <?php echo sb("P","max")?>=|a|/|b|<br>
                        <div id="r3"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">4.- Precio Min</div>
                    <div class="panel-body text-center">
                           <?php echo sb("P","min")?>=|c|/|d|<br>
                        <div id="r4"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">5.-Gráfico</div>
                    <div class="panel-body text-center">
                        <div id="r5"></div>
                        <div id="g5"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">6.- Excedente de la Demanda</div>
                    <div class="panel-body text-center">
                           <?php echo sb("S","D")?>=1/2(<?php echo sb("P","max")?>-<?php echo sb("P","M")?>)*<?php echo sb("C","N")?><br>
                        <div id="r6"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">7.- Excedente de la Oferta</div>
                    <div class="panel-body text-center">

                        <div id="r7"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">8.- Excedente Global Inicial - Beneficio Social</div>
                    <div class="panel-body text-center">
                           <?php echo sb("SG","o")?>=<?php echo sb("S","D")?>+<?php echo sb("S","S")?><br>
                        <div id="r8"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Cantidad Necesaria de las Importaciones</div>
                    <div class="panel-body text-center">

                        <div id="r81"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">9. Arancel Especifico</div>
                    <div class="panel-body text-center">
                        <?php echo sb("t","($)")?>=PM*t(%)
                        <div id="r9"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">10. Nuevo Precio Interno</div>
                    <div class="panel-body text-center">
                        <?php echo sb("NPI","")?>=PM*t($)
                        <div id="r10"></div>
                        <div id="g10"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">11. Nuevo Excedente de la Demanda</div>
                    <div class="panel-body text-center">
                        <?php echo sb("NS","D")?>=1/2*(<?php echo sb("P","max")?>-NPI)*NCN
                        <div id="r11"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">12. Nuevo Excedente de la Oferta</div>
                    <div class="panel-body text-center">

                        <div id="r12"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">13. Nuevo Excedente Global</div>
                    <div class="panel-body text-center">
                        <?php echo sb("NSG","")?>=NSD+NSS
                        <div id="r13"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">14. Pérdida del Excedente</div>
                    <div class="panel-body text-center">
                        PE=<?php echo sb("SG","o")?>-NSG
                        <div id="r14"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">15. Ingresos Gubernamentales</div>
                    <div class="panel-body text-center">
                        <?php echo sb("IG","")?>=NQI+<?php echo sb("t","($)")?>
                        <div id="r15"></div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">16. Pérdida Social</div>
                    <div class="panel-body text-center">
                        PS=PE-IG
                        <div id="r16"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>
