<?php
require_once("funciones.php");
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Aranceles</title>
    <meta name="viewport" content="width=device-width">
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/estilo.css" rel="stylesheet" type="text/css">

<script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
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
                                <td>QD=</td>
                                <td><input type="number" id="a" step="0.table1" class="form-control" value="85.8"></td>
                                
                                <td><div class="input-group"><input type="number" id="b" step="0.01" class="form-control" value="-8"><span class="input-group-addon">P</span></div></td>
                            </tr>
                            <tr>
                                <td>QD=</td>
                                <td><input type="number" id="c" step="0.table1" class="form-control" value="-10.5"></td>
                                
                                <td><div class="input-group"><input type="number" id="d" step="0.01" class="form-control" value="3"><span class="input-group-addon">P</span></div></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div class="input-group input-group-sm">
                                      <span class="input-group-addon"><small>Precio Mundial</small></span>
                                      <input type="number" class="form-control" placeholder="4" id="pm" value="4">
                                        <span class="input-group-addon">&#36;</span>
                                    </div>
                                </td>
                                <td colspan="3">
                                    <div class="input-group input-group-sm">
                                      <span class="input-group-addon"><small>Arancel</small></span>
                                      <input type="number" class="form-control" placeholder="4" id="ar" value="50">
                                        <span class="input-group-addon">%</span>
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
                        <?=sb("Q","D")?>=<?=sb("Q","s")?><br>
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
                        <?=sb("P","max")?>=|a|/|b|<br>
                        <div id="r3"></div>
                    </div>
                </div>
            
            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">4.- Precio Min</div>
                    <div class="panel-body text-center">
                           <?=sb("P","min")?>=|c|/|d|<br>
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
                        <?=sb("P","max")?>=|a|/|b|<br>
                        <div id="r5"></div>
                    </div>
                </div>
            
            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">6.- Excedente de la Demanda</div>
                    <div class="panel-body text-center">
                           <?=sb("S","D")?>=1/2(<?=sb("P","max")?>-<?=sb("P","M")?>)*<?=sb("C","N")?><br>
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
                        <?=sb("S","s")?>=1/2(<?=sb("P","M")?>-<?=sb("P","min")?>)*<?=sb("P","N")?><br>
                        <div id="r7"></div>
                    </div>
                </div>
            
            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">8.- Excedente Global Inicial - Beneficio Social</div>
                    <div class="panel-body text-center">
                           <?=sb("SG","o")?>=<?=sb("S","D")?>+<?=sb("S","S")?><br>
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
                        <?=sb("t","($)")?>=PM*t(%)
                        <div id="r9"></div>
                    </div>
                </div>
            
            </div>
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">10. Nuevo Precio Interno</div>
                    <div class="panel-body text-center">
                        <?=sb("NPI","")?>=PM*t($)
                        <div id="r10"></div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</body>
</html>
