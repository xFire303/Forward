<?php include_once("../components/head.php") ?>
<?php include_once("../components/navbar.php") ?>

<section class="scannerContainer">

<h2 class="titolo">SCANNER PRODOTTI</h2>
<section class="hero">
    <div class="center"></div>
    <div class="rettangolo">
        <div class="scan"></div>
    </div>
    <i class="fa fa-qrcode" style="font-size: 400px; color: white;"></i>
</div>
<a href="#scanner-section" class="scroll-down-arrow"><i class="fa fa-chevron-down"></i></a>
</section>

<section id="scanner-section" class="sezione-1">
    <div id="container">
        <div class="scanner-wrapper">
            <video id="preview" autoplay></video>
        </div>
    </div>
    <button id="scanButton">Scansiona Rifiuto</button>
</section>

</section>

<!-- Include la libreria QuaggaJS -->
<script src="https://cdn.jsdelivr.net/npm/quagga/dist/quagga.min.js"></script>
<script src="../js/scanner.js"></script>

<?php include_once("../components/footer.php") ?>
