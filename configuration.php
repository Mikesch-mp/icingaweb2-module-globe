<?php

$section = $this->menuSection(N_('Maps'))
    ->setIcon('globe')
    ->add($this->translate('Globe 3D'))
    ->setUrl('globe');

//JavaScript includes

$this->provideJsFile('vendor/Three/ThreeWebGL.js');
$this->provideJsFile('vendor/Three/ThreeExtras.js');
$this->provideJsFile('vendor/Three/RequestAnimationFrame.js');
$this->provideJsFile('vendor/Three/Detector.js');
$this->provideJsFile('globe.js');

//Configuration
$this->provideConfigTab('config', array(
    'title' => 'Configure this module',
    'label' => 'Config',
    'url' => 'config'
));
?>
