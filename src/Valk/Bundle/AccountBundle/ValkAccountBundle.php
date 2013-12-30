<?php

namespace Valk\Bundle\AccountBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ValkAccountBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
