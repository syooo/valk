<?php

namespace Valk\Bundle\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Security\Core\SecurityContext;
use Valk\Bundle\MainBundle\Service;

class PagesController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function indexAction()
    {
        $this->get('twig')->addGlobal('is_front', true);

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
