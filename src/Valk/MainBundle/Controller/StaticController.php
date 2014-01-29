<?php

namespace Valk\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Security\Core\SecurityContext;
use Valk\Bundle\MainBundle\Service;

class StaticController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function indexAction()
    {
        return array();
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function howToStartAction()
    {
        return array();
    }
}
