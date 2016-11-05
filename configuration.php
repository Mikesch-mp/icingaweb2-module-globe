<?php

$this->menuSection('Globe 3D')
     ->setIcon('lightbulb')
     ->setUrl('globe');

//JavaScript includes

$this->provideJsFile('third-party/Three/ThreeWebGL.js');
$this->provideJsFile('third-party/Three/ThreeExtras.js');
$this->provideJsFile('third-party/Three/RequestAnimationFrame.js');
$this->provideJsFile('third-party/Three/Detector.js');
$this->provideJsFile('globe.js');

//Configuration
$this->provideConfigTab('config', array(
    'title' => 'Configure this module',
    'label' => 'Config',
    'url' => 'config'
));
?>
