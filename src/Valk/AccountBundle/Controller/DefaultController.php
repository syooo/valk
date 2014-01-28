<?php

namespace Valk\AccountBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ValkAccountBundle:Default:index.html.twig', array('name' => $name));
    }
}
