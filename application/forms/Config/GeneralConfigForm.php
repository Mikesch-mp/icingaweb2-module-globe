<?php
/* Icinga Web 2 | (c) 2013-2015 Icinga Development Team | GPLv2+ */

namespace Icinga\Module\Globe\Forms\Config;

use Icinga\Forms\ConfigForm;

class GeneralConfigForm extends ConfigForm
{
    /**
     * Initialize this form
     */
    public function init()
    {
        $this->setName('form_config_globe_general');
        $this->setSubmitLabel('Save Changes');
    }

    /**
     * {@inheritdoc}
     */
    public function createElements(array $formData)
    {
        $this->addElement(
            'text',
            'globe_factor',
            array(
                'value'         => '0.01',
                'label'         => 'Factor to multiply with',
                'description'   => 'For each service state the beam grows by this factor'
            )
        );
    }
}
