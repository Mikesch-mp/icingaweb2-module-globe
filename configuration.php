<?php

$section = $this->menuSection(N_('Maps'))
    ->setIcon('globe')
    ->add($this->translate('Globe 3D'))
    ->setUrl('globe')
    ->setIcon('lightbulb');

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
