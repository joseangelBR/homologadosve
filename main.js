// main.js
// Lógica modular para tabla dinámica de sistemas homologados

const table = document.getElementById('dataTable');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const sortDirBtn = document.getElementById('sortDirBtn');
const noResults = document.getElementById('noResults');
const lastUpdate = document.getElementById('lastUpdate');

let data = [
    ["J000126518", "COMPAÑÍA ANÓNIMA EMPRESA CINES UNIDOS", "VISTA", "5.0.12.26", "Maquina Fiscal", "Gestión de cines y salas de entretenimiento."],
        ["J001871985", "ALIMENTOS ARCOS DORADOS C.A.", "NEWPOS", "3.5", "Maquina Fiscal", "Punto de venta (POS) para cadenas de comida rápida McDonald's."],
        ["J301850971", "PAPELERÍA LA NUBE AZUL, C.A.", "SISTEMA ADMINISTRATIVO OFIMANIA (SAP)", "1.0", "Maquina Fiscal", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J305125430", "INFOTAX, INFORMÁTICA TRIBUTARIA S.A.", "GALAC SISTEMA ADMINISTRATIVO SAW", "30.0", "Maquina Fiscal Forma Libre Imprenta Digital", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J506491060", "SAINT ENTERPRISE 2.0 C.A.", "SAINT ENTERPRISE ADMINISTRATIVO", "9.7.5.0", "Maquina Fiscal Forma Libre Imprenta Digital", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J296717508", "TECNOLAB SISTEMAS 21", "INFOLAB", "2.0.a", "Forma Libre", "Gestión operativa de laboratorios, incluyendo facturación, control de muestras y resultados."],
        ["J308016284", "A2SOFTWAY C.A.", "A2 PUNTO DE VENTA", "10.00.0ALX", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
        ["J308016284", "A2SOFTWAY C.A.", "A2 HERRAMIENTA ADMINISTRATIVA CONFIGURABLE MODULO DE VENTA (HAC)", "13.01.0ALX", "Maquina Fiscal Forma Libre Imprenta Digital", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J308016284", "A2SOFTWAY C.A.", "A2 ADMINISTRATIVO BASICO MODULO DE VENTAS", "10.0.1ALX", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J309827316", "SMS CONSULTORES C.A", "SISTEMA OASIS", "12.0.2.5", "Maquina Fiscal Forma Libre", "Sistema integral para la administración empresarial, gestión de operaciones, facturación (POS) e inventario."],
        ["J294813488", "SISTEMAS D3XD C.A.", "D3XD CLÍNICAS ADMINISTRATIVO", "1.1.18", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
    ["J294813488", "SISTEMAS D3XD C.A.", "D3Xd Gym", "1.0.10", "Maquina Fiscal", "Gestión administrativa integral (ERP) para gimnasios."],
        ["J294813488", "SISTEMAS D3XD C.A.", "GISIN3", "1.1.35", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J307928220", "KLK SISTEMAS, C.A.", "KLK POS", "4.0.1.7", "Maquina Fiscal", "Sistema integral para la administración empresarial, gestión de operaciones, facturación (POS) e inventario."],
        ["J299295760", "WINLEDGER INTERNACIONAL C.A.", "SOFTWARE WINLEDGER FACTURACIÓN Y PRODUCTOS", "2025.2.405", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J297059172", "CORPORACION VNET C.A.", "BUSINESS CENTRAL", "25.3.28755.29171", "Imprenta Digital", "Gestión administrativa integral (ERP) para proveedores de servicios de Internet, incluyendo administración de clientes, planes y facturación."],
        ["J505724347", "TOTAL APLICACIONES I, C.A.", "SIMPLITPOS", "4.2.06.04", "Maquina Fiscal Forma Libre Imprenta Digital", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J402385358", "THE FACTORY HKA VENEZUELA C.A.", "HKA FE (PORTAL WEB Y API DE EMISION DE DOCUMENTOS)", "1.1", "Imprenta Digital", "Portal web y API de emisión de facturas y otros documentos Fiscales"],
        ["J316353737", "PROCERT ITFB, C.A.", "SIGECE (PORTAL WEB DE EMISION DE DOCUMENTOS)", "1.2", "Imprenta Digital", "Portal web para emisión de facturas y otros documentos Fiscales"],
        ["J314584855", "INSITE VENEZUELA, C.A.", "HYBRID LITEPRO", "4", "Maquina Fiscal Forma Libre Imprenta Digital ", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J314584855", "INSITE VENEZUELA, C.A.", "HYBRID LITEOS", "3", "Maquina Fiscal Forma Libre Imprenta Digital", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J298076305", "ADN SOFTWARE, C.A.", "ADN SOFTWARE", "23.2.17.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J313140775", "EDUDATOS SISTEMAS Y SERVICIOS, C.A.", "SISTEMA VISUAL GEMA ADMINISTRATIVO", "2025.2.25.3905", "Forma Libre", "Gestión administrativa integral (ERP) para instituciones educativas."],
        ["J408495473", "AVY SISTEMAS, C.A.", "MD SYSTEM", "7.0", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
        ["J316270513", "SOLUCIONES MEDISOFTWARE, C.A.", "SISTEMA MEDICO INTEGRAL (SMI)", "7712", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
        ["J503744006", "EASY TECNOLOGICAS Y DESARROLLO, C.A.", "PROSALES", "1", "Imprenta Digital", "Portal web para emisión de facturas y otros documentos Fiscales"],
        ["J307777559", "SINCA - SOLUCIONES INTEGRALES, C.A.", "MICROSOFT DYNAMICS GP", "18.3.1245", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J303267319", "GRUPO H.M.T., C.A.", "SYSCLIN - SISTEMA DE CONTROL DE CLINICAS ADMINISTRATIVO CONTABLE", "1.0", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
        ["J303267319", "GRUPO H.M.T., C.A.", "CONCESIONES BANCO DE SANGRE", "1.0", "Forma Libre", "Gestión operativa de laboratorios, incluyendo facturación, control de muestras y resultados."],
        ["J303267319", "GRUPO H.M.T., C.A.", "BIOLAB", "2.0", "Forma Libre", "Gestión operativa de laboratorios, incluyendo facturación, control de muestras y resultados."],
        ["J401357482", "WIS DE VENEZUELA, C.A.", "WBLACK POS", "3.19.29.10", "Maquina Fiscal", "Gestión administrativa integral (ERP) con un módulo de punto de venta (POS) para ventas directas."],
        ["J304959508", "B Y C COMPUTACION, C.A.", "SAE PAGOS", "1.1", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (COLEGIO)"],

          ["J505448676", "SOLUCIONES AFDK, C.A.", "POSFAR", "4.1", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (FARMACIA MOVIL)"],
        ["J505448676", "SOLUCIONES AFDK, C.A.", "POSFAR", "4.7", "Maquina Fiscal", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (FARMACIA MOVIL)"],
        ["J305517495", "SOFTECH CONSULTORES, C.A.", "PROFIT PLUS PUNTO DE VENTA", "3.1", "Maquina Fiscal Forma Libre", "Gestión de punto de venta (POS) para ventas directas."],
        ["J305517495", "SOFTECH CONSULTORES, C.A.", "PROFIT PLUS ADMINISTRATIVO", "9.1", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J002545909", "CONSULTORES E INGENIEROS CONSEIN, C.A.", "MICROSOFT DYNAMICS GP", "18.4.1461 (2021)", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J506565196", "VALERY BUSINESS SOFTWARE, C.A.", "VALERY ADMINISTRATIVO SMALL BUSINESS", "6.0.0.7300", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J506565196", "VALERY BUSINESS SOFTWARE, C.A.", "VALERY ADMINISTRATIVO PROFESIONAL", "6.0.0.7300", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J506565196", "VALERY BUSINESS SOFTWARE, C.A.", "VALERY ADMINISTRATIVO ESTANDAR", "6.0.0.7300", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J506565196", "VALERY BUSINESS SOFTWARE, C.A.", "VALERY ADMINISTRATIVO CORPORATIVO", "6.0.0.7300", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J504769703", "CORPORACION SAEPLUSTELCO, C.A.", "SAEPLUS", "6", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J411781002", "GISCASOFT, C.A.", "SAFIRO V ADMINISTRATIVO FINANCIERO", "14.58", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J408384078", "EUREKA SERVICES, C.A.", "ODOO ENTERPRISE", "18", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
        ["J295321961", "BINAURAL, C.A.", "ODOO ENTERPRISE", "16.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
        ["J403501599", "SISERIN, C.A.", "POSTCLIN+", "1.0", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
        ["J312171197", "THE FACTORY HKA, C.A.", "HKA POS", "0.06.7", "Maquina Fiscal", "App Móvil para emisión de facturas y otros documentos Fiscales"],
        ["J312171197", "THE FACTORY HKA, C.A.", "HKA POS", "1.0.0", "Maquina Fiscal", "App Móvil para emisión de facturas y otros documentos Fiscales"],
        ["J003274445", "CESTATICKET SERVICES, C.A.", "TRI2 – EMISION ISS", "5.0.178.0", "Imprenta Digital", "Gestión administrativa integral (ERP) para ventas directas. (CESTATICKET)"],
        ["J001861009", "INFORMACION TELEFONICA INFORTEL, C.A.", "SISTEMA SISCON", "41.00", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J505026054", "CONTROL & PROCESS", "ODOO SH ENTERPRISE", "17", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
        ["J505724347", "TOTAL APLICACIONES I, C.A.", "SIMPLITPOS", "4.3.01.01", "Maquina Fiscal", "Gestión de punto de venta (POS) de Alimentos y Bebidas (RESTAURANTES)."],
        ["J506491060", "SAINT ENTERPRISE 2.0 C.A.", "SAINT ANNUALREST", "9.7.5.0", "Maquina Fiscal", "Gestión de punto de venta (POS) de Alimentos y Bebidas (RESTAURANTES)."],
        ["J295897928", "QSL SISTEMAS, C.A.", "MODULO DE FACTURACION DE ESTACIONAMIENTO (PARKING LOT)", "25.2", "Maquina Fiscal", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (ESTACIONAMIENTOS)"],
        ["J501414114", "INGEINT, C.A.", "INGEINT-ERP", "1R", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J506565196", "VALERY BUSINESS SOFTWARE, C.A.", "VALERY ADMINISTRATIVO PUNTO DE VENTAS", "6.0.0.7300", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J305269300", "GARZON HIPERMERCADO, C.A.", "BIADMIN", "1.0.0", "Maquina Fiscal", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. GARZON HIPERMERCADO"],
        ["J311909699", "ITBC DE VENEZUELA, C.A.", "ODOO SH ENTERPRISE", "17.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas. (DISTRIBUIDOR ODOO)"],
        ["J294813488", "SISTEMAS D3XD C.A.", "D3xD RESTAURANTES", "1.1.35", "Maquina Fiscal", "Gestión de punto de venta (POS) de Alimentos y Bebidas (RESTAURANTES)."],
        ["J303049524", "ALFA ASESORES DE OCCIDENTE, S.A.", "SqlFIGO", "2.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J408576856", "TENDENCIA VIRTUAL 2107, C.A.", "T-VIRTUAL", "2.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J501391602", "CORPORACION XETUX, C.A.", "XETUX XPOS XADMIN", "2.0.0.0", "Maquina Fiscal", "Gestión de punto de venta (POS) de Alimentos y Bebidas (RESTAURANTES)."],
        ["J314584855", "INSITE VENEZUELA, C.A.", "HybridPOS RESTAURANTE", "01", "Maquina Fiscal Imprenta Digital", "Gestión de punto de venta (POS) de Alimentos y Bebidas (RESTAURANTES)."],
        ["J298262940", "SERVICIOS INTEGRALES LEBLANC COMPUTER, C.A.", "CHRYSTAL ULTRAPLUS 2022", "1.0.3.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J297786090", "INFOAUTO SISTEMA DMS, C.A.", "INFOAUTO SOFTWARE AUTOMOTOR", "9.001", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J297786090", "INFOAUTO SISTEMA DMS, C.A.", "INFOAUTO SOFTWARE AUTOMOTOR", "9.002", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J302516820", "SUMERIA ASESORIA Y PROYECTOS, C.A.", "SISTEMA DE ASISTENCIA COMERCIAL (S.A.C)", "4.228", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
        ["J314541528", "ASIS CONSULTORES, C.A.", "SOLUCIÓN INTEGRAL MAESTRA SIM", "2.0.0", "Imprenta Digital", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J295321961", "BINAURAL", "ODOO SH Y ON PREMISE ENTERPRISE MODULO FORMA LIBRE", "17.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J504990450", "TD LOGICIEL, C.A.", "ODOO SH ENTERPRISE Y ON PREMISE ENTERPRISE", "17.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J505057022", "BOYER LEON & ASOCIADOS", "ODOO SH ENTERPRISE", "16.0.1", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J505057022", "BOYER LEON & ASOCIADOS", "ODOO SH ENTERPRISE", "16.0.2", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
        ["J505057022", "BOYER LEON & ASOCIADOS", "ODOO SH ENTERPRISE", "17.0.1", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
        ["J313506559", "FACTORY SOFT VENEZUELA, C.A.", "eFactory ERP", "25.02.22", "Maquina Fiscal Forma Libre Imprenta Digital", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
    ["J312181230", "BIGWISE", "STELLAR BUSINESS", "5.0.1", "Maquina Fiscal, Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J312181230", "BIGWISE", "STELLAR POS", "5.0.1", "Maquina Fiscal, Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J299030023", "LATIS INFORMATICA 101, C.A.", "LATIS/PRO", "1.8.4230", "Maquina Fiscal, Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J002008512", "H.L. SISTEMAS, C.A.", "BASE GRAFICO – SISTEMA DE FACTURACIÓN ESTÁNDAR", "STD-00901-001", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J401972020", "SOLUCIONES TECNOCAM, C.A.", "XCORE", "2025.04.03.01", "Maquina Fiscal", "Gestión administrativa integral (ERP) para gimnasios."],
  ["J075121503", "CENTRO MÉDICO MARACAY", "MD SYSTEM CMM", "3.0", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
  ["J002008512", "H.L. SISTEMAS, C.A.", "BASE GRAFICO – SISTEMA DE FACTURACIÓN DE PUNTOS DE VENTA", "PDV-00021-001", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J002008512", "H.L. SISTEMAS, C.A.", "BASE GRAFICO – SISTEMA DE FACTURACIÓN DE PUNTOS DE VENTA", "PDV-00121-001", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J002008512", "H.L. SISTEMAS, C.A.", "BASE GRAFICO – SISTEMA DE FACTURACIÓN DE PUNTOS DE VENTA", "PDV-00164-001", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J002008512", "H.L. SISTEMAS, C.A.", "BASE GRAFICO – SISTEMA DE FACTURACIÓN DE PUNTOS DE VENTA", "PDV-00529-001", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J409027767", "WAIKERI HITECH, C.A.", "ERP OMNINEXO", "6.0.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J001375600", "AMAZING GLOBAL DE VENEZUELA, C.A.", "JD EDWARDS ENTERPRISEONE", "9X", "Forma Libre", "Gestión administrativa integral (ERP)  para ventas directas."],
  ["J308047686", "PREMIUM SOFT INTERNATIONAL, C.A.", "ADMINISTRATIVO 9.1X", "9.1", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J308047686", "PREMIUM SOFT INTERNATIONAL, C.A.", "ADMINISTRATIVE BUSINESS", "3.0", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J308047686", "PREMIUM SOFT INTERNATIONAL, C.A.", "ADMINISTRATIVO CLÍNICA 9.1X", "9.1X", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J404358749", "GRUPO BIOS, C.A.", "ODOO SH ENTERPRISE", "17.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
  ["J297889035", "INFOAUTO SERVICIOS XXI, C.A.", "INFOAUTO CONCESIONARIO", "9.0.0.2", "Forma Libre", "Gestión administrativa integral (ERP) para gimnasios."],
  ["J502039627", "NIMETRIX, C.A.", "ODOO SH ENTERPRISE", "16", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J502039627", "NIMETRIX, C.A.", "ODOO SH ENTERPRISE", "18.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J505671820", "IEDUCA LATAM, C.A.", "KEY AND CLOUD", "1.0", "Forma Libre", "Gestión de módulos educativos y servicios integrales"],
  ["J312867043", "TODOTICKET 2004, C.A.", "SAP (ERP/CRM)", "1909", "Imprenta Digital", "Sistema integral para la administración empresarial, gestión de operaciones, facturación (POS) e inventario."],
  ["J502988009", "SADMINT SYSTEMS, C.A.", "SADMINT", "1", "Forma Libre", "Sistema integral para la administración empresarial, gestión de operaciones, facturación (POS) e inventario."],
  ["J411062626", "ARKISOFT SOLUCIONES DE SOFTWARE, C.A.", "ODOO SH ENTERPRISE", "17", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J501752028", "PLASOFTWARE, C.A.", "PLADE SOFTWARE", "3.0.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J297889035", "INFOAUTO SERVICIOS XXI, C.A.", "INFOAUTO SOFTWARE AUTOMOTOR", "9001", "Maquina Fiscal Forma Libre", "Gestión de vehiculos y repuestos."],
  ["J406612286", "ARCADAT VENEZUELA, C.A.", "ARCADAT WEB APP", "1.0.15", "Forma Libre", "Gestión administrativa integral (ERP) para instituciones educativas."],
  ["J503945826", "SOLUCIONES RP 26, C.A.", "SISTEMA INVU POS, C.A.", "2.4.4", "Maquina Fiscales", "Gestión de punto de venta (POS / RETAIL) de Alimentos y Bebidas (RESTAURANTES)."],
  ["J402686366", "SISTEMAS INTEGRALES SPARROW, C.A.", "SISTEMA ADMINISTRATIVO DE CLINICAS", "6.5", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
  ["V227382739", "MARCO AURELIO MENESES SOLANO", "ADMISOFT", "2025.04", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
  ["J316297063", "GENIO CASA DE SOFTWARE, C.A", "GENIO ADMINISTRATIVO INTERNACIONAL", "8.0.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS / RETAIL) para ventas directas."],
  ["J070095008", "DROGUERIA COBECA OCCIENTE, C.A.", "PROGRESS OPEN EDGE", "10.2B06", "Forma Libre", "Gestión administrativa integral (ERP) para (FARMACIA)"],
  ["J401607802", "SISTEMAS DE INFORMACION TECNOLOGICA COBECA, C.A.", "SMARTPHARMA", "2.2.2", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS / RETAIL) para ventas DE (FARMACIA)"],
  ["J503000902", "NOVUS DESARROLLO DIGITAL, C.A.", "PORTAL WEB DE EMISION DE DOCUMENTOS", "1.0", "Imprenta Digital", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J000299773", "PRICEWATERHOUSECOOPERS VENEZUELA (FRITES, MONTAÑEZ, CARREIRA Y ASOCIADOS)", "SISTEMA DE PROYECTOS E INTEGRACIÓN DE NEGOCIOS (SPIN)", "1.0", "Forma Libre", "Gestión de Ventas administrativas y facturación de servicios (ERP)"],
  ["J402686366", "SISTEMAS INTEGRALES SPARROW, C.A.", "ADMINISTRATIVO SPARROW", "4.0", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J309672371", "VIRTUAL OFFICE GROUP, C.A.", "MICROSOFT DYNAMIC GP 2016", "16", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J309672371", "VIRTUAL OFFICE GROUP, C.A.", "MICROSOFT DYNAMIC GP 18", "18", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J504990450", "TD LOGICIEL, C.A.", "ODOO SH Y ON PREMISE ENTERPRISE", "17.0", "Maquina Fiscal", "Gestión administrativa integral (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
  ["J295642954", "DW COMERCIALIZADORA, C.A.", "GALEPSO ERP", "5.1.3565", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J506619318", "CHASKIFACT, C.A.", "ODOO ENTERPRISE ON PREMISE", "15.0", "Imprenta Digital", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J293668700", "DESARROLLOS PNP, C.A.", "ABACCO WEB", "21.0.0.WF", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J293668700", "DESARROLLOS PNP, C.A.", "ABACCO WEB", "21.0.0.FL", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J502993436", "SRJ IMPORT.S, C.A.", "INNOVA PRO", "1.97.24", "Forma Libre Maquina Fiscal Imprenta Digital", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J501391602", "CORPORACION XETUX, C.A.", "XPOSADMIN", "1.27.0", "Imprenta Digital", "Gestión administrativa integral (ERP) para ventas directas."],
  ["J316647994", "INFOR BUSINESS CONSULTING, C.A.", "IBC ERP IDEMPIERE", "10.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas al mayor."],
  ["J500899980", "NEO APLICACIONES, C.A.", "SISTEMA INTEGRAL DE CLUBES SOCIALES Y DEPORTIVOS NEOCLUB", "23.4.252", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas, y manejo de clubes"],
  ["J311909699", "ITBC DE VENEZUELA, C.A.", "ODOO ON PREMISE ENTERPRISE", "17.0", "Forma Libre", "Gestión administrativa integral (ERP)  (DISTRIBUIDOR ODOO)"],
  ["J311909699", "ITBC DE VENEZUELA, C.A.", "ODOO SH ENTERPRISE", "16.0", "Forma Libre", "Gestión administrativa integral (ERP)  (DISTRIBUIDOR ODOO)"],
  ["J400123992", "SOMOS SISTEMAS, C.A.", "AFTIM ERP/POS.NET", "2025.1.0", "Maquina Fiscal / Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J400123992", "SOMOS SISTEMAS, C.A.", "AFTIM POS REACT", "2025.1.0", "Maquina Fiscal / Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
  ["J296363218", "BUILDING SECURITY SOLUTIONS, C.A.", "SOFT - ia", "1.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas dirigido a condominios"],
  ["J301548973", "CENTRO COMERCIAL MACUTO I, C.A.", "POSM", "2025.01.31", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J503141573", "JESISTEMAS.COM, C.A.", "FACILFACT", "2.0", "Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (COLEGIO)"],
  ["J294314627", "TOTALSOFTWARE DE VENEZUELA, C.A.", "VENTAS EXPRESS", "6.01", "FORMA LIBRE MAQUINA FISCAL", "Gestión de Ventas Express con módulo de punto de venta (POS)."],
  ["J501412561", "GRUPO INVERSIONES ACONINGUA", "ODOO CONMUNITY", "17.0", "FORMA LIBRE E IMPRENTA DIGITAL", "Gestión administrativa integral (ERP) para ventas directas. (DISTRIBUIDOR ODOO)"],
  ["J407559877", "BUSINESS RETAIL SYSTEMS, C.A.", "POSLINE NEW EDITION", "3.0.0.0", "Maquina Fiscal", "Punto de venta (POS) para ventas directas."],
  ["J294968970", "IMPORTADORA Y TRANSPORTE GONAVI, C.A.", "GFACTURACION", "1.3.5", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas (IMPORTACION)"],
  ["J405296062", "DEECOMPANY SERVICIOS ONLINE, C.A.", "GSTORE POS VERSION ESTACIONAMIENTO", "2.0.27", "Maquina Fiscal", "Punto de venta (POS) para ventas directas. (ESTACIONAMIENTOS)"],
  ["J412518364", "SINAPSYS GLOBAL, S.A.", "ODOO SH ENTERPRISE", "16.0", "FORMA LIBRE MAQUINA FISCAL", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
  ["J406373800", "SEUZ4 PLUS, C.A.", "S4VENTAS", "2025.3.1", "FORMA LIBRE", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J075024400", "LA CARIDAD, C.A.", "SAP ERP", "6.0", "FORMA LIBRE", "Gestión administrativa integral (ERP) para ventas directas (AGROINDUSTRIA)"],
  ["J312899565", "DIGITALES 2008, C.A.", "MELE", "1.0.0.10", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J000033870", "BECONSULT, C.A.", "SISTEMA CAJA REGISTRADORA", "8.0.1", "MAQUINA FISCAL", "Gestión de punto de venta (POS) para ventas directas. EXCLUSIVO PARA BECO"],
  ["J502055223", "GRUPO INN MARKETR DS, C.A.", "CLC LABORATORIOS", "2.3.0", "FORMA LIBRE", "Gestión operativa de laboratorios, incluyendo facturación, control de muestras y resultados."],
  ["J401329969", "IDA SOFTWARE SOLUTIONS, C.A.", "NOVAPOS", "1.0", "MAQUINA FISCAL", "Sistema Administrativos con Puntos de Ventas directo (POS)"],
  ["J001021744", "ZOOM INTERNATIONAL SERVICES, C.A.", "CANGURO AZUL", "1.0", "IMPRENTA DIGITAL", "Portal web para emisión de facturas y otros documentos Fiscales (SERVICIO DE ENCOMIENDAS ZOOM)"],
  ["J412498371", "IGEMAS, C.A.", "GEMA PARA ADMINISTRACION", "1.0", "FORMA LIBRE IMPRENTA DIGITAL", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J300248615", "LAS PLUMAS Y ASOCIADOS, C.A.", "ADEMPIERE", "3.9.3", "FORMA LIBRE", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J075361776", "DROGUERIA COBECA CENTRO, C.A.", "PROGESS OPEN EDGE", "10.2B06", "IMPRENTA DIGITAL", "Gestión administrativa integral (ERP) para ventas directas (USO EXCLUSIVO)"],
  ["J401329969", "IDA SOFTWARE SOLUTIONS, C.A.", "NOVATAX", "1.0.0", "FORMA LIBRE IMPRENTA DIGITAL", "Gestión administrativa integral (ERP)"],
  ["J300666204", "DROGUERIA COBECA ORIENTE, C.A.", "PROGESS OPEN EDGE", "10.2B06", "IMPRENTA DIGITAL", "Gestión administrativa integral (ERP) para ventas directas (USO EXCLUSIVO)"],
  ["J075271971", "PROMCA PROGRAMACION MECANIZADA, C.A.", "PROMObjects HOSPITAL", "16.0.2", "Forma Libre", "Gestión administrativa integral (ERP) para clínicas y centros de salud."],
  ["J313990060", "SPARTAN TECH´S C.A.", "SPARTAN POS", "1.1.3", "Maquina Fiscal", "Gestión de punto de venta (POS) para ventas directas."],
  ["J501414114", "INGEINT, C.A.", "ODOO ON PREMISE ENTERPRISE", "18.0", "Maquina Fiscal Forma Libre", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas. (DISTRIBUIDOR ODOO)"],
  ["J400788315", "ERP CONSULTORES Y ASOCIADOS, C.A.", "ADEMPIERE ERP", "3.9.3", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J309067958", "GOTO SYSTEMS, C.A.", "SIPRE", "3.0", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J400989094", "PQC TECNOLOGIA, C.A.", "SIGEA JURIDICO", "1.5", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J400788315", "ERP CONSULTORES Y ASOCIADOS, C.A.", "ADEMPIERE ERP", "3.9.4", "Forma Libre", "Gestión administrativa integral (ERP) para ventas directas"],
  ["J403595186", "SALAMANDRA SISTEMAS, C.A.", "SALAMANDRA SERVICIOS", "7.00", "Forma Libre Maquina Fiscal", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],

  ["J317090160", "RM SISTEMAS, C.A.", "SERIE MX", "1.1.1", "Forma Libre y Máquina Fiscal", "Sistema administrativo con punto de venta (POS) para ventas directas."],
    ["J403595186", "SALAMANDRA SISTEMAS, C.A.", "SALAMANDRA ADMINISTRATIVO", "7.00", "Forma Libre y Máquina Fiscal", "Gestión administrativa integral (ERP) con módulo de punto de venta (POS) para ventas directas."],
    ["J305125430", "INFOTAX, INFORMÁTICA TRIBUTARIA S.A.", "GALAC - G-FACTURA", "30.10", "Imprenta Digital / Forma Libre", "ERP con módulo de facturación a través de imprenta digital."],
    ["J001021744", "ZOOM INTERNATIONAL SERVICES, C.A.", "CINARUCO", "4.8.4", "Imprenta Digital", "Portal web de facturación propio del servicio de encomiendas ZOOM."],
    ["J505426079", "POSUPVEN, C.A.", "POSUP.APP", "2.0.1107", "Forma Libre y Máquina Fiscal", "ERP con punto de venta (POS) para ventas directas."],
    ["J504452610", "INSIEMPCA, C.A.", "EDUC@", "2.00", "Forma Libre", "Sistema de facturación especializado para instituciones educativas (colegios)."],
    ["J405741066", "CORPORACIÓN FARMARKET, C.A.", "FARMARKET VENTAS.NET", "1.0.8.10", "Máquina Fiscal", "Sistema POS propio para ventas directas en Farmarket."],
    ["V160693521", "GERMAN LUIS MATA MENESES", "SaS PYME POS", "2025.01.00", "Forma Libre y Máquina Fiscal", "Sistema administrativo con punto de venta (POS) para ventas directas, orientado a pequeñas y medianas empresas."],
    ["J505731475", "MOBILVENDOR SOFTWARE COMPANY, C.A.", "MOBILVENDOR", "2025.30", "Forma Libre e Imprenta Digital", "Portal web de facturación para operaciones comerciales."],
    ["V134702091", "ANGEL AUGUSTO OMAÑA RAMIREZ", "GP POS", "1.00", "Máquina Fiscal", "Punto de venta (POS) para ventas directas."],
    ["J504322512", "ONTOUCH CONSULTING, C.A.", "ONTOUCH ERP", "OTE45.000", "Forma Libre y Máquina Fiscal", "Sistema administrativo con punto de venta (POS) para ventas directas."],
    ["J000407479", "PRODUCTOS DE VIDRIO S.A. (PRODUVISA)", "SISTEMA DE FACTURACIÓN", "1.00", "Forma Libre", "Sistema administrativo de facturación propio desarrollado por PRODUVISA."]

];
let filteredData = [];
let sortKey = null;
let sortDir = "asc";

// Nombres de columnas amigables
const columnNames = [
  "RIF", "Empresa", "Sistema", "Versión", "Modalidad", "Descripción"
];

// Renderiza la fecha de última actualización
const renderLastUpdate = () => {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  lastUpdate.textContent = `Última actualización: ${now.toLocaleDateString('es-VE', options)}`;
};

// Renderiza el dropdown de columnas para ordenar
const renderSortSelect = () => {
  sortSelect.innerHTML = columnNames.map((name, i) =>
    `<option value="${i}" ${i === (sortKey ?? 2) ? 'selected' : ''}>${name}</option>`
  ).join('');
};

// Renderiza la tabla dinámica
const renderTable = (rows) => {
  if (!rows.length) {
    table.innerHTML = '';
    noResults.style.display = '';
    return;
  }
  noResults.style.display = 'none';
  // Cabecera
  let thead = '<thead><tr>';
  columnNames.forEach((name, i) => {
    thead += `<th data-key="${i}" class="${sortKey === i ? 'sorted' : ''}">${name}</th>`;
  });
  thead += '</tr></thead>';
  // Filas
  let tbody = '<tbody>';
  rows.forEach(obj => {
    tbody += '<tr>';
    obj.forEach(val => {
      tbody += `<td>${val}</td>`;
    });
    tbody += '</tr>';
  });
  tbody += '</tbody>';
  table.innerHTML = thead + tbody;
};

// Filtra los datos según el input de búsqueda y la columna seleccionada
const filterData = (query) => {
  if (!query) return [...data];
  const q = query.toLowerCase();
  return data.filter(row =>
    String(row[sortKey]).toLowerCase().includes(q)
  );
};

// Ordena los datos por la columna y dirección seleccionada
const sortData = (arr, key, dir) => {
  return [...arr].sort((a, b) => {
    let v1 = a[key], v2 = b[key];
    // Ordenamiento para strings y números
    if (!isNaN(v1) && !isNaN(v2)) {
      return dir === 'asc' ? v1 - v2 : v2 - v1;
    }
    return dir === 'asc'
      ? String(v1).localeCompare(String(v2), 'es', { sensitivity: 'base' })
      : String(v2).localeCompare(String(v1), 'es', { sensitivity: 'base' });
  });
};

// Actualiza la tabla según filtro y orden
const updateTable = () => {
  filteredData = filterData(searchInput.value);
  filteredData = sortData(filteredData, sortKey, sortDir);
  renderTable(filteredData);
};

// Inicializa eventos y render
const init = () => {
  renderLastUpdate();
  renderSortSelect();

  // Filtro de búsqueda
  searchInput.addEventListener('input', updateTable);

  // Ordenamiento por columna (dropdown)
  sortSelect.addEventListener('change', e => {
    sortKey = Number(e.target.value);
    updateTable();
    // Feedback visual
    Array.from(table.querySelectorAll('th')).forEach(th => th.classList.remove('sorted'));
    const th = table.querySelector(`th[data-key="${sortKey}"]`);
    if (th) th.classList.add('sorted');
  });

  // Botón de dirección asc/desc
  sortDirBtn.addEventListener('click', () => {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    sortDirBtn.textContent = sortDir === 'asc' ? 'Ascendente ▲' : 'Descendente ▼';
    sortDirBtn.classList.toggle('active');
    updateTable();
  });

  // Ordenar al hacer click en cabecera
  table.addEventListener('click', e => {
    if (e.target.tagName === 'TH') {
      const key = Number(e.target.getAttribute('data-key'));
      if (!isNaN(key)) {
        if (sortKey === key) {
          sortDir = sortDir === 'asc' ? 'desc' : 'asc';
          sortDirBtn.textContent = sortDir === 'asc' ? 'Ascendente ▲' : 'Descendente ▼';
          sortDirBtn.classList.toggle('active');
        } else {
          sortKey = key;
          sortSelect.value = key;
          sortDir = 'asc';
          sortDirBtn.textContent = 'Ascendente ▲';
          sortDirBtn.classList.add('active');
        }
        updateTable();
        // Feedback visual
        Array.from(table.querySelectorAll('th')).forEach(th => th.classList.remove('sorted'));
        e.target.classList.add('sorted');
      }
    }
  });
};



sortKey = 2; // Por defecto, columna "Sistema"
init();
updateTable();