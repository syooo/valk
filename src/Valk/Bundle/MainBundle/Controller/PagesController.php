<?php

namespace Valk\Bundle\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class PagesController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function indexAction()
    {
        return array();
    }
}
