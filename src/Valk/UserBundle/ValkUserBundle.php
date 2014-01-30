<?php

namespace Valk\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ValkUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
