<?php

$this->menuSection('Globe 3D')
     ->setIcon('lightbulb')
     ->setUrl('globe');

//JavaScript includes

$this->provideJsFile('third-party/Detector.js');
$this->provideJsFile('third-party/three.min.js');
$this->provideJsFile('third-party/Tween.js');
$this->provideJsFile('globe.js');
?>
