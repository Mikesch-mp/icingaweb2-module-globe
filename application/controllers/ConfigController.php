<?php
/* Icinga Web 2 | (c) 2013-2015 Icinga Development Team | GPLv2+ */

namespace Icinga\Module\Globe\Controllers;

use Icinga\Web\Controller;
use Icinga\Module\Globe\Forms\Config\GeneralConfigForm;

class ConfigController extends Controller
{
    /**
     * General configuration
     */
    public function indexAction()
    {
        $form = new GeneralConfigForm();
        $form->setIniConfig($this->Config());
        $form->handleRequest();

        $this->view->form = $form;
        $this->view->tabs = $this->Module()->getConfigTabs()->activate('config');
    }
}
